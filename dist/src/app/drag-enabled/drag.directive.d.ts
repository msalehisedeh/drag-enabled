import { ElementRef, EventEmitter, Renderer } from '@angular/core';
import { DataTransfer } from './datatransfer';
export interface DragEvent {
    medium: any;
    node: HTMLElement;
}
export declare class DragDirective {
    private dataTransfer;
    private renderer;
    private el;
    medium: any;
    dragEffect: string;
    dragEnabled: (medium: any) => boolean;
    onDragStart: EventEmitter<any>;
    onDragEnd: EventEmitter<any>;
    onDrag: EventEmitter<any>;
    private handle;
    constructor(dataTransfer: DataTransfer, renderer: Renderer, el: ElementRef);
    dragStart(event: any): void;
    drag(event: any): void;
    dragEnd(event: any): void;
}
