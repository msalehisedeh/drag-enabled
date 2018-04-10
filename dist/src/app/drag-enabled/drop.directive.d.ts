import { ElementRef, EventEmitter } from '@angular/core';
import { DataTransfer } from './datatransfer';
import { DropEvent } from './drag-drop.interfaces';
export declare class DropDirective {
    private dataTransfer;
    private el;
    medium: any;
    dropEffect: string;
    dropEnabled: (event: DropEvent) => boolean;
    onDragEnter: EventEmitter<any>;
    onDragLeave: EventEmitter<any>;
    onDrop: EventEmitter<any>;
    onDragOver: EventEmitter<any>;
    constructor(dataTransfer: DataTransfer, el: ElementRef);
    private createDropEvent(event);
    drop(event: any): void;
    dragEnter(event: any): void;
    dragLeave(event: any): void;
    dragOver(event: any): void;
}
