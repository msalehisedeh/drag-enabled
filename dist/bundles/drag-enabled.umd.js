(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('drag-enabled', ['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['drag-enabled'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

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
    { type: core.Injectable },
];
DataTransfer.ctorParameters = function () { return []; };
var DropDirective = /** @class */ (function () {
    function DropDirective(dataTransfer, el) {
        this.dataTransfer = dataTransfer;
        this.el = el;
        this.dropEffect = "move";
        this.dropEnabled = function (event) { return true; };
        this.onDragEnter = new core.EventEmitter();
        this.onDragLeave = new core.EventEmitter();
        this.onDrop = new core.EventEmitter();
        this.onDragOver = new core.EventEmitter();
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
    { type: core.Directive, args: [{
                selector: '[dropEnabled]'
            },] },
];
DropDirective.ctorParameters = function () { return [
    { type: DataTransfer },
    { type: core.ElementRef }
]; };
DropDirective.propDecorators = {
    medium: [{ type: core.Input, args: ['medium',] }],
    dropEffect: [{ type: core.Input }],
    dropEnabled: [{ type: core.Input, args: ["dropEnabled",] }],
    onDragEnter: [{ type: core.Output }],
    onDragLeave: [{ type: core.Output }],
    onDrop: [{ type: core.Output }],
    onDragOver: [{ type: core.Output }],
    drop: [{ type: core.HostListener, args: ['drop', ['$event'],] }],
    dragEnter: [{ type: core.HostListener, args: ['dragenter', ['$event'],] }],
    dragLeave: [{ type: core.HostListener, args: ['dragleave', ['$event'],] }],
    dragOver: [{ type: core.HostListener, args: ['dragover', ['$event'],] }]
};
var DragDirective = /** @class */ (function () {
    function DragDirective(dataTransfer, el) {
        this.dataTransfer = dataTransfer;
        this.el = el;
        this.dragEffect = "move";
        this.dragEnabled = function (event) { return true; };
        this.onDragStart = new core.EventEmitter();
        this.onDragEnd = new core.EventEmitter();
        this.onDrag = new core.EventEmitter();
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
    { type: core.Directive, args: [{
                selector: '[dragEnabled]',
                host: {
                    '[draggable]': 'true'
                }
            },] },
];
DragDirective.ctorParameters = function () { return [
    { type: DataTransfer },
    { type: core.ElementRef }
]; };
DragDirective.propDecorators = {
    medium: [{ type: core.Input, args: ["medium",] }],
    dragEffect: [{ type: core.Input, args: ["dragEffect",] }],
    dragEnabled: [{ type: core.Input, args: ["dragEnabled",] }],
    onDragStart: [{ type: core.Output }],
    onDragEnd: [{ type: core.Output }],
    onDrag: [{ type: core.Output }],
    dragStart: [{ type: core.HostListener, args: ['dragstart', ['$event'],] }],
    drag: [{ type: core.HostListener, args: ['drag', ['$event'],] }],
    dragEnd: [{ type: core.HostListener, args: ['dragend', ['$event'],] }]
};
var DragInDocumentDirective = /** @class */ (function () {
    function DragInDocumentDirective(dataTransfer, el) {
        this.dataTransfer = dataTransfer;
        this.el = el;
        this.dragEffect = "move";
        this.dragInDocument = function (event) { return true; };
        this.onDragStart = new core.EventEmitter();
        this.onDragEnd = new core.EventEmitter();
        this.onDrag = new core.EventEmitter();
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
    { type: core.Directive, args: [{
                selector: '[dragInDocument]',
                host: {
                    '[draggable]': 'true'
                }
            },] },
];
DragInDocumentDirective.ctorParameters = function () { return [
    { type: DataTransfer },
    { type: core.ElementRef }
]; };
DragInDocumentDirective.propDecorators = {
    medium: [{ type: core.Input, args: ["medium",] }],
    dragEffect: [{ type: core.Input, args: ["dragEffect",] }],
    dragInDocument: [{ type: core.Input, args: ["dragInDocument",] }],
    onDragStart: [{ type: core.Output }],
    onDragEnd: [{ type: core.Output }],
    onDrag: [{ type: core.Output }],
    dragStart: [{ type: core.HostListener, args: ['dragstart', ['$event'],] }],
    drag: [{ type: core.HostListener, args: ['document:dragover', ['$event'],] }],
    dragEnd: [{ type: core.HostListener, args: ['document:dragend', ['$event'],] }]
};
var DragDropModule = /** @class */ (function () {
    function DragDropModule() {
    }
    return DragDropModule;
}());
DragDropModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
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
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
            },] },
];

exports.DropDirective = DropDirective;
exports.DragDirective = DragDirective;
exports.DragInDocumentDirective = DragInDocumentDirective;
exports.DragDropModule = DragDropModule;
exports.ɵa = DataTransfer;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=drag-enabled.umd.js.map
