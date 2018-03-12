import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    Output,
    Renderer,
    EventEmitter
} from '@angular/core';

import { DataTransfer } from './datatransfer';

export interface DropEvent {
    source: any,
    destination: any
}

@Directive({
    selector: '[dropEnabled]'
})
export class DropDirective {
    
    @Input('medium')
    medium: any;
        
    @Input()
    dropEffect = "move";
        
    @Input("dropEnabled")
    dropEnabled = (event: DropEvent) => true;

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
        private renderer: Renderer,
        private el: ElementRef
    ) {}
            
    @HostListener('drop', ['$event'])
    drop(event) {
        event.preventDefault();
        const dropEvent = {
            source: this.dataTransfer.getData("source"),
            destination: this.medium
        }
        this.renderer.setElementClass(this.el.nativeElement, "drag-over", false);

        if (this.dropEnabled(dropEvent)) {
            this.onDrop.emit(dropEvent);
        }
    }
    
    @HostListener('dragenter', ['$event']) 
    dragEnter(event) {
        event.preventDefault();
        const dropEvent = {
            source: this.dataTransfer.getData("source"),
            destination: this.medium
        }
        if (this.dropEnabled(dropEvent)) {
            event.dataTransfer.dropEffect = this.dropEffect;

            this.renderer.setElementClass(this.el.nativeElement, "drag-over", true);
            this.onDragEnter.emit(dropEvent);
        } else {
            this.renderer.setElementClass(this.el.nativeElement, "drag-over", false);
        }
    }
    
    @HostListener('dragleave', ['$event']) 
    dragLeave(event) {
        event.preventDefault();
                
        this.renderer.setElementClass(this.el.nativeElement, "drag-over", false);
        this.onDragLeave.emit(event);
    }
    
    @HostListener('dragover', ['$event']) 
    dragOver(event) {
        const dropEvent = {
            source: this.dataTransfer.getData("source"),
            destination: this.medium
        }
        if (this.dropEnabled(dropEvent)) {
            event.preventDefault();
            this.renderer.setElementClass(this.el.nativeElement, "drag-over", true);
            this.onDragOver.emit(dropEvent);
        } else {
            this.renderer.setElementClass(this.el.nativeElement, "drag-over", false);
        }
    }
}