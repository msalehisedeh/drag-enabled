(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
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
    function DropDirective(dataTransfer, renderer, el) {
        this.dataTransfer = dataTransfer;
        this.renderer = renderer;
        this.el = el;
        this.dropEffect = "move";
        this.dropEnabled = function (event) { return true; };
        this.onDragEnter = new core.EventEmitter();
        this.onDragLeave = new core.EventEmitter();
        this.onDrop = new core.EventEmitter();
        this.onDragOver = new core.EventEmitter();
    }
    DropDirective.prototype.createDropEvent = function () {
        return {
            source: this.dataTransfer.getData("source"),
            destination: {
                medium: this.medium,
                node: this.el.nativeElement
            }
        };
    };
    DropDirective.prototype.drop = function (event) {
        event.preventDefault();
        var dropEvent = this.createDropEvent();
        this.renderer.setElementClass(this.el.nativeElement, "drag-over", false);
        if (this.dropEnabled(dropEvent)) {
            this.onDrop.emit(dropEvent);
        }
    };
    DropDirective.prototype.dragEnter = function (event) {
        event.preventDefault();
        var dropEvent = this.createDropEvent();
        if (this.dropEnabled(dropEvent)) {
            event.dataTransfer.dropEffect = this.dropEffect;
            this.renderer.setElementClass(this.el.nativeElement, "drag-over", true);
            this.onDragEnter.emit(dropEvent);
        }
        else {
            this.renderer.setElementClass(this.el.nativeElement, "drag-over", false);
        }
    };
    DropDirective.prototype.dragLeave = function (event) {
        event.preventDefault();
        this.renderer.setElementClass(this.el.nativeElement, "drag-over", false);
        this.onDragLeave.emit(event);
    };
    DropDirective.prototype.dragOver = function (event) {
        var dropEvent = this.createDropEvent();
        if (this.dropEnabled(dropEvent)) {
            event.preventDefault();
            this.renderer.setElementClass(this.el.nativeElement, "drag-over", true);
            this.onDragOver.emit(dropEvent);
        }
        else {
            this.renderer.setElementClass(this.el.nativeElement, "drag-over", false);
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
    { type: DataTransfer, },
    { type: core.Renderer, },
    { type: core.ElementRef, },
]; };
DropDirective.propDecorators = {
    "medium": [{ type: core.Input, args: ['medium',] },],
    "dropEffect": [{ type: core.Input },],
    "dropEnabled": [{ type: core.Input, args: ["dropEnabled",] },],
    "onDragEnter": [{ type: core.Output },],
    "onDragLeave": [{ type: core.Output },],
    "onDrop": [{ type: core.Output },],
    "onDragOver": [{ type: core.Output },],
    "drop": [{ type: core.HostListener, args: ['drop', ['$event'],] },],
    "dragEnter": [{ type: core.HostListener, args: ['dragenter', ['$event'],] },],
    "dragLeave": [{ type: core.HostListener, args: ['dragleave', ['$event'],] },],
    "dragOver": [{ type: core.HostListener, args: ['dragover', ['$event'],] },],
};
var DragDirective = /** @class */ (function () {
    function DragDirective(dataTransfer, renderer, el) {
        this.dataTransfer = dataTransfer;
        this.renderer = renderer;
        this.el = el;
        this.dragEffect = "move";
        this.dragEnabled = function (medium) { return true; };
        this.onDragStart = new core.EventEmitter();
        this.onDragEnd = new core.EventEmitter();
        this.onDrag = new core.EventEmitter();
    }
    DragDirective.prototype.dragStart = function (event) {
        var dragEvent = {
            medium: this.medium,
            node: this.el.nativeElement
        };
        event.stopPropagation();
        if (this.dragEnabled(dragEvent)) {
            event.dataTransfer.effectAllowed = this.dragEffect;
            event.dataTransfer.setData("makeItTick", "true");
            this.dataTransfer.setData("source", dragEvent);
            this.onDragStart.emit(dragEvent);
        }
    };
    DragDirective.prototype.drag = function (event) {
        var dragEvent = this.dataTransfer.getData("source");
        if (this.dragEnabled(dragEvent)) {
            this.onDrag.emit(dragEvent);
        }
    };
    DragDirective.prototype.dragEnd = function (event) {
        event.stopPropagation();
        var dragEvent = this.dataTransfer.getData("source");
        this.onDragEnd.emit(dragEvent);
        this.renderer.setElementClass(this.el.nativeElement, "drag-over", false);
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
    { type: DataTransfer, },
    { type: core.Renderer, },
    { type: core.ElementRef, },
]; };
DragDirective.propDecorators = {
    "medium": [{ type: core.Input, args: ["medium",] },],
    "dragEffect": [{ type: core.Input, args: ["dragEffect",] },],
    "dragEnabled": [{ type: core.Input, args: ["dragEnabled",] },],
    "onDragStart": [{ type: core.Output },],
    "onDragEnd": [{ type: core.Output },],
    "onDrag": [{ type: core.Output },],
    "dragStart": [{ type: core.HostListener, args: ['dragstart', ['$event'],] },],
    "drag": [{ type: core.HostListener, args: ['drag', ['$event'],] },],
    "dragEnd": [{ type: core.HostListener, args: ['dragend', ['$event'],] },],
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
                    DropDirective
                ],
                exports: [
                    DragDirective,
                    DropDirective
                ],
                entryComponents: [],
                providers: [
                    DragDirective,
                    DropDirective,
                    DataTransfer
                ],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
            },] },
];
DragDropModule.ctorParameters = function () { return []; };

exports.DropDirective = DropDirective;
exports.DragDirective = DragDirective;
exports.DragDropModule = DragDropModule;
exports.ɵa = DataTransfer;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=drag-enabled.umd.js.map
