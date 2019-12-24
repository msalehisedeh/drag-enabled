import { __decorate } from 'tslib';
import { Injectable, EventEmitter, ElementRef, Input, Output, HostListener, Directive, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

let DataTransfer = class DataTransfer {
    constructor() {
        this.data = {};
    }
    setData(name, value) {
        this.data[name] = value;
    }
    getData(name) {
        return this.data[name];
    }
};
DataTransfer = __decorate([
    Injectable()
], DataTransfer);

let DropDirective = class DropDirective {
    constructor(dataTransfer, el) {
        this.dataTransfer = dataTransfer;
        this.el = el;
        this.dropEffect = "move";
        this.dropEnabled = (event) => true;
        this.onDragEnter = new EventEmitter();
        this.onDragLeave = new EventEmitter();
        this.onDrop = new EventEmitter();
        this.onDragOver = new EventEmitter();
    }
    createDropEvent(event) {
        return {
            source: this.dataTransfer.getData("source"),
            destination: {
                medium: this.medium,
                node: this.el.nativeElement,
                clientX: event.clientX,
                clientY: event.clientY
            }
        };
    }
    drop(event) {
        event.preventDefault();
        const dropEvent = this.createDropEvent(event);
        this.el.nativeElement.classList.remove("drag-over");
        if (this.dropEnabled(dropEvent)) {
            this.onDrop.emit(dropEvent);
        }
    }
    dragEnter(event) {
        event.preventDefault();
        const dropEvent = this.createDropEvent(event);
        if (this.dropEnabled(dropEvent)) {
            event.dataTransfer.dropEffect = this.dropEffect;
            this.el.nativeElement.classList.add("drag-over");
            this.onDragEnter.emit(dropEvent);
        }
        else {
            this.el.nativeElement.classList.remove("drag-over");
        }
    }
    dragLeave(event) {
        event.preventDefault();
        this.el.nativeElement.classList.remove("drag-over");
        this.onDragLeave.emit(event);
    }
    dragOver(event) {
        const dropEvent = this.createDropEvent(event);
        if (this.dropEnabled(dropEvent)) {
            event.preventDefault();
            this.el.nativeElement.classList.add("drag-over");
            this.onDragOver.emit(dropEvent);
        }
        else {
            this.el.nativeElement.classList.remove("drag-over");
        }
    }
};
DropDirective.ctorParameters = () => [
    { type: DataTransfer },
    { type: ElementRef }
];
__decorate([
    Input('medium')
], DropDirective.prototype, "medium", void 0);
__decorate([
    Input()
], DropDirective.prototype, "dropEffect", void 0);
__decorate([
    Input("dropEnabled")
], DropDirective.prototype, "dropEnabled", void 0);
__decorate([
    Output()
], DropDirective.prototype, "onDragEnter", void 0);
__decorate([
    Output()
], DropDirective.prototype, "onDragLeave", void 0);
__decorate([
    Output()
], DropDirective.prototype, "onDrop", void 0);
__decorate([
    Output()
], DropDirective.prototype, "onDragOver", void 0);
__decorate([
    HostListener('drop', ['$event'])
], DropDirective.prototype, "drop", null);
__decorate([
    HostListener('dragenter', ['$event'])
], DropDirective.prototype, "dragEnter", null);
__decorate([
    HostListener('dragleave', ['$event'])
], DropDirective.prototype, "dragLeave", null);
__decorate([
    HostListener('dragover', ['$event'])
], DropDirective.prototype, "dragOver", null);
DropDirective = __decorate([
    Directive({
        selector: '[dropEnabled]'
    })
], DropDirective);

let DragDirective = class DragDirective {
    constructor(dataTransfer, el) {
        this.dataTransfer = dataTransfer;
        this.el = el;
        this.dragEffect = "move";
        this.dragEnabled = (event) => true;
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onDrag = new EventEmitter();
    }
    dragStart(event) {
        event.stopPropagation();
        const rect = this.el.nativeElement.getBoundingClientRect();
        const dragEvent = {
            medium: this.medium,
            node: this.el.nativeElement,
            clientX: event.clientX,
            clientY: event.clientY,
            offset: {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            }
        };
        if (this.dragEnabled(dragEvent)) {
            event.dataTransfer.effectAllowed = this.dragEffect;
            if (!this.isIE()) {
                event.dataTransfer.setData("makeItTick", "true"); // this is needed just to make drag/drop event trigger.
            }
            this.dataTransfer.setData("source", dragEvent);
            this.onDragStart.emit(dragEvent);
        }
    }
    isIE() {
        const match = navigator.userAgent.search(/(?:Edge|MSIE|Trident\/.*; rv:)/);
        let isIE = false;
        if (match !== -1) {
            isIE = true;
        }
        return isIE;
    }
    drag(event) {
        const dragEvent = this.dataTransfer.getData("source");
        dragEvent.clientX = event.clientX;
        dragEvent.clientY = event.clientY;
        if (this.dragEnabled(dragEvent)) {
            this.onDrag.emit(dragEvent);
        }
    }
    dragEnd(event) {
        event.stopPropagation();
        const dragEvent = this.dataTransfer.getData("source");
        this.onDragEnd.emit(dragEvent);
        this.el.nativeElement.classList.remove("drag-over");
    }
};
DragDirective.ctorParameters = () => [
    { type: DataTransfer },
    { type: ElementRef }
];
__decorate([
    Input("medium")
], DragDirective.prototype, "medium", void 0);
__decorate([
    Input("dragEffect")
], DragDirective.prototype, "dragEffect", void 0);
__decorate([
    Input("dragEnabled")
], DragDirective.prototype, "dragEnabled", void 0);
__decorate([
    Output()
], DragDirective.prototype, "onDragStart", void 0);
__decorate([
    Output()
], DragDirective.prototype, "onDragEnd", void 0);
__decorate([
    Output()
], DragDirective.prototype, "onDrag", void 0);
__decorate([
    HostListener('dragstart', ['$event'])
], DragDirective.prototype, "dragStart", null);
__decorate([
    HostListener('dragover', ['$event'])
], DragDirective.prototype, "drag", null);
__decorate([
    HostListener('dragend', ['$event'])
], DragDirective.prototype, "dragEnd", null);
DragDirective = __decorate([
    Directive({
        selector: '[dragEnabled]',
        host: {
            '[draggable]': 'true'
        }
    })
], DragDirective);

let DragInDocumentDirective = class DragInDocumentDirective {
    constructor(dataTransfer, el) {
        this.dataTransfer = dataTransfer;
        this.el = el;
        this.dragEffect = "move";
        this.dragInDocument = (event) => true;
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onDrag = new EventEmitter();
    }
    dragStart(event) {
        event.stopPropagation();
        const rect = this.el.nativeElement.getBoundingClientRect();
        const dragEvent = {
            medium: this.medium,
            node: this.el.nativeElement,
            clientX: event.clientX,
            clientY: event.clientY,
            offset: {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            }
        };
        if (this.dragInDocument(dragEvent)) {
            event.dataTransfer.effectAllowed = this.dragEffect;
            if (!this.isIE()) {
                event.dataTransfer.setData("makeItTick", "true"); // this is needed just to make drag/drop event trigger.
            }
            this.dataTransfer.setData("source", dragEvent);
            this.onDragStart.emit(dragEvent);
        }
    }
    isIE() {
        const match = navigator.userAgent.search(/(?:Edge|MSIE|Trident\/.*; rv:)/);
        let isIE = false;
        if (match !== -1) {
            isIE = true;
        }
        return isIE;
    }
    drag(event) {
        const dragEvent = this.dataTransfer.getData("source");
        dragEvent.clientX = event.clientX;
        dragEvent.clientY = event.clientY;
        if (this.dragInDocument(dragEvent)) {
            this.onDrag.emit(dragEvent);
        }
    }
    dragEnd(event) {
        event.stopPropagation();
        const dragEvent = this.dataTransfer.getData("source");
        this.onDragEnd.emit(dragEvent);
        this.el.nativeElement.classList.remove("drag-over");
    }
};
DragInDocumentDirective.ctorParameters = () => [
    { type: DataTransfer },
    { type: ElementRef }
];
__decorate([
    Input("medium")
], DragInDocumentDirective.prototype, "medium", void 0);
__decorate([
    Input("dragEffect")
], DragInDocumentDirective.prototype, "dragEffect", void 0);
__decorate([
    Input("dragInDocument")
], DragInDocumentDirective.prototype, "dragInDocument", void 0);
__decorate([
    Output()
], DragInDocumentDirective.prototype, "onDragStart", void 0);
__decorate([
    Output()
], DragInDocumentDirective.prototype, "onDragEnd", void 0);
__decorate([
    Output()
], DragInDocumentDirective.prototype, "onDrag", void 0);
__decorate([
    HostListener('dragstart', ['$event'])
], DragInDocumentDirective.prototype, "dragStart", null);
__decorate([
    HostListener('document:dragover', ['$event'])
], DragInDocumentDirective.prototype, "drag", null);
__decorate([
    HostListener('document:dragend', ['$event'])
], DragInDocumentDirective.prototype, "dragEnd", null);
DragInDocumentDirective = __decorate([
    Directive({
        selector: '[dragInDocument]',
        host: {
            '[draggable]': 'true'
        }
    })
], DragInDocumentDirective);

let DragDropModule = class DragDropModule {
};
DragDropModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [
            DragDirective,
            DragInDocumentDirective,
            DropDirective
        ],
        exports: [
            DragDirective,
            DragInDocumentDirective,
            DropDirective
        ],
        entryComponents: [],
        providers: [
            DataTransfer
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], DragDropModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DragDirective, DragDropModule, DragInDocumentDirective, DropDirective, DataTransfer as ɵa };
//# sourceMappingURL=sedeh-drag-enabled.js.map
