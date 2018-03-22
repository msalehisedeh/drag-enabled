import { Injectable, Directive, ElementRef, HostListener, Input, Output, Renderer, EventEmitter, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
    { type: Injectable },
];
/** @nocollapse */
DataTransfer.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DropDirective {
    /**
     * @param {?} dataTransfer
     * @param {?} renderer
     * @param {?} el
     */
    constructor(dataTransfer, renderer, el) {
        this.dataTransfer = dataTransfer;
        this.renderer = renderer;
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
        const /** @type {?} */ dropEvent = this.createDropEvent(event);
        this.renderer.setElementClass(this.el.nativeElement, "drag-over", false);
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
        const /** @type {?} */ dropEvent = this.createDropEvent(event);
        if (this.dropEnabled(dropEvent)) {
            event.dataTransfer.dropEffect = this.dropEffect;
            this.renderer.setElementClass(this.el.nativeElement, "drag-over", true);
            this.onDragEnter.emit(dropEvent);
        }
        else {
            this.renderer.setElementClass(this.el.nativeElement, "drag-over", false);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragLeave(event) {
        event.preventDefault();
        this.renderer.setElementClass(this.el.nativeElement, "drag-over", false);
        this.onDragLeave.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragOver(event) {
        const /** @type {?} */ dropEvent = this.createDropEvent(event);
        if (this.dropEnabled(dropEvent)) {
            event.preventDefault();
            this.renderer.setElementClass(this.el.nativeElement, "drag-over", true);
            this.onDragOver.emit(dropEvent);
        }
        else {
            this.renderer.setElementClass(this.el.nativeElement, "drag-over", false);
        }
    }
}
DropDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dropEnabled]'
            },] },
];
/** @nocollapse */
DropDirective.ctorParameters = () => [
    { type: DataTransfer, },
    { type: Renderer, },
    { type: ElementRef, },
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DragDirective {
    /**
     * @param {?} dataTransfer
     * @param {?} renderer
     * @param {?} el
     */
    constructor(dataTransfer, renderer, el) {
        this.dataTransfer = dataTransfer;
        this.renderer = renderer;
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
        const /** @type {?} */ rect = this.el.nativeElement.getBoundingClientRect();
        const /** @type {?} */ dragEvent = {
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
        const /** @type {?} */ dragEvent = this.dataTransfer.getData("source");
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
        const /** @type {?} */ dragEvent = this.dataTransfer.getData("source");
        this.onDragEnd.emit(dragEvent);
        this.renderer.setElementClass(this.el.nativeElement, "drag-over", false);
    }
}
DragDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dragEnabled]',
                host: {
                    '[draggable]': 'true'
                }
            },] },
];
/** @nocollapse */
DragDirective.ctorParameters = () => [
    { type: DataTransfer, },
    { type: Renderer, },
    { type: ElementRef, },
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DragInDocumentDirective {
    /**
     * @param {?} dataTransfer
     * @param {?} renderer
     * @param {?} el
     */
    constructor(dataTransfer, renderer, el) {
        this.dataTransfer = dataTransfer;
        this.renderer = renderer;
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
        const /** @type {?} */ rect = this.el.nativeElement.getBoundingClientRect();
        const /** @type {?} */ dragEvent = {
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
        const /** @type {?} */ dragEvent = this.dataTransfer.getData("source");
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
        const /** @type {?} */ dragEvent = this.dataTransfer.getData("source");
        this.onDragEnd.emit(dragEvent);
        this.renderer.setElementClass(this.el.nativeElement, "drag-over", false);
    }
}
DragInDocumentDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dragInDocument]',
                host: {
                    '[draggable]': 'true'
                }
            },] },
];
/** @nocollapse */
DragInDocumentDirective.ctorParameters = () => [
    { type: DataTransfer, },
    { type: Renderer, },
    { type: ElementRef, },
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                    DragDirective,
                    DragInDocumentDirective,
                    DropDirective,
                    DataTransfer
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] },
];
/** @nocollapse */
DragDropModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { DropDirective, DragDirective, DragInDocumentDirective, DragDropModule, DataTransfer as ɵa };
//# sourceMappingURL=drag-enabled.js.map
