import { ElementRef, EventEmitter } from '@angular/core';
import { DataTransfer } from './datatransfer';
import { DragEvent } from './drag-drop.interfaces';
export declare class DragDirective {
    private dataTransfer;
    private el;
    medium: any;
    dragEffect: string;
    dragEnabled: (event: DragEvent) => boolean;
    onDragStart: EventEmitter<any>;
    onDragEnd: EventEmitter<any>;
    onDrag: EventEmitter<any>;
    private handle;
    constructor(dataTransfer: DataTransfer, el: ElementRef);
    dragStart(event: any): void;
    private isIE;
    drag(event: any): void;
    dragEnd(event: any): void;
}
