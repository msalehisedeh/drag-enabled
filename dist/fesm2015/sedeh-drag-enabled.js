import { Injectable, Directive, ElementRef, HostListener, Input, Output, EventEmitter, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DataTransfer {
    constructor() {
        this.data = {};
    }
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    setData(name, value) {
        this.data[name] = value;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getData(name) {
        return this.data[name];
    }
}
DataTransfer.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DataTransfer.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DropDirective {
    /**
     * @param {?} dataTransfer
     * @param {?} el
     */
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
    /**
     * @param {?} event
     * @return {?}
     */
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
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        event.preventDefault();
        /** @type {?} */
        const dropEvent = this.createDropEvent(event);
        this.el.nativeElement.classList.remove("drag-over");
        if (this.dropEnabled(dropEvent)) {
            this.onDrop.emit(dropEvent);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragEnter(event) {
        event.preventDefault();
        /** @type {?} */
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
    /**
     * @param {?} event
     * @return {?}
     */
    dragLeave(event) {
        event.preventDefault();
        this.el.nativeElement.classList.remove("drag-over");
        this.onDragLeave.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragOver(event) {
        /** @type {?} */
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
}
DropDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dropEnabled]'
            },] }
];
/** @nocollapse */
DropDirective.ctorParameters = () => [
    { type: DataTransfer },
    { type: ElementRef }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DragDirective {
    /**
     * @param {?} dataTransfer
     * @param {?} el
     */
    constructor(dataTransfer, el) {
        this.dataTransfer = dataTransfer;
        this.el = el;
        this.dragEffect = "move";
        this.dragEnabled = (event) => true;
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onDrag = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragStart(event) {
        event.stopPropagation();
        /** @type {?} */
        const rect = this.el.nativeElement.getBoundingClientRect();
        /** @type {?} */
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
            event.dataTransfer.setData("makeItTick", "true"); // this is needed just to make drag/drop event trigger.
            this.dataTransfer.setData("source", dragEvent);
            this.onDragStart.emit(dragEvent);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drag(event) {
        /** @type {?} */
        const dragEvent = this.dataTransfer.getData("source");
        dragEvent.clientX = event.clientX;
        dragEvent.clientY = event.clientY;
        if (this.dragEnabled(dragEvent)) {
            this.onDrag.emit(dragEvent);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragEnd(event) {
        event.stopPropagation();
        /** @type {?} */
        const dragEvent = this.dataTransfer.getData("source");
        this.onDragEnd.emit(dragEvent);
        this.el.nativeElement.classList.remove("drag-over");
    }
}
DragDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dragEnabled]',
                host: {
                    '[draggable]': 'true'
                }
            },] }
];
/** @nocollapse */
DragDirective.ctorParameters = () => [
    { type: DataTransfer },
    { type: ElementRef }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DragInDocumentDirective {
    /**
     * @param {?} dataTransfer
     * @param {?} el
     */
    constructor(dataTransfer, el) {
        this.dataTransfer = dataTransfer;
        this.el = el;
        this.dragEffect = "move";
        this.dragInDocument = (event) => true;
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onDrag = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragStart(event) {
        event.stopPropagation();
        /** @type {?} */
        const rect = this.el.nativeElement.getBoundingClientRect();
        /** @type {?} */
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
            event.dataTransfer.setData("makeItTick", "true"); // this is needed just to make drag/drop event trigger.
            this.dataTransfer.setData("source", dragEvent);
            this.onDragStart.emit(dragEvent);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drag(event) {
        /** @type {?} */
        const dragEvent = this.dataTransfer.getData("source");
        dragEvent.clientX = event.clientX;
        dragEvent.clientY = event.clientY;
        if (this.dragInDocument(dragEvent)) {
            this.onDrag.emit(dragEvent);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragEnd(event) {
        event.stopPropagation();
        /** @type {?} */
        const dragEvent = this.dataTransfer.getData("source");
        this.onDragEnd.emit(dragEvent);
        this.el.nativeElement.classList.remove("drag-over");
    }
}
DragInDocumentDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dragInDocument]',
                host: {
                    '[draggable]': 'true'
                }
            },] }
];
/** @nocollapse */
DragInDocumentDirective.ctorParameters = () => [
    { type: DataTransfer },
    { type: ElementRef }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DragDropModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { DropDirective, DragDirective, DragInDocumentDirective, DragDropModule, DataTransfer as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VkZWgtZHJhZy1lbmFibGVkLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac2VkZWgvZHJhZy1lbmFibGVkL3NyYy9hcHAvZHJhZy1lbmFibGVkL2RhdGF0cmFuc2Zlci50cyIsIm5nOi8vQHNlZGVoL2RyYWctZW5hYmxlZC9zcmMvYXBwL2RyYWctZW5hYmxlZC9kcm9wLmRpcmVjdGl2ZS50cyIsIm5nOi8vQHNlZGVoL2RyYWctZW5hYmxlZC9zcmMvYXBwL2RyYWctZW5hYmxlZC9kcmFnLmRpcmVjdGl2ZS50cyIsIm5nOi8vQHNlZGVoL2RyYWctZW5hYmxlZC9zcmMvYXBwL2RyYWctZW5hYmxlZC9kcmFnLW9ubHkuZGlyZWN0aXZlLnRzIiwibmc6Ly9Ac2VkZWgvZHJhZy1lbmFibGVkL3NyYy9hcHAvZHJhZy1lbmFibGVkL2RyYWdkcm9wLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBUaGUgbWFpbiBwdXJwb3NlIGZvciB0aGlzIG9iamVjdCBpcyB0byBmaXggdGhlIHNob3J0IGNvbWluZyBvZiBkcmFnIGV2ZW50IGRhdGFUcmFuc2ZlciBvYmplY3QuXHJcbiAqIEl0IGFjY2VwdHMgb25seSBTdHJpbmcgdmFsdWVzLiBIb3dldmVyLCBpZiB0aGVyZSBpcyBhIG5lZWQgdG8gcGFzcyBhbiBvYmplY3QsIHRoaXMgc2luZ2xldG9uY2FuIFxyXG4gKiBjb21lIHRvIHRoZSByZXNlY3VlLiBcclxuICovXHJcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGFUcmFuc2ZlciB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgZGF0YTogYW55ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHNldERhdGEobmFtZSwgdmFsdWUpe1xyXG4gICAgICAgIHRoaXMuZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGEobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbbmFtZV07XHJcbiAgICB9XHJcbiAgICAgICAgICAgIFxyXG59IiwiaW1wb3J0IHtcclxuICAgIERpcmVjdGl2ZSxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBIb3N0TGlzdGVuZXIsXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGF0YVRyYW5zZmVyIH0gZnJvbSAnLi9kYXRhdHJhbnNmZXInO1xyXG5pbXBvcnQgeyBEcm9wRXZlbnQgfSBmcm9tICcuL2RyYWctZHJvcC5pbnRlcmZhY2VzJztcclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2Ryb3BFbmFibGVkXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIERyb3BEaXJlY3RpdmUge1xyXG4gICAgXHJcbiAgICBASW5wdXQoJ21lZGl1bScpXHJcbiAgICBtZWRpdW06IGFueTtcclxuICAgICAgICBcclxuICAgIEBJbnB1dCgpXHJcbiAgICBkcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgICAgICAgXHJcbiAgICBASW5wdXQoXCJkcm9wRW5hYmxlZFwiKVxyXG4gICAgZHJvcEVuYWJsZWQgPSAoZXZlbnQ6IERyb3BFdmVudCkgPT4gdHJ1ZTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uRHJhZ0VudGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyYWdMZWF2ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25Ecm9wOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyYWdPdmVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGRhdGFUcmFuc2ZlcjogRGF0YVRyYW5zZmVyLFxyXG4gICAgICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWZcclxuICAgICkge31cclxuICAgIFxyXG5cdHByaXZhdGUgY3JlYXRlRHJvcEV2ZW50KGV2ZW50KTogRHJvcEV2ZW50IHtcclxuXHRcdHJldHVybiB7XHJcbiAgICAgICAgICAgIHNvdXJjZTogdGhpcy5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInNvdXJjZVwiKSxcclxuICAgICAgICAgICAgZGVzdGluYXRpb246IHtcclxuICAgICAgICAgICAgICAgIG1lZGl1bTogdGhpcy5tZWRpdW0sXHJcbiAgICAgICAgICAgICAgICBub2RlOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WVxyXG4gICAgICAgICAgICB9XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcclxuICAgIGRyb3AoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGRyb3BFdmVudCA9IHRoaXMuY3JlYXRlRHJvcEV2ZW50KGV2ZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLW92ZXJcIik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRyb3BFbmFibGVkKGRyb3BFdmVudCkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRyb3AuZW1pdChkcm9wRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ2VudGVyJywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnRW50ZXIoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGRyb3BFdmVudCA9IHRoaXMuY3JlYXRlRHJvcEV2ZW50KGV2ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZHJvcEVuYWJsZWQoZHJvcEV2ZW50KSkge1xyXG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IHRoaXMuZHJvcEVmZmVjdDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHJhZy1vdmVyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZ0VudGVyLmVtaXQoZHJvcEV2ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctb3ZlclwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFsnJGV2ZW50J10pIFxyXG4gICAgZHJhZ0xlYXZlKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZy1vdmVyXCIpO1xyXG4gICAgICAgIHRoaXMub25EcmFnTGVhdmUuZW1pdChldmVudCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnT3ZlcihldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGRyb3BFdmVudCA9IHRoaXMuY3JlYXRlRHJvcEV2ZW50KGV2ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZHJvcEVuYWJsZWQoZHJvcEV2ZW50KSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRyYWctb3ZlclwiKTtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWdPdmVyLmVtaXQoZHJvcEV2ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctb3ZlclwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1xyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEhvc3RMaXN0ZW5lcixcclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGFUcmFuc2ZlciB9IGZyb20gJy4vZGF0YXRyYW5zZmVyJztcclxuaW1wb3J0IHsgRHJhZ0V2ZW50IH0gZnJvbSAnLi9kcmFnLWRyb3AuaW50ZXJmYWNlcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2RyYWdFbmFibGVkXScsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ1tkcmFnZ2FibGVdJzogJ3RydWUnXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcmFnRGlyZWN0aXZlIHtcclxuICAgIFxyXG4gICAgQElucHV0KFwibWVkaXVtXCIpXHJcbiAgICBtZWRpdW06IGFueTtcclxuICAgIFxyXG4gICAgQElucHV0KFwiZHJhZ0VmZmVjdFwiKVxyXG4gICAgZHJhZ0VmZmVjdCA9IFwibW92ZVwiO1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJkcmFnRW5hYmxlZFwiKVxyXG4gICAgZHJhZ0VuYWJsZWQgPSAoZXZlbnQpID0+IHRydWU7XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uRHJhZ0VuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25EcmFnOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBoYW5kbGU6IGFueTtcclxuICAgICAgICBcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZGF0YVRyYW5zZmVyOiBEYXRhVHJhbnNmZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZlxyXG4gICAgKSB7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ3N0YXJ0JywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnU3RhcnQoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBkcmFnRXZlbnQ6IERyYWdFdmVudCA9IHtcclxuICAgICAgICAgICAgbWVkaXVtOiB0aGlzLm1lZGl1bSxcclxuICAgICAgICAgICAgbm9kZTogdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxyXG4gICAgICAgICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxyXG4gICAgICAgICAgICBvZmZzZXQ6IHtcclxuICAgICAgICAgICAgICAgIHg6IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQsIFxyXG4gICAgICAgICAgICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0VuYWJsZWQoZHJhZ0V2ZW50KSkge1xyXG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IHRoaXMuZHJhZ0VmZmVjdDtcclxuICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJtYWtlSXRUaWNrXCIsXCJ0cnVlXCIpOy8vIHRoaXMgaXMgbmVlZGVkIGp1c3QgdG8gbWFrZSBkcmFnL2Ryb3AgZXZlbnQgdHJpZ2dlci5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJzb3VyY2VcIiwgZHJhZ0V2ZW50KTtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWdTdGFydC5lbWl0KGRyYWdFdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcmFnJywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgZHJhZ0V2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwic291cmNlXCIpO1xyXG5cclxuICAgICAgICBkcmFnRXZlbnQuY2xpZW50WCA9IGV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgZHJhZ0V2ZW50LmNsaWVudFkgPSBldmVudC5jbGllbnRZO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmRyYWdFbmFibGVkKGRyYWdFdmVudCkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWcuZW1pdChkcmFnRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ2VuZCcsIFsnJGV2ZW50J10pIFxyXG4gICAgZHJhZ0VuZChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGRyYWdFdmVudDogRHJhZ0V2ZW50ID0gdGhpcy5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInNvdXJjZVwiKTsgICAgICAgIFxyXG4gICAgICAgIHRoaXMub25EcmFnRW5kLmVtaXQoZHJhZ0V2ZW50KTtcclxuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctb3ZlclwiKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBUaGlzIGRpcmVjdGl2ZSBpcyBiZXN0IHN1aXRlZCBmb3IgZHJhZ2dpbmcgYW4gZWxlbWVudCB3aXRoIGNvbmZpbmVtZW50IG9mIGRvY3VtZW50LiAgaXQgaXMgbm90IHJlY29tZW5kZWRcclxuICogdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGEgZHJvcCBvcGVyYXRpb24gaWYgYW4gZWxlbWVudCBpcyB0byBiZSBkcm9wcGVkIG9uIGFub3RoZXIgZWxlbWVudCB3aXRoaW4gXHJcbiAqIGEgaGVpcmFyY2h5IG9mIG5vZGVzLlxyXG4gKi9cclxuaW1wb3J0IHtcclxuICAgIERpcmVjdGl2ZSxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBIb3N0TGlzdGVuZXIsXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhVHJhbnNmZXIgfSBmcm9tICcuL2RhdGF0cmFuc2Zlcic7XHJcbmltcG9ydCB7IERyYWdFdmVudCB9IGZyb20gJy4vZHJhZy1kcm9wLmludGVyZmFjZXMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tkcmFnSW5Eb2N1bWVudF0nLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdbZHJhZ2dhYmxlXSc6ICd0cnVlJ1xyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhZ0luRG9jdW1lbnREaXJlY3RpdmUge1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJtZWRpdW1cIilcclxuICAgIG1lZGl1bTogYW55O1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJkcmFnRWZmZWN0XCIpXHJcbiAgICBkcmFnRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImRyYWdJbkRvY3VtZW50XCIpXHJcbiAgICBkcmFnSW5Eb2N1bWVudCA9IChldmVudCkgPT4gdHJ1ZTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyYWdTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyYWc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGhhbmRsZTogYW55O1xyXG4gICAgICAgIFxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhVHJhbnNmZXI6IERhdGFUcmFuc2ZlcixcclxuICAgICAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcmFnc3RhcnQnLCBbJyRldmVudCddKSBcclxuICAgIGRyYWdTdGFydChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IGRyYWdFdmVudDogRHJhZ0V2ZW50ID0ge1xyXG4gICAgICAgICAgICBtZWRpdW06IHRoaXMubWVkaXVtLFxyXG4gICAgICAgICAgICBub2RlOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXHJcbiAgICAgICAgICAgIG9mZnNldDoge1xyXG4gICAgICAgICAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCwgXHJcbiAgICAgICAgICAgICAgICB5OiBldmVudC5jbGllbnRZIC0gcmVjdC50b3BcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kcmFnSW5Eb2N1bWVudChkcmFnRXZlbnQpKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gdGhpcy5kcmFnRWZmZWN0O1xyXG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcIm1ha2VJdFRpY2tcIixcInRydWVcIik7Ly8gdGhpcyBpcyBuZWVkZWQganVzdCB0byBtYWtlIGRyYWcvZHJvcCBldmVudCB0cmlnZ2VyLlxyXG5cclxuICAgICAgICAgICAgdGhpcy5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInNvdXJjZVwiLCBkcmFnRXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZ1N0YXJ0LmVtaXQoZHJhZ0V2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmRyYWdvdmVyJywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgZHJhZ0V2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwic291cmNlXCIpO1xyXG5cclxuICAgICAgICBkcmFnRXZlbnQuY2xpZW50WCA9IGV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgZHJhZ0V2ZW50LmNsaWVudFkgPSBldmVudC5jbGllbnRZO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmRyYWdJbkRvY3VtZW50KGRyYWdFdmVudCkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWcuZW1pdChkcmFnRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6ZHJhZ2VuZCcsIFsnJGV2ZW50J10pIFxyXG4gICAgZHJhZ0VuZChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGRyYWdFdmVudDogRHJhZ0V2ZW50ID0gdGhpcy5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInNvdXJjZVwiKTsgICAgICAgIFxyXG4gICAgICAgIHRoaXMub25EcmFnRW5kLmVtaXQoZHJhZ0V2ZW50KTtcclxuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctb3ZlclwiKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgRGF0YVRyYW5zZmVyIH0gZnJvbSAnLi9kYXRhdHJhbnNmZXInO1xyXG5pbXBvcnQgeyBEcmFnRGlyZWN0aXZlIH0gZnJvbSAnLi9kcmFnLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IERyYWdJbkRvY3VtZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9kcmFnLW9ubHkuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRHJvcERpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcC5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcblx0Q29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuXHREcmFnRGlyZWN0aXZlLFxyXG4gICAgRHJhZ0luRG9jdW1lbnREaXJlY3RpdmUsXHJcblx0RHJvcERpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG5cdERyYWdEaXJlY3RpdmUsXHJcblx0RHJhZ0luRG9jdW1lbnREaXJlY3RpdmUsXHJcblx0RHJvcERpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIERhdGFUcmFuc2ZlclxyXG4gIF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTtJQU9JO29CQUZvQixFQUFFO0tBRU47Ozs7OztJQUVoQixPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUs7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztLQUMzQjs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBSTtRQUNSLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMxQjs7O1lBYkosVUFBVTs7Ozs7Ozs7O0FDUFg7Ozs7O0lBdUNJLFlBQ1ksY0FDQTtRQURBLGlCQUFZLEdBQVosWUFBWTtRQUNaLE9BQUUsR0FBRixFQUFFOzBCQW5CRCxNQUFNOzJCQUdMLENBQUMsS0FBZ0IsS0FBSyxJQUFJOzJCQUdQLElBQUksWUFBWSxFQUFFOzJCQUdsQixJQUFJLFlBQVksRUFBRTtzQkFHdkIsSUFBSSxZQUFZLEVBQUU7MEJBR2QsSUFBSSxZQUFZLEVBQUU7S0FLOUM7Ozs7O0lBRUMsZUFBZSxDQUFDLEtBQUs7UUFDNUIsT0FBTztZQUNHLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FB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