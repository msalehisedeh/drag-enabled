import { Injectable, Directive, ElementRef, HostListener, Input, Output, EventEmitter, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

var DataTransfer = /** @class */ (function () {
    function DataTransfer() {
        this.data = {};
    }
    DataTransfer.prototype.setData = function (name, value) {
        this.data[name] = value;
    };
    DataTransfer.prototype.getData = function (name) {
        return this.data[name];
    };
    return DataTransfer;
}());
DataTransfer.decorators = [
    { type: Injectable },
];
DataTransfer.ctorParameters = function () { return []; };
var DropDirective = /** @class */ (function () {
    function DropDirective(dataTransfer, el) {
        this.dataTransfer = dataTransfer;
        this.el = el;
        this.dropEffect = "move";
        this.dropEnabled = function (event) { return true; };
        this.onDragEnter = new EventEmitter();
        this.onDragLeave = new EventEmitter();
        this.onDrop = new EventEmitter();
        this.onDragOver = new EventEmitter();
    }
    DropDirective.prototype.createDropEvent = function (event) {
        return {
            source: this.dataTransfer.getData("source"),
            destination: {
                medium: this.medium,
                node: this.el.nativeElement,
                clientX: event.clientX,
                clientY: event.clientY
            }
        };
    };
    DropDirective.prototype.drop = function (event) {
        event.preventDefault();
        var dropEvent = this.createDropEvent(event);
        this.el.nativeElement.classList.remove("drag-over");
        if (this.dropEnabled(dropEvent)) {
            this.onDrop.emit(dropEvent);
        }
    };
    DropDirective.prototype.dragEnter = function (event) {
        event.preventDefault();
        var dropEvent = this.createDropEvent(event);
        if (this.dropEnabled(dropEvent)) {
            event.dataTransfer.dropEffect = this.dropEffect;
            this.el.nativeElement.classList.add("drag-over");
            this.onDragEnter.emit(dropEvent);
        }
        else {
            this.el.nativeElement.classList.remove("drag-over");
        }
    };
    DropDirective.prototype.dragLeave = function (event) {
        event.preventDefault();
        this.el.nativeElement.classList.remove("drag-over");
        this.onDragLeave.emit(event);
    };
    DropDirective.prototype.dragOver = function (event) {
        var dropEvent = this.createDropEvent(event);
        if (this.dropEnabled(dropEvent)) {
            event.preventDefault();
            this.el.nativeElement.classList.add("drag-over");
            this.onDragOver.emit(dropEvent);
        }
        else {
            this.el.nativeElement.classList.remove("drag-over");
        }
    };
    return DropDirective;
}());
DropDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dropEnabled]'
            },] },
];
DropDirective.ctorParameters = function () { return [
    { type: DataTransfer, },
    { type: ElementRef, },
]; };
DropDirective.propDecorators = {
    "medium": [{ type: Input, args: ['medium',] },],
    "dropEffect": [{ type: Input },],
    "dropEnabled": [{ type: Input, args: ["dropEnabled",] },],
    "onDragEnter": [{ type: Output },],
    "onDragLeave": [{ type: Output },],
    "onDrop": [{ type: Output },],
    "onDragOver": [{ type: Output },],
    "drop": [{ type: HostListener, args: ['drop', ['$event'],] },],
    "dragEnter": [{ type: HostListener, args: ['dragenter', ['$event'],] },],
    "dragLeave": [{ type: HostListener, args: ['dragleave', ['$event'],] },],
    "dragOver": [{ type: HostListener, args: ['dragover', ['$event'],] },],
};
var DragDirective = /** @class */ (function () {
    function DragDirective(dataTransfer, el) {
        this.dataTransfer = dataTransfer;
        this.el = el;
        this.dragEffect = "move";
        this.dragEnabled = function (event) { return true; };
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onDrag = new EventEmitter();
    }
    DragDirective.prototype.dragStart = function (event) {
        event.stopPropagation();
        var rect = this.el.nativeElement.getBoundingClientRect();
        var dragEvent = {
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
            event.dataTransfer.setData("makeItTick", "true");
            this.dataTransfer.setData("source", dragEvent);
            this.onDragStart.emit(dragEvent);
        }
    };
    DragDirective.prototype.drag = function (event) {
        var dragEvent = this.dataTransfer.getData("source");
        dragEvent.clientX = event.clientX;
        dragEvent.clientY = event.clientY;
        if (this.dragEnabled(dragEvent)) {
            this.onDrag.emit(dragEvent);
        }
    };
    DragDirective.prototype.dragEnd = function (event) {
        event.stopPropagation();
        var dragEvent = this.dataTransfer.getData("source");
        this.onDragEnd.emit(dragEvent);
        this.el.nativeElement.classList.remove("drag-over");
    };
    return DragDirective;
}());
DragDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dragEnabled]',
                host: {
                    '[draggable]': 'true'
                }
            },] },
];
DragDirective.ctorParameters = function () { return [
    { type: DataTransfer, },
    { type: ElementRef, },
]; };
DragDirective.propDecorators = {
    "medium": [{ type: Input, args: ["medium",] },],
    "dragEffect": [{ type: Input, args: ["dragEffect",] },],
    "dragEnabled": [{ type: Input, args: ["dragEnabled",] },],
    "onDragStart": [{ type: Output },],
    "onDragEnd": [{ type: Output },],
    "onDrag": [{ type: Output },],
    "dragStart": [{ type: HostListener, args: ['dragstart', ['$event'],] },],
    "drag": [{ type: HostListener, args: ['drag', ['$event'],] },],
    "dragEnd": [{ type: HostListener, args: ['dragend', ['$event'],] },],
};
var DragInDocumentDirective = /** @class */ (function () {
    function DragInDocumentDirective(dataTransfer, el) {
        this.dataTransfer = dataTransfer;
        this.el = el;
        this.dragEffect = "move";
        this.dragInDocument = function (event) { return true; };
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onDrag = new EventEmitter();
    }
    DragInDocumentDirective.prototype.dragStart = function (event) {
        event.stopPropagation();
        var rect = this.el.nativeElement.getBoundingClientRect();
        var dragEvent = {
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
            event.dataTransfer.setData("makeItTick", "true");
            this.dataTransfer.setData("source", dragEvent);
            this.onDragStart.emit(dragEvent);
        }
    };
    DragInDocumentDirective.prototype.drag = function (event) {
        var dragEvent = this.dataTransfer.getData("source");
        dragEvent.clientX = event.clientX;
        dragEvent.clientY = event.clientY;
        if (this.dragInDocument(dragEvent)) {
            this.onDrag.emit(dragEvent);
        }
    };
    DragInDocumentDirective.prototype.dragEnd = function (event) {
        event.stopPropagation();
        var dragEvent = this.dataTransfer.getData("source");
        this.onDragEnd.emit(dragEvent);
        this.el.nativeElement.classList.remove("drag-over");
    };
    return DragInDocumentDirective;
}());
DragInDocumentDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dragInDocument]',
                host: {
                    '[draggable]': 'true'
                }
            },] },
];
DragInDocumentDirective.ctorParameters = function () { return [
    { type: DataTransfer, },
    { type: ElementRef, },
]; };
DragInDocumentDirective.propDecorators = {
    "medium": [{ type: Input, args: ["medium",] },],
    "dragEffect": [{ type: Input, args: ["dragEffect",] },],
    "dragInDocument": [{ type: Input, args: ["dragInDocument",] },],
    "onDragStart": [{ type: Output },],
    "onDragEnd": [{ type: Output },],
    "onDrag": [{ type: Output },],
    "dragStart": [{ type: HostListener, args: ['dragstart', ['$event'],] },],
    "drag": [{ type: HostListener, args: ['document:dragover', ['$event'],] },],
    "dragEnd": [{ type: HostListener, args: ['document:dragend', ['$event'],] },],
};
var DragDropModule = /** @class */ (function () {
    function DragDropModule() {
    }
    return DragDropModule;
}());
DragDropModule.decorators = [
    { type: NgModule, args: [{
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
                    DragDirective,
                    DragInDocumentDirective,
                    DropDirective,
                    DataTransfer
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] },
];
DragDropModule.ctorParameters = function () { return []; };

export { DropDirective, DragDirective, DragInDocumentDirective, DragDropModule, DataTransfer as ɵa };
//# sourceMappingURL=drag-enabled.js.map
