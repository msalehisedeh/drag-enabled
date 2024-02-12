/*
 * This directive is best suited for dragging an element with confinement of document.  it is not recomended
 * to be used in conjunction with a drop operation if an element is to be dropped on another element within 
 * a heirarchy of nodes.
 */
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
import { DragEvent } from './drag-drop.interfaces';

@Directive({
    selector: '[dragInDocument]'
})
export class DragInDocumentDirective implements OnChanges {
    
    @Input("medium")
    medium: any;
    
    @Input("dragEffect")
    dragEffect = "move";
    
    @Input("dragInDocument")
    dragInDocument = false;
    
    @Output()
    onDragStart: EventEmitter<any> = new EventEmitter();
    
    @Output()
    onDragEnd: EventEmitter<any> = new EventEmitter();
    
    @Output()
    onDrag: EventEmitter<any> = new EventEmitter();
    
    private handle: any;
        
    constructor(
        private dataTransfer: DataTransfer,
        private renderer: Renderer2,
        private host: ElementRef
    ) {
    }
    ngOnChanges(changes: any) {
        if (this.dragInDocument) {
            this.renderer.setAttribute(this.host.nativeElement, 'draggable', 'true');
            this.renderer.addClass(this.host.nativeElement, 'grabbable');
        } else {
            this.renderer.removeAttribute(this.host.nativeElement, 'draggable');
            this.renderer.removeClass(this.host.nativeElement, 'grabbable');
        }
    }

    @HostListener('dragstart', ['$event']) 
    dragStart(event: any) {
        if (typeof event.stopPropagation === 'function') {
            event.stopPropagation();
        }
        if (this.dragInDocument) {
            const rect = this.host.nativeElement.getBoundingClientRect();
            const dragEvent: DragEvent = {
                medium: this.medium,
                node: this.host.nativeElement,
                clientX: event.clientX,
                clientY: event.clientY,
                offset: {
                    x: event.clientX - rect.left, 
                    y: event.clientY - rect.top
                }
            }
            event.dataTransfer.effectAllowed = this.dragEffect;
            if (!this.isIE()) {
                event.dataTransfer.setData("makeItTick","true");// this is needed just to make drag/drop event trigger.
            }
            this.dataTransfer.setData("source", dragEvent);
            this.onDragStart.emit(dragEvent);
        }
    }
    private isIE() {
        const match = navigator.userAgent.search(/(?:Edge|MSIE|Trident\/.*; rv:)/);
        let isIE = false;
    
        if (match !== -1) {
            isIE = true;
        }
        return isIE;
    }
    
    @HostListener('document:dragover', ['$event']) 
    drag(event: any) {
        if (typeof event.preventDefault === 'function') {
            event.preventDefault()
        }
        const dragEvent: DragEvent = this.dataTransfer.getData("source");

        if (dragEvent) {
            dragEvent.clientX = event.clientX;
            dragEvent.clientY = event.clientY;
            this.onDrag.emit(dragEvent);
        }
    }
    
    @HostListener('document:dragend', ['$event']) 
    dragEnd(event: any) {
        if (typeof event.preventDefault === 'function') {
            event.stopPropagation();
            event.preventDefaul();
        }
        const dragEvent: DragEvent = this.dataTransfer.getData("source");
        if (dragEvent) {
            dragEvent.clientX = event.clientX;
            dragEvent.clientY = event.clientY;
            this.onDragEnd.emit(dragEvent);
        }      
        this.host.nativeElement.classList.remove("drag-over");
    }
}
