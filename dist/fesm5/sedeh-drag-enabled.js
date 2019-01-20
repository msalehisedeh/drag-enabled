import { Injectable, Directive, ElementRef, HostListener, Input, Output, EventEmitter, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DataTransfer = /** @class */ (function () {
    function DataTransfer() {
        this.data = {};
    }
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    DataTransfer.prototype.setData = /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        this.data[name] = value;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    DataTransfer.prototype.getData = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.data[name];
    };
    DataTransfer.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DataTransfer.ctorParameters = function () { return []; };
    return DataTransfer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
    /**
     * @param {?} event
     * @return {?}
     */
    DropDirective.prototype.createDropEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    /**
     * @param {?} event
     * @return {?}
     */
    DropDirective.prototype.drop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        /** @type {?} */
        var dropEvent = this.createDropEvent(event);
        this.el.nativeElement.classList.remove("drag-over");
        if (this.dropEnabled(dropEvent)) {
            this.onDrop.emit(dropEvent);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DropDirective.prototype.dragEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        /** @type {?} */
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
    /**
     * @param {?} event
     * @return {?}
     */
    DropDirective.prototype.dragLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.el.nativeElement.classList.remove("drag-over");
        this.onDragLeave.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DropDirective.prototype.dragOver = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
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
    DropDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dropEnabled]'
                },] }
    ];
    /** @nocollapse */
    DropDirective.ctorParameters = function () { return [
        { type: DataTransfer },
        { type: ElementRef }
    ]; };
    DropDirective.propDecorators = {
        medium: [{ type: Input, args: ['medium',] }],
        dropEffect: [{ type: Input }],
        dropEnabled: [{ type: Input, args: ["dropEnabled",] }],
        onDragEnter: [{ type: Output }],
        onDragLeave: [{ type: Output }],
        onDrop: [{ type: Output }],
        onDragOver: [{ type: Output }],
        drop: [{ type: HostListener, args: ['drop', ['$event'],] }],
        dragEnter: [{ type: HostListener, args: ['dragenter', ['$event'],] }],
        dragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }],
        dragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }]
    };
    return DropDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
    /**
     * @param {?} event
     * @return {?}
     */
    DragDirective.prototype.dragStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        /** @type {?} */
        var rect = this.el.nativeElement.getBoundingClientRect();
        /** @type {?} */
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
            event.dataTransfer.setData("makeItTick", "true"); // this is needed just to make drag/drop event trigger.
            this.dataTransfer.setData("source", dragEvent);
            this.onDragStart.emit(dragEvent);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DragDirective.prototype.drag = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var dragEvent = this.dataTransfer.getData("source");
        dragEvent.clientX = event.clientX;
        dragEvent.clientY = event.clientY;
        if (this.dragEnabled(dragEvent)) {
            this.onDrag.emit(dragEvent);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DragDirective.prototype.dragEnd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        /** @type {?} */
        var dragEvent = this.dataTransfer.getData("source");
        this.onDragEnd.emit(dragEvent);
        this.el.nativeElement.classList.remove("drag-over");
    };
    DragDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dragEnabled]',
                    host: {
                        '[draggable]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    DragDirective.ctorParameters = function () { return [
        { type: DataTransfer },
        { type: ElementRef }
    ]; };
    DragDirective.propDecorators = {
        medium: [{ type: Input, args: ["medium",] }],
        dragEffect: [{ type: Input, args: ["dragEffect",] }],
        dragEnabled: [{ type: Input, args: ["dragEnabled",] }],
        onDragStart: [{ type: Output }],
        onDragEnd: [{ type: Output }],
        onDrag: [{ type: Output }],
        dragStart: [{ type: HostListener, args: ['dragstart', ['$event'],] }],
        drag: [{ type: HostListener, args: ['drag', ['$event'],] }],
        dragEnd: [{ type: HostListener, args: ['dragend', ['$event'],] }]
    };
    return DragDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
    /**
     * @param {?} event
     * @return {?}
     */
    DragInDocumentDirective.prototype.dragStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        /** @type {?} */
        var rect = this.el.nativeElement.getBoundingClientRect();
        /** @type {?} */
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
            event.dataTransfer.setData("makeItTick", "true"); // this is needed just to make drag/drop event trigger.
            this.dataTransfer.setData("source", dragEvent);
            this.onDragStart.emit(dragEvent);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DragInDocumentDirective.prototype.drag = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var dragEvent = this.dataTransfer.getData("source");
        dragEvent.clientX = event.clientX;
        dragEvent.clientY = event.clientY;
        if (this.dragInDocument(dragEvent)) {
            this.onDrag.emit(dragEvent);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DragInDocumentDirective.prototype.dragEnd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        /** @type {?} */
        var dragEvent = this.dataTransfer.getData("source");
        this.onDragEnd.emit(dragEvent);
        this.el.nativeElement.classList.remove("drag-over");
    };
    DragInDocumentDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dragInDocument]',
                    host: {
                        '[draggable]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    DragInDocumentDirective.ctorParameters = function () { return [
        { type: DataTransfer },
        { type: ElementRef }
    ]; };
    DragInDocumentDirective.propDecorators = {
        medium: [{ type: Input, args: ["medium",] }],
        dragEffect: [{ type: Input, args: ["dragEffect",] }],
        dragInDocument: [{ type: Input, args: ["dragInDocument",] }],
        onDragStart: [{ type: Output }],
        onDragEnd: [{ type: Output }],
        onDrag: [{ type: Output }],
        dragStart: [{ type: HostListener, args: ['dragstart', ['$event'],] }],
        drag: [{ type: HostListener, args: ['document:dragover', ['$event'],] }],
        dragEnd: [{ type: HostListener, args: ['document:dragend', ['$event'],] }]
    };
    return DragInDocumentDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DragDropModule = /** @class */ (function () {
    function DragDropModule() {
    }
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
                        DataTransfer
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                },] }
    ];
    return DragDropModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { DropDirective, DragDirective, DragInDocumentDirective, DragDropModule, DataTransfer as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VkZWgtZHJhZy1lbmFibGVkLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac2VkZWgvZHJhZy1lbmFibGVkL3NyYy9hcHAvZHJhZy1lbmFibGVkL2RhdGF0cmFuc2Zlci50cyIsIm5nOi8vQHNlZGVoL2RyYWctZW5hYmxlZC9zcmMvYXBwL2RyYWctZW5hYmxlZC9kcm9wLmRpcmVjdGl2ZS50cyIsIm5nOi8vQHNlZGVoL2RyYWctZW5hYmxlZC9zcmMvYXBwL2RyYWctZW5hYmxlZC9kcmFnLmRpcmVjdGl2ZS50cyIsIm5nOi8vQHNlZGVoL2RyYWctZW5hYmxlZC9zcmMvYXBwL2RyYWctZW5hYmxlZC9kcmFnLW9ubHkuZGlyZWN0aXZlLnRzIiwibmc6Ly9Ac2VkZWgvZHJhZy1lbmFibGVkL3NyYy9hcHAvZHJhZy1lbmFibGVkL2RyYWdkcm9wLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBUaGUgbWFpbiBwdXJwb3NlIGZvciB0aGlzIG9iamVjdCBpcyB0byBmaXggdGhlIHNob3J0IGNvbWluZyBvZiBkcmFnIGV2ZW50IGRhdGFUcmFuc2ZlciBvYmplY3QuXHJcbiAqIEl0IGFjY2VwdHMgb25seSBTdHJpbmcgdmFsdWVzLiBIb3dldmVyLCBpZiB0aGVyZSBpcyBhIG5lZWQgdG8gcGFzcyBhbiBvYmplY3QsIHRoaXMgc2luZ2xldG9uY2FuIFxyXG4gKiBjb21lIHRvIHRoZSByZXNlY3VlLiBcclxuICovXHJcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGFUcmFuc2ZlciB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgZGF0YTogYW55ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHNldERhdGEobmFtZSwgdmFsdWUpe1xyXG4gICAgICAgIHRoaXMuZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGEobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbbmFtZV07XHJcbiAgICB9XHJcbiAgICAgICAgICAgIFxyXG59IiwiaW1wb3J0IHtcclxuICAgIERpcmVjdGl2ZSxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBIb3N0TGlzdGVuZXIsXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGF0YVRyYW5zZmVyIH0gZnJvbSAnLi9kYXRhdHJhbnNmZXInO1xyXG5pbXBvcnQgeyBEcm9wRXZlbnQgfSBmcm9tICcuL2RyYWctZHJvcC5pbnRlcmZhY2VzJztcclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2Ryb3BFbmFibGVkXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIERyb3BEaXJlY3RpdmUge1xyXG4gICAgXHJcbiAgICBASW5wdXQoJ21lZGl1bScpXHJcbiAgICBtZWRpdW06IGFueTtcclxuICAgICAgICBcclxuICAgIEBJbnB1dCgpXHJcbiAgICBkcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgICAgICAgXHJcbiAgICBASW5wdXQoXCJkcm9wRW5hYmxlZFwiKVxyXG4gICAgZHJvcEVuYWJsZWQgPSAoZXZlbnQ6IERyb3BFdmVudCkgPT4gdHJ1ZTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uRHJhZ0VudGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyYWdMZWF2ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25Ecm9wOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyYWdPdmVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGRhdGFUcmFuc2ZlcjogRGF0YVRyYW5zZmVyLFxyXG4gICAgICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWZcclxuICAgICkge31cclxuICAgIFxyXG5cdHByaXZhdGUgY3JlYXRlRHJvcEV2ZW50KGV2ZW50KTogRHJvcEV2ZW50IHtcclxuXHRcdHJldHVybiB7XHJcbiAgICAgICAgICAgIHNvdXJjZTogdGhpcy5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInNvdXJjZVwiKSxcclxuICAgICAgICAgICAgZGVzdGluYXRpb246IHtcclxuICAgICAgICAgICAgICAgIG1lZGl1bTogdGhpcy5tZWRpdW0sXHJcbiAgICAgICAgICAgICAgICBub2RlOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WVxyXG4gICAgICAgICAgICB9XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcclxuICAgIGRyb3AoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGRyb3BFdmVudCA9IHRoaXMuY3JlYXRlRHJvcEV2ZW50KGV2ZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLW92ZXJcIik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRyb3BFbmFibGVkKGRyb3BFdmVudCkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRyb3AuZW1pdChkcm9wRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ2VudGVyJywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnRW50ZXIoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGRyb3BFdmVudCA9IHRoaXMuY3JlYXRlRHJvcEV2ZW50KGV2ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZHJvcEVuYWJsZWQoZHJvcEV2ZW50KSkge1xyXG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IHRoaXMuZHJvcEVmZmVjdDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHJhZy1vdmVyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZ0VudGVyLmVtaXQoZHJvcEV2ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctb3ZlclwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFsnJGV2ZW50J10pIFxyXG4gICAgZHJhZ0xlYXZlKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZy1vdmVyXCIpO1xyXG4gICAgICAgIHRoaXMub25EcmFnTGVhdmUuZW1pdChldmVudCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnT3ZlcihldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGRyb3BFdmVudCA9IHRoaXMuY3JlYXRlRHJvcEV2ZW50KGV2ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZHJvcEVuYWJsZWQoZHJvcEV2ZW50KSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRyYWctb3ZlclwiKTtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWdPdmVyLmVtaXQoZHJvcEV2ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctb3ZlclwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1xyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEhvc3RMaXN0ZW5lcixcclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGFUcmFuc2ZlciB9IGZyb20gJy4vZGF0YXRyYW5zZmVyJztcclxuaW1wb3J0IHsgRHJhZ0V2ZW50IH0gZnJvbSAnLi9kcmFnLWRyb3AuaW50ZXJmYWNlcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2RyYWdFbmFibGVkXScsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ1tkcmFnZ2FibGVdJzogJ3RydWUnXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcmFnRGlyZWN0aXZlIHtcclxuICAgIFxyXG4gICAgQElucHV0KFwibWVkaXVtXCIpXHJcbiAgICBtZWRpdW06IGFueTtcclxuICAgIFxyXG4gICAgQElucHV0KFwiZHJhZ0VmZmVjdFwiKVxyXG4gICAgZHJhZ0VmZmVjdCA9IFwibW92ZVwiO1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJkcmFnRW5hYmxlZFwiKVxyXG4gICAgZHJhZ0VuYWJsZWQgPSAoZXZlbnQpID0+IHRydWU7XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uRHJhZ0VuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25EcmFnOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBoYW5kbGU6IGFueTtcclxuICAgICAgICBcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZGF0YVRyYW5zZmVyOiBEYXRhVHJhbnNmZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZlxyXG4gICAgKSB7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ3N0YXJ0JywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnU3RhcnQoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBkcmFnRXZlbnQ6IERyYWdFdmVudCA9IHtcclxuICAgICAgICAgICAgbWVkaXVtOiB0aGlzLm1lZGl1bSxcclxuICAgICAgICAgICAgbm9kZTogdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxyXG4gICAgICAgICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxyXG4gICAgICAgICAgICBvZmZzZXQ6IHtcclxuICAgICAgICAgICAgICAgIHg6IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQsIFxyXG4gICAgICAgICAgICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0VuYWJsZWQoZHJhZ0V2ZW50KSkge1xyXG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IHRoaXMuZHJhZ0VmZmVjdDtcclxuICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJtYWtlSXRUaWNrXCIsXCJ0cnVlXCIpOy8vIHRoaXMgaXMgbmVlZGVkIGp1c3QgdG8gbWFrZSBkcmFnL2Ryb3AgZXZlbnQgdHJpZ2dlci5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJzb3VyY2VcIiwgZHJhZ0V2ZW50KTtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWdTdGFydC5lbWl0KGRyYWdFdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcmFnJywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgZHJhZ0V2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwic291cmNlXCIpO1xyXG5cclxuICAgICAgICBkcmFnRXZlbnQuY2xpZW50WCA9IGV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgZHJhZ0V2ZW50LmNsaWVudFkgPSBldmVudC5jbGllbnRZO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmRyYWdFbmFibGVkKGRyYWdFdmVudCkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWcuZW1pdChkcmFnRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ2VuZCcsIFsnJGV2ZW50J10pIFxyXG4gICAgZHJhZ0VuZChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGRyYWdFdmVudDogRHJhZ0V2ZW50ID0gdGhpcy5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInNvdXJjZVwiKTsgICAgICAgIFxyXG4gICAgICAgIHRoaXMub25EcmFnRW5kLmVtaXQoZHJhZ0V2ZW50KTtcclxuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctb3ZlclwiKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBUaGlzIGRpcmVjdGl2ZSBpcyBiZXN0IHN1aXRlZCBmb3IgZHJhZ2dpbmcgYW4gZWxlbWVudCB3aXRoIGNvbmZpbmVtZW50IG9mIGRvY3VtZW50LiAgaXQgaXMgbm90IHJlY29tZW5kZWRcclxuICogdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGEgZHJvcCBvcGVyYXRpb24gaWYgYW4gZWxlbWVudCBpcyB0byBiZSBkcm9wcGVkIG9uIGFub3RoZXIgZWxlbWVudCB3aXRoaW4gXHJcbiAqIGEgaGVpcmFyY2h5IG9mIG5vZGVzLlxyXG4gKi9cclxuaW1wb3J0IHtcclxuICAgIERpcmVjdGl2ZSxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBIb3N0TGlzdGVuZXIsXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhVHJhbnNmZXIgfSBmcm9tICcuL2RhdGF0cmFuc2Zlcic7XHJcbmltcG9ydCB7IERyYWdFdmVudCB9IGZyb20gJy4vZHJhZy1kcm9wLmludGVyZmFjZXMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tkcmFnSW5Eb2N1bWVudF0nLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdbZHJhZ2dhYmxlXSc6ICd0cnVlJ1xyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhZ0luRG9jdW1lbnREaXJlY3RpdmUge1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJtZWRpdW1cIilcclxuICAgIG1lZGl1bTogYW55O1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJkcmFnRWZmZWN0XCIpXHJcbiAgICBkcmFnRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImRyYWdJbkRvY3VtZW50XCIpXHJcbiAgICBkcmFnSW5Eb2N1bWVudCA9IChldmVudCkgPT4gdHJ1ZTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyYWdTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyYWc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGhhbmRsZTogYW55O1xyXG4gICAgICAgIFxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhVHJhbnNmZXI6IERhdGFUcmFuc2ZlcixcclxuICAgICAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcmFnc3RhcnQnLCBbJyRldmVudCddKSBcclxuICAgIGRyYWdTdGFydChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IGRyYWdFdmVudDogRHJhZ0V2ZW50ID0ge1xyXG4gICAgICAgICAgICBtZWRpdW06IHRoaXMubWVkaXVtLFxyXG4gICAgICAgICAgICBub2RlOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXHJcbiAgICAgICAgICAgIG9mZnNldDoge1xyXG4gICAgICAgICAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCwgXHJcbiAgICAgICAgICAgICAgICB5OiBldmVudC5jbGllbnRZIC0gcmVjdC50b3BcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kcmFnSW5Eb2N1bWVudChkcmFnRXZlbnQpKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gdGhpcy5kcmFnRWZmZWN0O1xyXG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcIm1ha2VJdFRpY2tcIixcInRydWVcIik7Ly8gdGhpcyBpcyBuZWVkZWQganVzdCB0byBtYWtlIGRyYWcvZHJvcCBldmVudCB0cmlnZ2VyLlxyXG5cclxuICAgICAgICAgICAgdGhpcy5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInNvdXJjZVwiLCBkcmFnRXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZ1N0YXJ0LmVtaXQoZHJhZ0V2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmRyYWdvdmVyJywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgZHJhZ0V2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwic291cmNlXCIpO1xyXG5cclxuICAgICAgICBkcmFnRXZlbnQuY2xpZW50WCA9IGV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgZHJhZ0V2ZW50LmNsaWVudFkgPSBldmVudC5jbGllbnRZO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmRyYWdJbkRvY3VtZW50KGRyYWdFdmVudCkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWcuZW1pdChkcmFnRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6ZHJhZ2VuZCcsIFsnJGV2ZW50J10pIFxyXG4gICAgZHJhZ0VuZChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGRyYWdFdmVudDogRHJhZ0V2ZW50ID0gdGhpcy5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInNvdXJjZVwiKTsgICAgICAgIFxyXG4gICAgICAgIHRoaXMub25EcmFnRW5kLmVtaXQoZHJhZ0V2ZW50KTtcclxuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctb3ZlclwiKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgRGF0YVRyYW5zZmVyIH0gZnJvbSAnLi9kYXRhdHJhbnNmZXInO1xyXG5pbXBvcnQgeyBEcmFnRGlyZWN0aXZlIH0gZnJvbSAnLi9kcmFnLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IERyYWdJbkRvY3VtZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9kcmFnLW9ubHkuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRHJvcERpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcC5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcblx0Q29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuXHREcmFnRGlyZWN0aXZlLFxyXG4gICAgRHJhZ0luRG9jdW1lbnREaXJlY3RpdmUsXHJcblx0RHJvcERpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG5cdERyYWdEaXJlY3RpdmUsXHJcblx0RHJhZ0luRG9jdW1lbnREaXJlY3RpdmUsXHJcblx0RHJvcERpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIERhdGFUcmFuc2ZlclxyXG4gIF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTtJQU9JO29CQUZvQixFQUFFO0tBRU47Ozs7OztJQUVoQiw4QkFBTzs7Ozs7SUFBUCxVQUFRLElBQUksRUFBRSxLQUFLO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDM0I7Ozs7O0lBRUQsOEJBQU87Ozs7SUFBUCxVQUFRLElBQUk7UUFDUixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUI7O2dCQWJKLFVBQVU7Ozs7dUJBUFg7Ozs7Ozs7QUNBQTtJQXVDSSx1QkFDWSxjQUNBO1FBREEsaUJBQVksR0FBWixZQUFZO1FBQ1osT0FBRSxHQUFGLEVBQUU7MEJBbkJELE1BQU07MkJBR0wsVUFBQyxLQUFnQixJQUFLLE9BQUEsSUFBSSxHQUFBOzJCQUdQLElBQUksWUFBWSxFQUFFOzJCQUdsQixJQUFJLFlBQVksRUFBRTtzQkFHdkIsSUFBSSxZQUFZLEVBQUU7MEJBR2QsSUFBSSxZQUFZLEVBQUU7S0FLOUM7Ozs7O0lBRUMsdUNBQWU7Ozs7Y0FBQyxLQUFLO1FBQzVCLE9BQU87WUFDRyxN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