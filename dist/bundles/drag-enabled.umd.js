(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('drag-enabled', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['drag-enabled'] = {}),global.ng.core,global.ng.common));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1lbmFibGVkLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZHJhZy1lbmFibGVkL3NyYy9hcHAvZHJhZy1lbmFibGVkL2RhdGF0cmFuc2Zlci50cyIsIm5nOi8vZHJhZy1lbmFibGVkL3NyYy9hcHAvZHJhZy1lbmFibGVkL2Ryb3AuZGlyZWN0aXZlLnRzIiwibmc6Ly9kcmFnLWVuYWJsZWQvc3JjL2FwcC9kcmFnLWVuYWJsZWQvZHJhZy5kaXJlY3RpdmUudHMiLCJuZzovL2RyYWctZW5hYmxlZC9zcmMvYXBwL2RyYWctZW5hYmxlZC9kcmFnLW9ubHkuZGlyZWN0aXZlLnRzIiwibmc6Ly9kcmFnLWVuYWJsZWQvc3JjL2FwcC9kcmFnLWVuYWJsZWQvZHJhZ2Ryb3AubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFRoZSBtYWluIHB1cnBvc2UgZm9yIHRoaXMgb2JqZWN0IGlzIHRvIGZpeCB0aGUgc2hvcnQgY29taW5nIG9mIGRyYWcgZXZlbnQgZGF0YVRyYW5zZmVyIG9iamVjdC5cclxuICogSXQgYWNjZXB0cyBvbmx5IFN0cmluZyB2YWx1ZXMuIEhvd2V2ZXIsIGlmIHRoZXJlIGlzIGEgbmVlZCB0byBwYXNzIGFuIG9iamVjdCwgdGhpcyBzaW5nbGV0b25jYW4gXHJcbiAqIGNvbWUgdG8gdGhlIHJlc2VjdWUuIFxyXG4gKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0ICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0YVRyYW5zZmVyIHtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBkYXRhOiBhbnkgPSB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgc2V0RGF0YShuYW1lLCB2YWx1ZSl7XHJcbiAgICAgICAgdGhpcy5kYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0YShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtuYW1lXTtcclxuICAgIH1cclxuICAgICAgICAgICAgXHJcbn0iLCJpbXBvcnQge1xyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEhvc3RMaXN0ZW5lcixcclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEYXRhVHJhbnNmZXIgfSBmcm9tICcuL2RhdGF0cmFuc2Zlcic7XHJcbmltcG9ydCB7IERyb3BFdmVudCB9IGZyb20gJy4vZHJhZy1kcm9wLmludGVyZmFjZXMnO1xyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbZHJvcEVuYWJsZWRdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJvcERpcmVjdGl2ZSB7XHJcbiAgICBcclxuICAgIEBJbnB1dCgnbWVkaXVtJylcclxuICAgIG1lZGl1bTogYW55O1xyXG4gICAgICAgIFxyXG4gICAgQElucHV0KClcclxuICAgIGRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcclxuICAgICAgICBcclxuICAgIEBJbnB1dChcImRyb3BFbmFibGVkXCIpXHJcbiAgICBkcm9wRW5hYmxlZCA9IChldmVudDogRHJvcEV2ZW50KSA9PiB0cnVlO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25EcmFnRW50ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uRHJhZ0xlYXZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyb3A6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uRHJhZ092ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZGF0YVRyYW5zZmVyOiBEYXRhVHJhbnNmZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZlxyXG4gICAgKSB7fVxyXG4gICAgXHJcblx0cHJpdmF0ZSBjcmVhdGVEcm9wRXZlbnQoZXZlbnQpOiBEcm9wRXZlbnQge1xyXG5cdFx0cmV0dXJuIHtcclxuICAgICAgICAgICAgc291cmNlOiB0aGlzLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwic291cmNlXCIpLFxyXG4gICAgICAgICAgICBkZXN0aW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgbWVkaXVtOiB0aGlzLm1lZGl1bSxcclxuICAgICAgICAgICAgICAgIG5vZGU6IHRoaXMuZWwubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZXHJcbiAgICAgICAgICAgIH1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxyXG4gICAgZHJvcChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgZHJvcEV2ZW50ID0gdGhpcy5jcmVhdGVEcm9wRXZlbnQoZXZlbnQpO1xyXG5cclxuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctb3ZlclwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZHJvcEVuYWJsZWQoZHJvcEV2ZW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJvcC5lbWl0KGRyb3BFdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcmFnZW50ZXInLCBbJyRldmVudCddKSBcclxuICAgIGRyYWdFbnRlcihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgZHJvcEV2ZW50ID0gdGhpcy5jcmVhdGVEcm9wRXZlbnQoZXZlbnQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kcm9wRW5hYmxlZChkcm9wRXZlbnQpKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gdGhpcy5kcm9wRWZmZWN0O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkcmFnLW92ZXJcIik7XHJcbiAgICAgICAgICAgIHRoaXMub25EcmFnRW50ZXIuZW1pdChkcm9wRXZlbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZy1vdmVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnTGVhdmUoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLW92ZXJcIik7XHJcbiAgICAgICAgdGhpcy5vbkRyYWdMZWF2ZS5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKSBcclxuICAgIGRyYWdPdmVyKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgZHJvcEV2ZW50ID0gdGhpcy5jcmVhdGVEcm9wRXZlbnQoZXZlbnQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kcm9wRW5hYmxlZChkcm9wRXZlbnQpKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHJhZy1vdmVyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZ092ZXIuZW1pdChkcm9wRXZlbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZy1vdmVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7XHJcbiAgICBEaXJlY3RpdmUsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgSG9zdExpc3RlbmVyLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YVRyYW5zZmVyIH0gZnJvbSAnLi9kYXRhdHJhbnNmZXInO1xyXG5pbXBvcnQgeyBEcmFnRXZlbnQgfSBmcm9tICcuL2RyYWctZHJvcC5pbnRlcmZhY2VzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbZHJhZ0VuYWJsZWRdJyxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnW2RyYWdnYWJsZV0nOiAndHJ1ZSdcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIERyYWdEaXJlY3RpdmUge1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJtZWRpdW1cIilcclxuICAgIG1lZGl1bTogYW55O1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJkcmFnRWZmZWN0XCIpXHJcbiAgICBkcmFnRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImRyYWdFbmFibGVkXCIpXHJcbiAgICBkcmFnRW5hYmxlZCA9IChldmVudCkgPT4gdHJ1ZTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyYWdTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyYWc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGhhbmRsZTogYW55O1xyXG4gICAgICAgIFxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhVHJhbnNmZXI6IERhdGFUcmFuc2ZlcixcclxuICAgICAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcmFnc3RhcnQnLCBbJyRldmVudCddKSBcclxuICAgIGRyYWdTdGFydChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IGRyYWdFdmVudDogRHJhZ0V2ZW50ID0ge1xyXG4gICAgICAgICAgICBtZWRpdW06IHRoaXMubWVkaXVtLFxyXG4gICAgICAgICAgICBub2RlOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXHJcbiAgICAgICAgICAgIG9mZnNldDoge1xyXG4gICAgICAgICAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCwgXHJcbiAgICAgICAgICAgICAgICB5OiBldmVudC5jbGllbnRZIC0gcmVjdC50b3BcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kcmFnRW5hYmxlZChkcmFnRXZlbnQpKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gdGhpcy5kcmFnRWZmZWN0O1xyXG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcIm1ha2VJdFRpY2tcIixcInRydWVcIik7Ly8gdGhpcyBpcyBuZWVkZWQganVzdCB0byBtYWtlIGRyYWcvZHJvcCBldmVudCB0cmlnZ2VyLlxyXG5cclxuICAgICAgICAgICAgdGhpcy5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInNvdXJjZVwiLCBkcmFnRXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZ1N0YXJ0LmVtaXQoZHJhZ0V2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWcnLCBbJyRldmVudCddKSBcclxuICAgIGRyYWcoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBkcmFnRXZlbnQ6IERyYWdFdmVudCA9IHRoaXMuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJzb3VyY2VcIik7XHJcblxyXG4gICAgICAgIGRyYWdFdmVudC5jbGllbnRYID0gZXZlbnQuY2xpZW50WDtcclxuICAgICAgICBkcmFnRXZlbnQuY2xpZW50WSA9IGV2ZW50LmNsaWVudFk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0VuYWJsZWQoZHJhZ0V2ZW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZy5lbWl0KGRyYWdFdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcmFnZW5kJywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnRW5kKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgZHJhZ0V2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwic291cmNlXCIpOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5vbkRyYWdFbmQuZW1pdChkcmFnRXZlbnQpO1xyXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZy1vdmVyXCIpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIFRoaXMgZGlyZWN0aXZlIGlzIGJlc3Qgc3VpdGVkIGZvciBkcmFnZ2luZyBhbiBlbGVtZW50IHdpdGggY29uZmluZW1lbnQgb2YgZG9jdW1lbnQuICBpdCBpcyBub3QgcmVjb21lbmRlZFxyXG4gKiB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYSBkcm9wIG9wZXJhdGlvbiBpZiBhbiBlbGVtZW50IGlzIHRvIGJlIGRyb3BwZWQgb24gYW5vdGhlciBlbGVtZW50IHdpdGhpbiBcclxuICogYSBoZWlyYXJjaHkgb2Ygbm9kZXMuXHJcbiAqL1xyXG5pbXBvcnQge1xyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEhvc3RMaXN0ZW5lcixcclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGFUcmFuc2ZlciB9IGZyb20gJy4vZGF0YXRyYW5zZmVyJztcclxuaW1wb3J0IHsgRHJhZ0V2ZW50IH0gZnJvbSAnLi9kcmFnLWRyb3AuaW50ZXJmYWNlcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2RyYWdJbkRvY3VtZW50XScsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ1tkcmFnZ2FibGVdJzogJ3RydWUnXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcmFnSW5Eb2N1bWVudERpcmVjdGl2ZSB7XHJcbiAgICBcclxuICAgIEBJbnB1dChcIm1lZGl1bVwiKVxyXG4gICAgbWVkaXVtOiBhbnk7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImRyYWdFZmZlY3RcIilcclxuICAgIGRyYWdFZmZlY3QgPSBcIm1vdmVcIjtcclxuICAgIFxyXG4gICAgQElucHV0KFwiZHJhZ0luRG9jdW1lbnRcIilcclxuICAgIGRyYWdJbkRvY3VtZW50ID0gKGV2ZW50KSA9PiB0cnVlO1xyXG4gICAgXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uRHJhZzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIHByaXZhdGUgaGFuZGxlOiBhbnk7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGRhdGFUcmFuc2ZlcjogRGF0YVRyYW5zZmVyLFxyXG4gICAgICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWZcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWdzdGFydCcsIFsnJGV2ZW50J10pIFxyXG4gICAgZHJhZ1N0YXJ0KGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgZHJhZ0V2ZW50OiBEcmFnRXZlbnQgPSB7XHJcbiAgICAgICAgICAgIG1lZGl1bTogdGhpcy5tZWRpdW0sXHJcbiAgICAgICAgICAgIG5vZGU6IHRoaXMuZWwubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcclxuICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcclxuICAgICAgICAgICAgb2Zmc2V0OiB7XHJcbiAgICAgICAgICAgICAgICB4OiBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0LCBcclxuICAgICAgICAgICAgICAgIHk6IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRyYWdJbkRvY3VtZW50KGRyYWdFdmVudCkpIHtcclxuICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSB0aGlzLmRyYWdFZmZlY3Q7XHJcbiAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwibWFrZUl0VGlja1wiLFwidHJ1ZVwiKTsvLyB0aGlzIGlzIG5lZWRlZCBqdXN0IHRvIG1ha2UgZHJhZy9kcm9wIGV2ZW50IHRyaWdnZXIuXHJcblxyXG4gICAgICAgICAgICB0aGlzLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwic291cmNlXCIsIGRyYWdFdmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMub25EcmFnU3RhcnQuZW1pdChkcmFnRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6ZHJhZ292ZXInLCBbJyRldmVudCddKSBcclxuICAgIGRyYWcoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBkcmFnRXZlbnQ6IERyYWdFdmVudCA9IHRoaXMuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJzb3VyY2VcIik7XHJcblxyXG4gICAgICAgIGRyYWdFdmVudC5jbGllbnRYID0gZXZlbnQuY2xpZW50WDtcclxuICAgICAgICBkcmFnRXZlbnQuY2xpZW50WSA9IGV2ZW50LmNsaWVudFk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0luRG9jdW1lbnQoZHJhZ0V2ZW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZy5lbWl0KGRyYWdFdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpkcmFnZW5kJywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnRW5kKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgZHJhZ0V2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwic291cmNlXCIpOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5vbkRyYWdFbmQuZW1pdChkcmFnRXZlbnQpO1xyXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZy1vdmVyXCIpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBEYXRhVHJhbnNmZXIgfSBmcm9tICcuL2RhdGF0cmFuc2Zlcic7XHJcbmltcG9ydCB7IERyYWdEaXJlY3RpdmUgfSBmcm9tICcuL2RyYWcuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRHJhZ0luRG9jdW1lbnREaXJlY3RpdmUgfSBmcm9tICcuL2RyYWctb25seS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBEcm9wRGlyZWN0aXZlIH0gZnJvbSAnLi9kcm9wLmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuXHRDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG5cdERyYWdEaXJlY3RpdmUsXHJcbiAgICBEcmFnSW5Eb2N1bWVudERpcmVjdGl2ZSxcclxuXHREcm9wRGlyZWN0aXZlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcblx0RHJhZ0RpcmVjdGl2ZSxcclxuXHREcmFnSW5Eb2N1bWVudERpcmVjdGl2ZSxcclxuXHREcm9wRGlyZWN0aXZlXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgRGF0YVRyYW5zZmVyXHJcbiAgXSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmFnRHJvcE1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkV2ZW50RW1pdHRlciIsIkRpcmVjdGl2ZSIsIkVsZW1lbnRSZWYiLCJJbnB1dCIsIk91dHB1dCIsIkhvc3RMaXN0ZW5lciIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBO1FBT0k7d0JBRm9CLEVBQUU7U0FFTjs7Ozs7O1FBRWhCLDhCQUFPOzs7OztZQUFQLFVBQVEsSUFBSSxFQUFFLEtBQUs7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDM0I7Ozs7O1FBRUQsOEJBQU87Ozs7WUFBUCxVQUFRLElBQUk7Z0JBQ1IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFCOztvQkFiSkEsZUFBVTs7OzsyQkFQWDs7Ozs7OztBQ0FBO1FBdUNJLHVCQUNZLGNBQ0E7WUFEQSxpQkFBWSxHQUFaLFlBQVk7WUFDWixPQUFFLEdBQUYsRUFBRTs4QkFuQkQsTUFBTTsrQkFHTCxVQUFDLEtBQWdCLElBQUssT0FBQSxJQUFJLEdBQUE7K0JBR1AsSUFBSUMsaUJBQVksRUFBRTsrQkFHbEIsSUFB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