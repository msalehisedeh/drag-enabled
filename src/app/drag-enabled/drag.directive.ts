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

export interface DragEvent {
    medium: any,
    node: HTMLElement,
    clientX?: number,
    clientY?: number,
    offset?: {
        x: number, 
        y: number
    }
}

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

        const rect = this.el.nativeElement.getBoundingClientRect();
        const dragEvent: DragEvent = {
            medium: this.medium,
            node: this.el.nativeElement,
            clientX: event.clientX,
            clientY: event.clientY,
            offset: {
                x: event.clientX-rect.left, 
                y:event.clientY-rect.top
            }
        }
        if (this.dragEnabled(dragEvent)) {
            event.dataTransfer.effectAllowed = this.dragEffect;
            event.dataTransfer.setData("makeItTick","true");// this is needed just to make drag/drop event trigger.

            this.dataTransfer.setData("source", dragEvent);
            this.onDragStart.emit(dragEvent);
        }
    }
    
    @HostListener('drag', ['$event']) 
    drag(event) {
        const dragEvent: DragEvent = this.dataTransfer.getData("source");

        dragEvent.clientX = event.clientX;
        dragEvent.clientY = event.clientY;
        
        if (this.dragEnabled(dragEvent)) {
            this.onDrag.emit(dragEvent);
        }
    }
    
    @HostListener('dragend', ['$event']) 
    dragEnd(event) {
        event.stopPropagation();

        const dragEvent: DragEvent = this.dataTransfer.getData("source");

        dragEvent.clientX = event.clientX;
        dragEvent.clientY = event.clientY;
        
        this.onDragEnd.emit(dragEvent);
        this.renderer.setElementClass(this.el.nativeElement, "drag-over", false);
    }
}
