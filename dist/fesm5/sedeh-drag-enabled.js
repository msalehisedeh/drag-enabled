import { __decorate } from 'tslib';
import { Injectable, EventEmitter, ElementRef, Input, Output, HostListener, Directive, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
    DataTransfer = __decorate([
        Injectable()
    ], DataTransfer);
    return DataTransfer;
}());

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
    DropDirective.ctorParameters = function () { return [
        { type: DataTransfer },
        { type: ElementRef }
    ]; };
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
    return DropDirective;
}());

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
            if (!this.isIE()) {
                event.dataTransfer.setData("makeItTick", "true"); // this is needed just to make drag/drop event trigger.
            }
            this.dataTransfer.setData("source", dragEvent);
            this.onDragStart.emit(dragEvent);
        }
    };
    DragDirective.prototype.isIE = function () {
        var match = navigator.userAgent.search(/(?:Edge|MSIE|Trident\/.*; rv:)/);
        var isIE = false;
        if (match !== -1) {
            isIE = true;
        }
        return isIE;
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
    DragDirective.ctorParameters = function () { return [
        { type: DataTransfer },
        { type: ElementRef }
    ]; };
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
    return DragDirective;
}());

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
            if (!this.isIE()) {
                event.dataTransfer.setData("makeItTick", "true"); // this is needed just to make drag/drop event trigger.
            }
            this.dataTransfer.setData("source", dragEvent);
            this.onDragStart.emit(dragEvent);
        }
    };
    DragInDocumentDirective.prototype.isIE = function () {
        var match = navigator.userAgent.search(/(?:Edge|MSIE|Trident\/.*; rv:)/);
        var isIE = false;
        if (match !== -1) {
            isIE = true;
        }
        return isIE;
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
    DragInDocumentDirective.ctorParameters = function () { return [
        { type: DataTransfer },
        { type: ElementRef }
    ]; };
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
    return DragInDocumentDirective;
}());

var DragDropModule = /** @class */ (function () {
    function DragDropModule() {
    }
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
    return DragDropModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DragDirective, DragDropModule, DragInDocumentDirective, DropDirective, DataTransfer as ɵa };
//# sourceMappingURL=sedeh-drag-enabled.js.map
