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
            drag: [{ type: core.HostListener, args: ['drag', ['$event'],] }],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VkZWgtZHJhZy1lbmFibGVkLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNlZGVoL2RyYWctZW5hYmxlZC9zcmMvYXBwL2RyYWctZW5hYmxlZC9kYXRhdHJhbnNmZXIudHMiLCJuZzovL0BzZWRlaC9kcmFnLWVuYWJsZWQvc3JjL2FwcC9kcmFnLWVuYWJsZWQvZHJvcC5kaXJlY3RpdmUudHMiLCJuZzovL0BzZWRlaC9kcmFnLWVuYWJsZWQvc3JjL2FwcC9kcmFnLWVuYWJsZWQvZHJhZy5kaXJlY3RpdmUudHMiLCJuZzovL0BzZWRlaC9kcmFnLWVuYWJsZWQvc3JjL2FwcC9kcmFnLWVuYWJsZWQvZHJhZy1vbmx5LmRpcmVjdGl2ZS50cyIsIm5nOi8vQHNlZGVoL2RyYWctZW5hYmxlZC9zcmMvYXBwL2RyYWctZW5hYmxlZC9kcmFnZHJvcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogVGhlIG1haW4gcHVycG9zZSBmb3IgdGhpcyBvYmplY3QgaXMgdG8gZml4IHRoZSBzaG9ydCBjb21pbmcgb2YgZHJhZyBldmVudCBkYXRhVHJhbnNmZXIgb2JqZWN0LlxyXG4gKiBJdCBhY2NlcHRzIG9ubHkgU3RyaW5nIHZhbHVlcy4gSG93ZXZlciwgaWYgdGhlcmUgaXMgYSBuZWVkIHRvIHBhc3MgYW4gb2JqZWN0LCB0aGlzIHNpbmdsZXRvbmNhbiBcclxuICogY29tZSB0byB0aGUgcmVzZWN1ZS4gXHJcbiAqL1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEYXRhVHJhbnNmZXIge1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGRhdGE6IGFueSA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICBzZXREYXRhKG5hbWUsIHZhbHVlKXtcclxuICAgICAgICB0aGlzLmRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW25hbWVdO1xyXG4gICAgfVxyXG4gICAgICAgICAgICBcclxufSIsImltcG9ydCB7XHJcbiAgICBEaXJlY3RpdmUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgSG9zdExpc3RlbmVyLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERhdGFUcmFuc2ZlciB9IGZyb20gJy4vZGF0YXRyYW5zZmVyJztcclxuaW1wb3J0IHsgRHJvcEV2ZW50IH0gZnJvbSAnLi9kcmFnLWRyb3AuaW50ZXJmYWNlcyc7XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tkcm9wRW5hYmxlZF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wRGlyZWN0aXZlIHtcclxuICAgIFxyXG4gICAgQElucHV0KCdtZWRpdW0nKVxyXG4gICAgbWVkaXVtOiBhbnk7XHJcbiAgICAgICAgXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xyXG4gICAgICAgIFxyXG4gICAgQElucHV0KFwiZHJvcEVuYWJsZWRcIilcclxuICAgIGRyb3BFbmFibGVkID0gKGV2ZW50OiBEcm9wRXZlbnQpID0+IHRydWU7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyYWdFbnRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25EcmFnTGVhdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uRHJvcDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25EcmFnT3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhVHJhbnNmZXI6IERhdGFUcmFuc2ZlcixcclxuICAgICAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXHJcbiAgICApIHt9XHJcbiAgICBcclxuXHRwcml2YXRlIGNyZWF0ZURyb3BFdmVudChldmVudCk6IERyb3BFdmVudCB7XHJcblx0XHRyZXR1cm4ge1xyXG4gICAgICAgICAgICBzb3VyY2U6IHRoaXMuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJzb3VyY2VcIiksXHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBtZWRpdW06IHRoaXMubWVkaXVtLFxyXG4gICAgICAgICAgICAgICAgbm9kZTogdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcclxuICAgICAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFlcclxuICAgICAgICAgICAgfVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXHJcbiAgICBkcm9wKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBkcm9wRXZlbnQgPSB0aGlzLmNyZWF0ZURyb3BFdmVudChldmVudCk7XHJcblxyXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZy1vdmVyXCIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kcm9wRW5hYmxlZChkcm9wRXZlbnQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Ecm9wLmVtaXQoZHJvcEV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWdlbnRlcicsIFsnJGV2ZW50J10pIFxyXG4gICAgZHJhZ0VudGVyKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBkcm9wRXZlbnQgPSB0aGlzLmNyZWF0ZURyb3BFdmVudChldmVudCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRyb3BFbmFibGVkKGRyb3BFdmVudCkpIHtcclxuICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSB0aGlzLmRyb3BFZmZlY3Q7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRyYWctb3ZlclwiKTtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWdFbnRlci5lbWl0KGRyb3BFdmVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLW92ZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbJyRldmVudCddKSBcclxuICAgIGRyYWdMZWF2ZShldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctb3ZlclwiKTtcclxuICAgICAgICB0aGlzLm9uRHJhZ0xlYXZlLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pIFxyXG4gICAgZHJhZ092ZXIoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBkcm9wRXZlbnQgPSB0aGlzLmNyZWF0ZURyb3BFdmVudChldmVudCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRyb3BFbmFibGVkKGRyb3BFdmVudCkpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkcmFnLW92ZXJcIik7XHJcbiAgICAgICAgICAgIHRoaXMub25EcmFnT3Zlci5lbWl0KGRyb3BFdmVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLW92ZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtcclxuICAgIERpcmVjdGl2ZSxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBIb3N0TGlzdGVuZXIsXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhVHJhbnNmZXIgfSBmcm9tICcuL2RhdGF0cmFuc2Zlcic7XHJcbmltcG9ydCB7IERyYWdFdmVudCB9IGZyb20gJy4vZHJhZy1kcm9wLmludGVyZmFjZXMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tkcmFnRW5hYmxlZF0nLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdbZHJhZ2dhYmxlXSc6ICd0cnVlJ1xyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhZ0RpcmVjdGl2ZSB7XHJcbiAgICBcclxuICAgIEBJbnB1dChcIm1lZGl1bVwiKVxyXG4gICAgbWVkaXVtOiBhbnk7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImRyYWdFZmZlY3RcIilcclxuICAgIGRyYWdFZmZlY3QgPSBcIm1vdmVcIjtcclxuICAgIFxyXG4gICAgQElucHV0KFwiZHJhZ0VuYWJsZWRcIilcclxuICAgIGRyYWdFbmFibGVkID0gKGV2ZW50KSA9PiB0cnVlO1xyXG4gICAgXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uRHJhZzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIHByaXZhdGUgaGFuZGxlOiBhbnk7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGRhdGFUcmFuc2ZlcjogRGF0YVRyYW5zZmVyLFxyXG4gICAgICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWZcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWdzdGFydCcsIFsnJGV2ZW50J10pIFxyXG4gICAgZHJhZ1N0YXJ0KGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgZHJhZ0V2ZW50OiBEcmFnRXZlbnQgPSB7XHJcbiAgICAgICAgICAgIG1lZGl1bTogdGhpcy5tZWRpdW0sXHJcbiAgICAgICAgICAgIG5vZGU6IHRoaXMuZWwubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcclxuICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcclxuICAgICAgICAgICAgb2Zmc2V0OiB7XHJcbiAgICAgICAgICAgICAgICB4OiBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0LCBcclxuICAgICAgICAgICAgICAgIHk6IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRyYWdFbmFibGVkKGRyYWdFdmVudCkpIHtcclxuICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSB0aGlzLmRyYWdFZmZlY3Q7XHJcbiAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwibWFrZUl0VGlja1wiLFwidHJ1ZVwiKTsvLyB0aGlzIGlzIG5lZWRlZCBqdXN0IHRvIG1ha2UgZHJhZy9kcm9wIGV2ZW50IHRyaWdnZXIuXHJcblxyXG4gICAgICAgICAgICB0aGlzLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwic291cmNlXCIsIGRyYWdFdmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMub25EcmFnU3RhcnQuZW1pdChkcmFnRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZycsIFsnJGV2ZW50J10pIFxyXG4gICAgZHJhZyhldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGRyYWdFdmVudDogRHJhZ0V2ZW50ID0gdGhpcy5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInNvdXJjZVwiKTtcclxuXHJcbiAgICAgICAgZHJhZ0V2ZW50LmNsaWVudFggPSBldmVudC5jbGllbnRYO1xyXG4gICAgICAgIGRyYWdFdmVudC5jbGllbnRZID0gZXZlbnQuY2xpZW50WTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5kcmFnRW5hYmxlZChkcmFnRXZlbnQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25EcmFnLmVtaXQoZHJhZ0V2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWdlbmQnLCBbJyRldmVudCddKSBcclxuICAgIGRyYWdFbmQoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBjb25zdCBkcmFnRXZlbnQ6IERyYWdFdmVudCA9IHRoaXMuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJzb3VyY2VcIik7ICAgICAgICBcclxuICAgICAgICB0aGlzLm9uRHJhZ0VuZC5lbWl0KGRyYWdFdmVudCk7XHJcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLW92ZXJcIik7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogVGhpcyBkaXJlY3RpdmUgaXMgYmVzdCBzdWl0ZWQgZm9yIGRyYWdnaW5nIGFuIGVsZW1lbnQgd2l0aCBjb25maW5lbWVudCBvZiBkb2N1bWVudC4gIGl0IGlzIG5vdCByZWNvbWVuZGVkXHJcbiAqIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBhIGRyb3Agb3BlcmF0aW9uIGlmIGFuIGVsZW1lbnQgaXMgdG8gYmUgZHJvcHBlZCBvbiBhbm90aGVyIGVsZW1lbnQgd2l0aGluIFxyXG4gKiBhIGhlaXJhcmNoeSBvZiBub2Rlcy5cclxuICovXHJcbmltcG9ydCB7XHJcbiAgICBEaXJlY3RpdmUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgSG9zdExpc3RlbmVyLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YVRyYW5zZmVyIH0gZnJvbSAnLi9kYXRhdHJhbnNmZXInO1xyXG5pbXBvcnQgeyBEcmFnRXZlbnQgfSBmcm9tICcuL2RyYWctZHJvcC5pbnRlcmZhY2VzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbZHJhZ0luRG9jdW1lbnRdJyxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnW2RyYWdnYWJsZV0nOiAndHJ1ZSdcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIERyYWdJbkRvY3VtZW50RGlyZWN0aXZlIHtcclxuICAgIFxyXG4gICAgQElucHV0KFwibWVkaXVtXCIpXHJcbiAgICBtZWRpdW06IGFueTtcclxuICAgIFxyXG4gICAgQElucHV0KFwiZHJhZ0VmZmVjdFwiKVxyXG4gICAgZHJhZ0VmZmVjdCA9IFwibW92ZVwiO1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJkcmFnSW5Eb2N1bWVudFwiKVxyXG4gICAgZHJhZ0luRG9jdW1lbnQgPSAoZXZlbnQpID0+IHRydWU7XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uRHJhZ0VuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25EcmFnOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBoYW5kbGU6IGFueTtcclxuICAgICAgICBcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZGF0YVRyYW5zZmVyOiBEYXRhVHJhbnNmZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZlxyXG4gICAgKSB7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ3N0YXJ0JywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnU3RhcnQoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBkcmFnRXZlbnQ6IERyYWdFdmVudCA9IHtcclxuICAgICAgICAgICAgbWVkaXVtOiB0aGlzLm1lZGl1bSxcclxuICAgICAgICAgICAgbm9kZTogdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxyXG4gICAgICAgICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxyXG4gICAgICAgICAgICBvZmZzZXQ6IHtcclxuICAgICAgICAgICAgICAgIHg6IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQsIFxyXG4gICAgICAgICAgICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0luRG9jdW1lbnQoZHJhZ0V2ZW50KSkge1xyXG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IHRoaXMuZHJhZ0VmZmVjdDtcclxuICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJtYWtlSXRUaWNrXCIsXCJ0cnVlXCIpOy8vIHRoaXMgaXMgbmVlZGVkIGp1c3QgdG8gbWFrZSBkcmFnL2Ryb3AgZXZlbnQgdHJpZ2dlci5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJzb3VyY2VcIiwgZHJhZ0V2ZW50KTtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWdTdGFydC5lbWl0KGRyYWdFdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpkcmFnb3ZlcicsIFsnJGV2ZW50J10pIFxyXG4gICAgZHJhZyhldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGRyYWdFdmVudDogRHJhZ0V2ZW50ID0gdGhpcy5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInNvdXJjZVwiKTtcclxuXHJcbiAgICAgICAgZHJhZ0V2ZW50LmNsaWVudFggPSBldmVudC5jbGllbnRYO1xyXG4gICAgICAgIGRyYWdFdmVudC5jbGllbnRZID0gZXZlbnQuY2xpZW50WTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5kcmFnSW5Eb2N1bWVudChkcmFnRXZlbnQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25EcmFnLmVtaXQoZHJhZ0V2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmRyYWdlbmQnLCBbJyRldmVudCddKSBcclxuICAgIGRyYWdFbmQoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBjb25zdCBkcmFnRXZlbnQ6IERyYWdFdmVudCA9IHRoaXMuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJzb3VyY2VcIik7ICAgICAgICBcclxuICAgICAgICB0aGlzLm9uRHJhZ0VuZC5lbWl0KGRyYWdFdmVudCk7XHJcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLW92ZXJcIik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IERhdGFUcmFuc2ZlciB9IGZyb20gJy4vZGF0YXRyYW5zZmVyJztcclxuaW1wb3J0IHsgRHJhZ0RpcmVjdGl2ZSB9IGZyb20gJy4vZHJhZy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBEcmFnSW5Eb2N1bWVudERpcmVjdGl2ZSB9IGZyb20gJy4vZHJhZy1vbmx5LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IERyb3BEaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3AuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG5cdENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcblx0RHJhZ0RpcmVjdGl2ZSxcclxuICAgIERyYWdJbkRvY3VtZW50RGlyZWN0aXZlLFxyXG5cdERyb3BEaXJlY3RpdmVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuXHREcmFnRGlyZWN0aXZlLFxyXG5cdERyYWdJbkRvY3VtZW50RGlyZWN0aXZlLFxyXG5cdERyb3BEaXJlY3RpdmVcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBEYXRhVHJhbnNmZXJcclxuICBdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERyYWdEcm9wTW9kdWxlIHt9XHJcbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiRXZlbnRFbWl0dGVyIiwiRGlyZWN0aXZlIiwiRWxlbWVudFJlZiIsIklucHV0IiwiT3V0cHV0IiwiSG9zdExpc3RlbmVyIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJDVVNUT01fRUxFTUVOVFNfU0NIRU1BIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0E7UUFPSTt3QkFGb0IsRUFBRTtTQUVOOzs7Ozs7UUFFaEIsOEJBQU87Ozs7O1lBQVAsVUFBUSxJQUFJLEVBQUUsS0FBSztnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUMzQjs7Ozs7UUFFRCw4QkFBTzs7OztZQUFQLFVBQVEsSUFBSTtnQkFDUixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDMUI7O29CQWJKQSxlQUFVOzs7OzJCQVBYOzs7Ozs7O0FDQUE7UUF1Q0ksdUJBQ1ksY0FDQTtZQURBLGlCQUFZLEdBQVosWUFBWTtZQUNaLE9BQUUsR0FBRixFQUFFOzhCQW5CRCxNQUFNOytCQUdMLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLElB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