import { ElementRef, EventEmitter } from '@angular/core';
import { DataTransfer } from './datatransfer';
export declare class DragInDocumentDirective {
    private dataTransfer;
    private el;
    medium: any;
    dragEffect: string;
    dragInDocument: (event: any) => boolean;
    onDragStart: EventEmitter<any>;
    onDragEnd: EventEmitter<any>;
    onDrag: EventEmitter<any>;
    private handle;
    constructor(dataTransfer: DataTransfer, el: ElementRef);
    dragStart(event: any): void;
    drag(event: any): void;
    dragEnd(event: any): void;
}
