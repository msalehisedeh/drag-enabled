import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    Output,
    OnChanges,
    EventEmitter,
    Renderer2
} from '@angular/core';

import { DataTransfer } from './datatransfer';
import { DropEvent } from './drag-drop.interfaces';


@Directive({
    selector: '[dropEnabled]'
})
export class DropDirective implements OnChanges {
    
    @Input('medium')
    medium: any;
        
    @Input()
    dropEffect = "move";
        
    @Input("dropEnabled")
    dropEnabled = false;

    @Output()
    onDragEnter: EventEmitter<any> = new EventEmitter();
    
    @Output()
    onDragLeave: EventEmitter<any> = new EventEmitter();
    
    @Output()
    onDrop: EventEmitter<any> = new EventEmitter();
    
    @Output()
    onDragOver: EventEmitter<any> = new EventEmitter();

    constructor(
        private dataTransfer: DataTransfer,
        private renderer: Renderer2,
        private host: ElementRef
    ) {}
    ngOnChanges(changes: any) {
        if (this.dropEnabled) {
            this.renderer.setAttribute(this.host.nativeElement, 'draggable', 'true');
            this.renderer.addClass(this.host.nativeElement, 'grabbable');
        } else {
            this.renderer.removeAttribute(this.host.nativeElement, 'draggable');
            this.renderer.removeClass(this.host.nativeElement, 'grabbable');
        }
    }
	private createDropEvent(event: any): DropEvent {
		return {
            source: this.dataTransfer.getData("source"),
            destination: {
                medium: this.medium,
                node: this.host.nativeElement,
                clientX: event.clientX,
                clientY: event.clientY
            }
		};
	}

    @HostListener('drop', ['$event'])
    drop(event: any) {
        if (this.dropEnabled) {
            if (typeof event.preventDefault === 'function') {
                event.preventDefault();
            }
            this.host.nativeElement.classList.remove("drag-over");
            this.onDrop.emit(this.createDropEvent(event));
        }
    }
    
    @HostListener('dragenter', ['$event']) 
    dragEnter(event: any) {
        if (typeof event.preventDefault === 'function') {
            event.preventDefault();
        }
        if (this.dropEnabled) {
            event.dataTransfer.dropEffect = this.dropEffect;

            this.host.nativeElement.classList.add("drag-over");
            this.onDragEnter.emit(this.createDropEvent(event));
        } else {
            this.host.nativeElement.classList.remove("drag-over");
        }
    }
    
    @HostListener('dragleave', ['$event']) 
    dragLeave(event: any) {
        if (typeof event.preventDefault === 'function') {
            event.preventDefault();
        }
        this.host.nativeElement.classList.remove("drag-over");
        this.onDragLeave.emit(event);
    }
    
    @HostListener('dragover', ['$event']) 
    dragOver(event: any) {
        if (this.dropEnabled) {
            if (typeof event.preventDefault === 'function') {
                event.preventDefault();
            }
            this.host.nativeElement.classList.add("drag-over");
            this.onDragOver.emit(this.createDropEvent(event));
        } else {
            this.host.nativeElement.classList.remove("drag-over");
        }
    }
}