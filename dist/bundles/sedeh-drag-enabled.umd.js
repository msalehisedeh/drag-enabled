(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@sedeh/drag-enabled', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global.sedeh = global.sedeh || {}, global.sedeh['drag-enabled'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DataTransfer = (function () {
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DataTransfer.ctorParameters = function () { return []; };
        return DataTransfer;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DropDirective = (function () {
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
            { type: core.Directive, args: [{
                        selector: '[dropEnabled]'
                    },] }
        ];
        /** @nocollapse */
        DropDirective.ctorParameters = function () {
            return [
                { type: DataTransfer },
                { type: core.ElementRef }
            ];
        };
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
        return DropDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DragDirective = (function () {
        function DragDirective(dataTransfer, el) {
            this.dataTransfer = dataTransfer;
            this.el = el;
            this.dragEffect = "move";
            this.dragEnabled = function (event) { return true; };
            this.onDragStart = new core.EventEmitter();
            this.onDragEnd = new core.EventEmitter();
            this.onDrag = new core.EventEmitter();
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
                    if (!this.isIE()) {
                        event.dataTransfer.setData("makeItTick", "true"); // this is needed just to make drag/drop event trigger.
                    }
                    this.dataTransfer.setData("source", dragEvent);
                    this.onDragStart.emit(dragEvent);
                }
            };
        /**
         * @return {?}
         */
        DragDirective.prototype.isIE = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var match = navigator.userAgent.search(/(?:Edge|MSIE|Trident\/.*; rv:)/);
                /** @type {?} */
                var isIE = false;
                if (match !== -1) {
                    isIE = true;
                }
                return isIE;
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
            { type: core.Directive, args: [{
                        selector: '[dragEnabled]',
                        host: {
                            '[draggable]': 'true'
                        }
                    },] }
        ];
        /** @nocollapse */
        DragDirective.ctorParameters = function () {
            return [
                { type: DataTransfer },
                { type: core.ElementRef }
            ];
        };
        DragDirective.propDecorators = {
            medium: [{ type: core.Input, args: ["medium",] }],
            dragEffect: [{ type: core.Input, args: ["dragEffect",] }],
            dragEnabled: [{ type: core.Input, args: ["dragEnabled",] }],
            onDragStart: [{ type: core.Output }],
            onDragEnd: [{ type: core.Output }],
            onDrag: [{ type: core.Output }],
            dragStart: [{ type: core.HostListener, args: ['dragstart', ['$event'],] }],
            drag: [{ type: core.HostListener, args: ['dragover', ['$event'],] }],
            dragEnd: [{ type: core.HostListener, args: ['dragend', ['$event'],] }]
        };
        return DragDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DragInDocumentDirective = (function () {
        function DragInDocumentDirective(dataTransfer, el) {
            this.dataTransfer = dataTransfer;
            this.el = el;
            this.dragEffect = "move";
            this.dragInDocument = function (event) { return true; };
            this.onDragStart = new core.EventEmitter();
            this.onDragEnd = new core.EventEmitter();
            this.onDrag = new core.EventEmitter();
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
                    if (!this.isIE()) {
                        event.dataTransfer.setData("makeItTick", "true"); // this is needed just to make drag/drop event trigger.
                    }
                    this.dataTransfer.setData("source", dragEvent);
                    this.onDragStart.emit(dragEvent);
                }
            };
        /**
         * @return {?}
         */
        DragInDocumentDirective.prototype.isIE = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var match = navigator.userAgent.search(/(?:Edge|MSIE|Trident\/.*; rv:)/);
                /** @type {?} */
                var isIE = false;
                if (match !== -1) {
                    isIE = true;
                }
                return isIE;
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
            { type: core.Directive, args: [{
                        selector: '[dragInDocument]',
                        host: {
                            '[draggable]': 'true'
                        }
                    },] }
        ];
        /** @nocollapse */
        DragInDocumentDirective.ctorParameters = function () {
            return [
                { type: DataTransfer },
                { type: core.ElementRef }
            ];
        };
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
        return DragInDocumentDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DragDropModule = (function () {
        function DragDropModule() {
        }
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

    exports.DropDirective = DropDirective;
    exports.DragDirective = DragDirective;
    exports.DragInDocumentDirective = DragInDocumentDirective;
    exports.DragDropModule = DragDropModule;
    exports.ɵa = DataTransfer;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VkZWgtZHJhZy1lbmFibGVkLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNlZGVoL2RyYWctZW5hYmxlZC9zcmMvYXBwL2RyYWctZW5hYmxlZC9kYXRhdHJhbnNmZXIudHMiLCJuZzovL0BzZWRlaC9kcmFnLWVuYWJsZWQvc3JjL2FwcC9kcmFnLWVuYWJsZWQvZHJvcC5kaXJlY3RpdmUudHMiLCJuZzovL0BzZWRlaC9kcmFnLWVuYWJsZWQvc3JjL2FwcC9kcmFnLWVuYWJsZWQvZHJhZy5kaXJlY3RpdmUudHMiLCJuZzovL0BzZWRlaC9kcmFnLWVuYWJsZWQvc3JjL2FwcC9kcmFnLWVuYWJsZWQvZHJhZy1vbmx5LmRpcmVjdGl2ZS50cyIsIm5nOi8vQHNlZGVoL2RyYWctZW5hYmxlZC9zcmMvYXBwL2RyYWctZW5hYmxlZC9kcmFnZHJvcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogVGhlIG1haW4gcHVycG9zZSBmb3IgdGhpcyBvYmplY3QgaXMgdG8gZml4IHRoZSBzaG9ydCBjb21pbmcgb2YgZHJhZyBldmVudCBkYXRhVHJhbnNmZXIgb2JqZWN0LlxyXG4gKiBJdCBhY2NlcHRzIG9ubHkgU3RyaW5nIHZhbHVlcy4gSG93ZXZlciwgaWYgdGhlcmUgaXMgYSBuZWVkIHRvIHBhc3MgYW4gb2JqZWN0LCB0aGlzIHNpbmdsZXRvbmNhbiBcclxuICogY29tZSB0byB0aGUgcmVzZWN1ZS4gXHJcbiAqL1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEYXRhVHJhbnNmZXIge1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGRhdGE6IGFueSA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICBzZXREYXRhKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSl7XHJcbiAgICAgICAgdGhpcy5kYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0YShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW25hbWVdO1xyXG4gICAgfVxyXG4gICAgICAgICAgICBcclxufSIsImltcG9ydCB7XHJcbiAgICBEaXJlY3RpdmUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgSG9zdExpc3RlbmVyLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERhdGFUcmFuc2ZlciB9IGZyb20gJy4vZGF0YXRyYW5zZmVyJztcclxuaW1wb3J0IHsgRHJvcEV2ZW50IH0gZnJvbSAnLi9kcmFnLWRyb3AuaW50ZXJmYWNlcyc7XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tkcm9wRW5hYmxlZF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wRGlyZWN0aXZlIHtcclxuICAgIFxyXG4gICAgQElucHV0KCdtZWRpdW0nKVxyXG4gICAgbWVkaXVtOiBhbnk7XHJcbiAgICAgICAgXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xyXG4gICAgICAgIFxyXG4gICAgQElucHV0KFwiZHJvcEVuYWJsZWRcIilcclxuICAgIGRyb3BFbmFibGVkID0gKGV2ZW50OiBEcm9wRXZlbnQpID0+IHRydWU7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyYWdFbnRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25EcmFnTGVhdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uRHJvcDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25EcmFnT3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhVHJhbnNmZXI6IERhdGFUcmFuc2ZlcixcclxuICAgICAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXHJcbiAgICApIHt9XHJcbiAgICBcclxuXHRwcml2YXRlIGNyZWF0ZURyb3BFdmVudChldmVudDogYW55KTogRHJvcEV2ZW50IHtcclxuXHRcdHJldHVybiB7XHJcbiAgICAgICAgICAgIHNvdXJjZTogdGhpcy5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInNvdXJjZVwiKSxcclxuICAgICAgICAgICAgZGVzdGluYXRpb246IHtcclxuICAgICAgICAgICAgICAgIG1lZGl1bTogdGhpcy5tZWRpdW0sXHJcbiAgICAgICAgICAgICAgICBub2RlOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WVxyXG4gICAgICAgICAgICB9XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcclxuICAgIGRyb3AoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgZHJvcEV2ZW50ID0gdGhpcy5jcmVhdGVEcm9wRXZlbnQoZXZlbnQpO1xyXG5cclxuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctb3ZlclwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZHJvcEVuYWJsZWQoZHJvcEV2ZW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJvcC5lbWl0KGRyb3BFdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcmFnZW50ZXInLCBbJyRldmVudCddKSBcclxuICAgIGRyYWdFbnRlcihldmVudDogYW55KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBkcm9wRXZlbnQgPSB0aGlzLmNyZWF0ZURyb3BFdmVudChldmVudCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRyb3BFbmFibGVkKGRyb3BFdmVudCkpIHtcclxuICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSB0aGlzLmRyb3BFZmZlY3Q7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRyYWctb3ZlclwiKTtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWdFbnRlci5lbWl0KGRyb3BFdmVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLW92ZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbJyRldmVudCddKSBcclxuICAgIGRyYWdMZWF2ZShldmVudDogYW55KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZy1vdmVyXCIpO1xyXG4gICAgICAgIHRoaXMub25EcmFnTGVhdmUuZW1pdChldmVudCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnT3ZlcihldmVudDogYW55KSB7XHJcbiAgICAgICAgY29uc3QgZHJvcEV2ZW50ID0gdGhpcy5jcmVhdGVEcm9wRXZlbnQoZXZlbnQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kcm9wRW5hYmxlZChkcm9wRXZlbnQpKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHJhZy1vdmVyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZ092ZXIuZW1pdChkcm9wRXZlbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZy1vdmVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7XHJcbiAgICBEaXJlY3RpdmUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgSG9zdExpc3RlbmVyLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YVRyYW5zZmVyIH0gZnJvbSAnLi9kYXRhdHJhbnNmZXInO1xyXG5pbXBvcnQgeyBEcmFnRXZlbnQgfSBmcm9tICcuL2RyYWctZHJvcC5pbnRlcmZhY2VzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbZHJhZ0VuYWJsZWRdJyxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnW2RyYWdnYWJsZV0nOiAndHJ1ZSdcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIERyYWdEaXJlY3RpdmUge1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJtZWRpdW1cIilcclxuICAgIG1lZGl1bTogYW55O1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJkcmFnRWZmZWN0XCIpXHJcbiAgICBkcmFnRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImRyYWdFbmFibGVkXCIpXHJcbiAgICBkcmFnRW5hYmxlZCA9IChldmVudDogRHJhZ0V2ZW50KSA9PiB0cnVlO1xyXG4gICAgXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uRHJhZzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIHByaXZhdGUgaGFuZGxlOiBhbnk7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGRhdGFUcmFuc2ZlcjogRGF0YVRyYW5zZmVyLFxyXG4gICAgICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWZcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWdzdGFydCcsIFsnJGV2ZW50J10pIFxyXG4gICAgZHJhZ1N0YXJ0KGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBkcmFnRXZlbnQ6IERyYWdFdmVudCA9IHtcclxuICAgICAgICAgICAgbWVkaXVtOiB0aGlzLm1lZGl1bSxcclxuICAgICAgICAgICAgbm9kZTogdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxyXG4gICAgICAgICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxyXG4gICAgICAgICAgICBvZmZzZXQ6IHtcclxuICAgICAgICAgICAgICAgIHg6IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQsIFxyXG4gICAgICAgICAgICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0VuYWJsZWQoZHJhZ0V2ZW50KSkge1xyXG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IHRoaXMuZHJhZ0VmZmVjdDtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSUUoKSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJtYWtlSXRUaWNrXCIsXCJ0cnVlXCIpOy8vIHRoaXMgaXMgbmVlZGVkIGp1c3QgdG8gbWFrZSBkcmFnL2Ryb3AgZXZlbnQgdHJpZ2dlci5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwic291cmNlXCIsIGRyYWdFdmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMub25EcmFnU3RhcnQuZW1pdChkcmFnRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNJRSgpIHtcclxuICAgICAgICBjb25zdCBtYXRjaCA9IG5hdmlnYXRvci51c2VyQWdlbnQuc2VhcmNoKC8oPzpFZGdlfE1TSUV8VHJpZGVudFxcLy4qOyBydjopLyk7XHJcbiAgICAgICAgbGV0IGlzSUUgPSBmYWxzZTtcclxuICAgIFxyXG4gICAgICAgIGlmIChtYXRjaCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgaXNJRSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc0lFO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBkcmFnRXZlbnQ6IERyYWdFdmVudCA9IHRoaXMuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJzb3VyY2VcIik7XHJcblxyXG4gICAgICAgIGRyYWdFdmVudC5jbGllbnRYID0gZXZlbnQuY2xpZW50WDtcclxuICAgICAgICBkcmFnRXZlbnQuY2xpZW50WSA9IGV2ZW50LmNsaWVudFk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0VuYWJsZWQoZHJhZ0V2ZW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZy5lbWl0KGRyYWdFdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcmFnZW5kJywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnRW5kKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBjb25zdCBkcmFnRXZlbnQ6IERyYWdFdmVudCA9IHRoaXMuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJzb3VyY2VcIik7ICAgICAgICBcclxuICAgICAgICB0aGlzLm9uRHJhZ0VuZC5lbWl0KGRyYWdFdmVudCk7XHJcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLW92ZXJcIik7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogVGhpcyBkaXJlY3RpdmUgaXMgYmVzdCBzdWl0ZWQgZm9yIGRyYWdnaW5nIGFuIGVsZW1lbnQgd2l0aCBjb25maW5lbWVudCBvZiBkb2N1bWVudC4gIGl0IGlzIG5vdCByZWNvbWVuZGVkXHJcbiAqIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBhIGRyb3Agb3BlcmF0aW9uIGlmIGFuIGVsZW1lbnQgaXMgdG8gYmUgZHJvcHBlZCBvbiBhbm90aGVyIGVsZW1lbnQgd2l0aGluIFxyXG4gKiBhIGhlaXJhcmNoeSBvZiBub2Rlcy5cclxuICovXHJcbmltcG9ydCB7XHJcbiAgICBEaXJlY3RpdmUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgSG9zdExpc3RlbmVyLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YVRyYW5zZmVyIH0gZnJvbSAnLi9kYXRhdHJhbnNmZXInO1xyXG5pbXBvcnQgeyBEcmFnRXZlbnQgfSBmcm9tICcuL2RyYWctZHJvcC5pbnRlcmZhY2VzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbZHJhZ0luRG9jdW1lbnRdJyxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnW2RyYWdnYWJsZV0nOiAndHJ1ZSdcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIERyYWdJbkRvY3VtZW50RGlyZWN0aXZlIHtcclxuICAgIFxyXG4gICAgQElucHV0KFwibWVkaXVtXCIpXHJcbiAgICBtZWRpdW06IGFueTtcclxuICAgIFxyXG4gICAgQElucHV0KFwiZHJhZ0VmZmVjdFwiKVxyXG4gICAgZHJhZ0VmZmVjdCA9IFwibW92ZVwiO1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJkcmFnSW5Eb2N1bWVudFwiKVxyXG4gICAgZHJhZ0luRG9jdW1lbnQgPSAoZXZlbnQ6IERyYWdFdmVudCkgPT4gdHJ1ZTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyYWdTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyYWc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGhhbmRsZTogYW55O1xyXG4gICAgICAgIFxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhVHJhbnNmZXI6IERhdGFUcmFuc2ZlcixcclxuICAgICAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcmFnc3RhcnQnLCBbJyRldmVudCddKSBcclxuICAgIGRyYWdTdGFydChldmVudDogYW55KSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgZHJhZ0V2ZW50OiBEcmFnRXZlbnQgPSB7XHJcbiAgICAgICAgICAgIG1lZGl1bTogdGhpcy5tZWRpdW0sXHJcbiAgICAgICAgICAgIG5vZGU6IHRoaXMuZWwubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcclxuICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcclxuICAgICAgICAgICAgb2Zmc2V0OiB7XHJcbiAgICAgICAgICAgICAgICB4OiBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0LCBcclxuICAgICAgICAgICAgICAgIHk6IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRyYWdJbkRvY3VtZW50KGRyYWdFdmVudCkpIHtcclxuICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSB0aGlzLmRyYWdFZmZlY3Q7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0lFKCkpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwibWFrZUl0VGlja1wiLFwidHJ1ZVwiKTsvLyB0aGlzIGlzIG5lZWRlZCBqdXN0IHRvIG1ha2UgZHJhZy9kcm9wIGV2ZW50IHRyaWdnZXIuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInNvdXJjZVwiLCBkcmFnRXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZ1N0YXJ0LmVtaXQoZHJhZ0V2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzSUUoKSB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBuYXZpZ2F0b3IudXNlckFnZW50LnNlYXJjaCgvKD86RWRnZXxNU0lFfFRyaWRlbnRcXC8uKjsgcnY6KS8pO1xyXG4gICAgICAgIGxldCBpc0lFID0gZmFsc2U7XHJcbiAgICBcclxuICAgICAgICBpZiAobWF0Y2ggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGlzSUUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNJRTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6ZHJhZ292ZXInLCBbJyRldmVudCddKSBcclxuICAgIGRyYWcoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGRyYWdFdmVudDogRHJhZ0V2ZW50ID0gdGhpcy5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInNvdXJjZVwiKTtcclxuXHJcbiAgICAgICAgZHJhZ0V2ZW50LmNsaWVudFggPSBldmVudC5jbGllbnRYO1xyXG4gICAgICAgIGRyYWdFdmVudC5jbGllbnRZID0gZXZlbnQuY2xpZW50WTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5kcmFnSW5Eb2N1bWVudChkcmFnRXZlbnQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25EcmFnLmVtaXQoZHJhZ0V2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmRyYWdlbmQnLCBbJyRldmVudCddKSBcclxuICAgIGRyYWdFbmQoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGRyYWdFdmVudDogRHJhZ0V2ZW50ID0gdGhpcy5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInNvdXJjZVwiKTsgICAgICAgIFxyXG4gICAgICAgIHRoaXMub25EcmFnRW5kLmVtaXQoZHJhZ0V2ZW50KTtcclxuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctb3ZlclwiKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgRGF0YVRyYW5zZmVyIH0gZnJvbSAnLi9kYXRhdHJhbnNmZXInO1xyXG5pbXBvcnQgeyBEcmFnRGlyZWN0aXZlIH0gZnJvbSAnLi9kcmFnLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IERyYWdJbkRvY3VtZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9kcmFnLW9ubHkuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRHJvcERpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcC5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcblx0Q29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuXHREcmFnRGlyZWN0aXZlLFxyXG4gICAgRHJhZ0luRG9jdW1lbnREaXJlY3RpdmUsXHJcblx0RHJvcERpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG5cdERyYWdEaXJlY3RpdmUsXHJcblx0RHJhZ0luRG9jdW1lbnREaXJlY3RpdmUsXHJcblx0RHJvcERpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIERhdGFUcmFuc2ZlclxyXG4gIF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJFdmVudEVtaXR0ZXIiLCJEaXJlY3RpdmUiLCJFbGVtZW50UmVmIiwiSW5wdXQiLCJPdXRwdXQiLCJIb3N0TGlzdGVuZXIiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkNVU1RPTV9FTEVNRU5UU19TQ0hFTUEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQTtRQU9JO3dCQUZvQixFQUFFO1NBRU47Ozs7OztRQUVoQiw4QkFBTzs7Ozs7WUFBUCxVQUFRLElBQVksRUFBRSxLQUFVO2dCQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUMzQjs7Ozs7UUFFRCw4QkFBTzs7OztZQUFQLFVBQVEsSUFBWTtnQkFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFCOztvQkFiSkEsZUFBVTs7OzsyQkFQWDs7Ozs7OztBQ0FBO1FBdUNJLHVCQUNZLGNBQ0E7WUFEQSxpQkFBWSxHQUFaLFlBQVk7WUFDWixPQUFFLEdBQUYsRUFBRTs4QkFuQkQsTUFBTTsrQkFHTCxVQUFDLEtBQWdCLElBQUssT0FBQSxJQUFJLEdBQUE7K0JBR1AsSUFBSUMsaUJBQVksRUFBRTsrQkFHbEIsSUFBSUEsaUJBQVksRUFBRTswQkFHdkIsSUFBSUEsaUJBQVksRUFBRTs4QkFHZCxJQUFJQSxpQkFBWSxFQUFFO1NBSzlDOzs7OztRQUVDLHVDQUFlOzs7O3NCQUFDLEtBQVU7Z0JBQ2pDLE9BQU87b0JBQ0csTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FB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