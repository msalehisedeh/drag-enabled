import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    Output,
    EventEmitter,
    Renderer
} from '@angular/core';
import { DataTransfer } from './datatransfer';

@Directive({
    selector: '[dragEnabled]',
    host: {
        '[draggable]': 'true'
    }
})
export class DragDirective {
    
    @Input("medium")
    medium: any;
    
    @Input("dragEffect")
    dragEffect = "move";
    
    @Input("dragEnabled")
    dragEnabled = (medium) => true;
    
    @Output()
    onDragStart: EventEmitter<any> = new EventEmitter();
    
    @Output()
    onDragEnd: EventEmitter<any> = new EventEmitter();
    
    @Output()
    onDrag: EventEmitter<any> = new EventEmitter();
    
    private handle: any;
        
    constructor(
        private dataTransfer: DataTransfer,
        private renderer: Renderer,
        private el: ElementRef
    ) {
    }

    @HostListener('dragstart', ['$event']) 
    dragStart(event) {
        event.stopPropagation();
        if (this.dragEnabled(this.medium)) {
            event.dataTransfer.effectAllowed = this.dragEffect;
            event.dataTransfer.setData("makeItTick","true");// this is needed just to make drag/drop event trigger.

            this.dataTransfer.setData("source", this.medium);
            this.onDragStart.emit(this.medium);
        }
    }
    
    @HostListener('drag', ['$event']) 
    drag(event) {
        if (this.dragEnabled(this.medium)) {
            this.onDrag.emit(this.medium);
        }
    }
    
    @HostListener('dragend', ['$event']) 
    dragEnd(event) {
        event.stopPropagation();	
        this.onDragEnd.emit(this.medium);
        this.renderer.setElementClass(this.el.nativeElement, "drag-over", false);
    }
}
