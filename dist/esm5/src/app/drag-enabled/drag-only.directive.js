/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { DataTransfer } from './datatransfer';
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
export { DragInDocumentDirective };
if (false) {
    /** @type {?} */
    DragInDocumentDirective.prototype.medium;
    /** @type {?} */
    DragInDocumentDirective.prototype.dragEffect;
    /** @type {?} */
    DragInDocumentDirective.prototype.dragInDocument;
    /** @type {?} */
    DragInDocumentDirective.prototype.onDragStart;
    /** @type {?} */
    DragInDocumentDirective.prototype.onDragEnd;
    /** @type {?} */
    DragInDocumentDirective.prototype.onDrag;
    /** @type {?} */
    DragInDocumentDirective.prototype.handle;
    /** @type {?} */
    DragInDocumentDirective.prototype.dataTransfer;
    /** @type {?} */
    DragInDocumentDirective.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1vbmx5LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9kcmFnLWVuYWJsZWQvIiwic291cmNlcyI6WyJzcmMvYXBwL2RyYWctZW5hYmxlZC9kcmFnLW9ubHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ2YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQStCMUMsaUNBQ1ksY0FDQTtRQURBLGlCQUFZLEdBQVosWUFBWTtRQUNaLE9BQUUsR0FBRixFQUFFOzBCQWxCRCxNQUFNOzhCQUdGLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLElBQUksRUFBSixDQUFJOzJCQUdWLElBQUksWUFBWSxFQUFFO3lCQUdwQixJQUFJLFlBQVksRUFBRTtzQkFHckIsSUFBSSxZQUFZLEVBQUU7S0FRN0M7Ozs7O0lBR0QsMkNBQVM7Ozs7SUFEVCxVQUNVLEtBQVU7UUFDaEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDOztRQUV4QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOztRQUMzRCxJQUFNLFNBQVMsR0FBYztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTtZQUMzQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLE1BQU0sRUFBRTtnQkFDSixDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSTtnQkFDNUIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUc7YUFDOUI7U0FDSixDQUFBO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsS0FBSyxDQUFDLFlBQVksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNuRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ25EO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BDO0tBQ0o7Ozs7SUFDTyxzQ0FBSTs7Ozs7UUFDUixJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDOztRQUMzRSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUM7UUFFakIsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksR0FBRyxJQUFJLENBQUM7U0FDZjtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7Ozs7OztJQUloQixzQ0FBSTs7OztJQURKLFVBQ0ssS0FBVTs7UUFDWCxJQUFNLFNBQVMsR0FBYyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVqRSxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDbEMsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBRWxDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQy9CO0tBQ0o7Ozs7O0lBR0QseUNBQU87Ozs7SUFEUCxVQUNRLEtBQVU7UUFDZCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7O1FBQ3hCLElBQU0sU0FBUyxHQUFjLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDdkQ7O2dCQXRGSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsSUFBSSxFQUFFO3dCQUNGLGFBQWEsRUFBRSxNQUFNO3FCQUN4QjtpQkFDSjs7OztnQkFSUSxZQUFZO2dCQU5qQixVQUFVOzs7eUJBaUJULEtBQUssU0FBQyxRQUFROzZCQUdkLEtBQUssU0FBQyxZQUFZO2lDQUdsQixLQUFLLFNBQUMsZ0JBQWdCOzhCQUd0QixNQUFNOzRCQUdOLE1BQU07eUJBR04sTUFBTTs0QkFXTixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO3VCQWtDcEMsWUFBWSxTQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDOzBCQVk1QyxZQUFZLFNBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2tDQWhHaEQ7O1NBc0JhLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFRoaXMgZGlyZWN0aXZlIGlzIGJlc3Qgc3VpdGVkIGZvciBkcmFnZ2luZyBhbiBlbGVtZW50IHdpdGggY29uZmluZW1lbnQgb2YgZG9jdW1lbnQuICBpdCBpcyBub3QgcmVjb21lbmRlZFxyXG4gKiB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYSBkcm9wIG9wZXJhdGlvbiBpZiBhbiBlbGVtZW50IGlzIHRvIGJlIGRyb3BwZWQgb24gYW5vdGhlciBlbGVtZW50IHdpdGhpbiBcclxuICogYSBoZWlyYXJjaHkgb2Ygbm9kZXMuXHJcbiAqL1xyXG5pbXBvcnQge1xyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEhvc3RMaXN0ZW5lcixcclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGFUcmFuc2ZlciB9IGZyb20gJy4vZGF0YXRyYW5zZmVyJztcclxuaW1wb3J0IHsgRHJhZ0V2ZW50IH0gZnJvbSAnLi9kcmFnLWRyb3AuaW50ZXJmYWNlcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2RyYWdJbkRvY3VtZW50XScsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ1tkcmFnZ2FibGVdJzogJ3RydWUnXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcmFnSW5Eb2N1bWVudERpcmVjdGl2ZSB7XHJcbiAgICBcclxuICAgIEBJbnB1dChcIm1lZGl1bVwiKVxyXG4gICAgbWVkaXVtOiBhbnk7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImRyYWdFZmZlY3RcIilcclxuICAgIGRyYWdFZmZlY3QgPSBcIm1vdmVcIjtcclxuICAgIFxyXG4gICAgQElucHV0KFwiZHJhZ0luRG9jdW1lbnRcIilcclxuICAgIGRyYWdJbkRvY3VtZW50ID0gKGV2ZW50OiBEcmFnRXZlbnQpID0+IHRydWU7XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uRHJhZ0VuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25EcmFnOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBoYW5kbGU6IGFueTtcclxuICAgICAgICBcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZGF0YVRyYW5zZmVyOiBEYXRhVHJhbnNmZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZlxyXG4gICAgKSB7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ3N0YXJ0JywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnU3RhcnQoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IGRyYWdFdmVudDogRHJhZ0V2ZW50ID0ge1xyXG4gICAgICAgICAgICBtZWRpdW06IHRoaXMubWVkaXVtLFxyXG4gICAgICAgICAgICBub2RlOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXHJcbiAgICAgICAgICAgIG9mZnNldDoge1xyXG4gICAgICAgICAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCwgXHJcbiAgICAgICAgICAgICAgICB5OiBldmVudC5jbGllbnRZIC0gcmVjdC50b3BcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kcmFnSW5Eb2N1bWVudChkcmFnRXZlbnQpKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gdGhpcy5kcmFnRWZmZWN0O1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNJRSgpKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcIm1ha2VJdFRpY2tcIixcInRydWVcIik7Ly8gdGhpcyBpcyBuZWVkZWQganVzdCB0byBtYWtlIGRyYWcvZHJvcCBldmVudCB0cmlnZ2VyLlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJzb3VyY2VcIiwgZHJhZ0V2ZW50KTtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWdTdGFydC5lbWl0KGRyYWdFdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc0lFKCkge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5zZWFyY2goLyg/OkVkZ2V8TVNJRXxUcmlkZW50XFwvLio7IHJ2OikvKTtcclxuICAgICAgICBsZXQgaXNJRSA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKG1hdGNoICE9PSAtMSkge1xyXG4gICAgICAgICAgICBpc0lFID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzSUU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmRyYWdvdmVyJywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBkcmFnRXZlbnQ6IERyYWdFdmVudCA9IHRoaXMuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJzb3VyY2VcIik7XHJcblxyXG4gICAgICAgIGRyYWdFdmVudC5jbGllbnRYID0gZXZlbnQuY2xpZW50WDtcclxuICAgICAgICBkcmFnRXZlbnQuY2xpZW50WSA9IGV2ZW50LmNsaWVudFk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0luRG9jdW1lbnQoZHJhZ0V2ZW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZy5lbWl0KGRyYWdFdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpkcmFnZW5kJywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnRW5kKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBjb25zdCBkcmFnRXZlbnQ6IERyYWdFdmVudCA9IHRoaXMuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJzb3VyY2VcIik7ICAgICAgICBcclxuICAgICAgICB0aGlzLm9uRHJhZ0VuZC5lbWl0KGRyYWdFdmVudCk7XHJcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLW92ZXJcIik7XHJcbiAgICB9XHJcbn1cclxuIl19