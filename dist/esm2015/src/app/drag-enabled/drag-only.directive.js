/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { DataTransfer } from './datatransfer';
export class DragInDocumentDirective {
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
            if (!this.isIE()) {
                event.dataTransfer.setData("makeItTick", "true"); // this is needed just to make drag/drop event trigger.
            }
            this.dataTransfer.setData("source", dragEvent);
            this.onDragStart.emit(dragEvent);
        }
    }
    /**
     * @return {?}
     */
    isIE() {
        /** @type {?} */
        const match = navigator.userAgent.search(/(?:Edge|MSIE|Trident\/.*; rv:)/);
        /** @type {?} */
        let isIE = false;
        if (match !== -1) {
            isIE = true;
        }
        return isIE;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1vbmx5LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9kcmFnLWVuYWJsZWQvIiwic291cmNlcyI6WyJzcmMvYXBwL2RyYWctZW5hYmxlZC9kcmFnLW9ubHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ2YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUzlDLE1BQU07Ozs7O0lBc0JGLFlBQ1ksY0FDQTtRQURBLGlCQUFZLEdBQVosWUFBWTtRQUNaLE9BQUUsR0FBRixFQUFFOzBCQWxCRCxNQUFNOzhCQUdGLENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsSUFBSTsyQkFHVixJQUFJLFlBQVksRUFBRTt5QkFHcEIsSUFBSSxZQUFZLEVBQUU7c0JBR3JCLElBQUksWUFBWSxFQUFFO0tBUTdDOzs7OztJQUdELFNBQVMsQ0FBQyxLQUFVO1FBQ2hCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7UUFFeEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQzs7UUFDM0QsTUFBTSxTQUFTLEdBQWM7WUFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7WUFDM0IsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixNQUFNLEVBQUU7Z0JBQ0osQ0FBQyxFQUFFLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUk7Z0JBQzVCLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHO2FBQzlCO1NBQ0osQ0FBQTtRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLEtBQUssQ0FBQyxZQUFZLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNmLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBQyxNQUFNLENBQUMsQ0FBQzthQUNuRDtZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNwQztLQUNKOzs7O0lBQ08sSUFBSTs7UUFDUixNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDOztRQUMzRSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUM7UUFFakIsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksR0FBRyxJQUFJLENBQUM7U0FDZjtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7Ozs7OztJQUloQixJQUFJLENBQUMsS0FBVTs7UUFDWCxNQUFNLFNBQVMsR0FBYyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVqRSxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDbEMsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBRWxDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQy9CO0tBQ0o7Ozs7O0lBR0QsT0FBTyxDQUFDLEtBQVU7UUFDZCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7O1FBQ3hCLE1BQU0sU0FBUyxHQUFjLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDdkQ7OztZQXRGSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsSUFBSSxFQUFFO29CQUNGLGFBQWEsRUFBRSxNQUFNO2lCQUN4QjthQUNKOzs7O1lBUlEsWUFBWTtZQU5qQixVQUFVOzs7cUJBaUJULEtBQUssU0FBQyxRQUFRO3lCQUdkLEtBQUssU0FBQyxZQUFZOzZCQUdsQixLQUFLLFNBQUMsZ0JBQWdCOzBCQUd0QixNQUFNO3dCQUdOLE1BQU07cUJBR04sTUFBTTt3QkFXTixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO21CQWtDcEMsWUFBWSxTQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDO3NCQVk1QyxZQUFZLFNBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBUaGlzIGRpcmVjdGl2ZSBpcyBiZXN0IHN1aXRlZCBmb3IgZHJhZ2dpbmcgYW4gZWxlbWVudCB3aXRoIGNvbmZpbmVtZW50IG9mIGRvY3VtZW50LiAgaXQgaXMgbm90IHJlY29tZW5kZWRcclxuICogdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGEgZHJvcCBvcGVyYXRpb24gaWYgYW4gZWxlbWVudCBpcyB0byBiZSBkcm9wcGVkIG9uIGFub3RoZXIgZWxlbWVudCB3aXRoaW4gXHJcbiAqIGEgaGVpcmFyY2h5IG9mIG5vZGVzLlxyXG4gKi9cclxuaW1wb3J0IHtcclxuICAgIERpcmVjdGl2ZSxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBIb3N0TGlzdGVuZXIsXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhVHJhbnNmZXIgfSBmcm9tICcuL2RhdGF0cmFuc2Zlcic7XHJcbmltcG9ydCB7IERyYWdFdmVudCB9IGZyb20gJy4vZHJhZy1kcm9wLmludGVyZmFjZXMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tkcmFnSW5Eb2N1bWVudF0nLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdbZHJhZ2dhYmxlXSc6ICd0cnVlJ1xyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhZ0luRG9jdW1lbnREaXJlY3RpdmUge1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJtZWRpdW1cIilcclxuICAgIG1lZGl1bTogYW55O1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJkcmFnRWZmZWN0XCIpXHJcbiAgICBkcmFnRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImRyYWdJbkRvY3VtZW50XCIpXHJcbiAgICBkcmFnSW5Eb2N1bWVudCA9IChldmVudDogRHJhZ0V2ZW50KSA9PiB0cnVlO1xyXG4gICAgXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uRHJhZzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIHByaXZhdGUgaGFuZGxlOiBhbnk7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGRhdGFUcmFuc2ZlcjogRGF0YVRyYW5zZmVyLFxyXG4gICAgICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWZcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWdzdGFydCcsIFsnJGV2ZW50J10pIFxyXG4gICAgZHJhZ1N0YXJ0KGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBkcmFnRXZlbnQ6IERyYWdFdmVudCA9IHtcclxuICAgICAgICAgICAgbWVkaXVtOiB0aGlzLm1lZGl1bSxcclxuICAgICAgICAgICAgbm9kZTogdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxyXG4gICAgICAgICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxyXG4gICAgICAgICAgICBvZmZzZXQ6IHtcclxuICAgICAgICAgICAgICAgIHg6IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQsIFxyXG4gICAgICAgICAgICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0luRG9jdW1lbnQoZHJhZ0V2ZW50KSkge1xyXG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IHRoaXMuZHJhZ0VmZmVjdDtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSUUoKSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJtYWtlSXRUaWNrXCIsXCJ0cnVlXCIpOy8vIHRoaXMgaXMgbmVlZGVkIGp1c3QgdG8gbWFrZSBkcmFnL2Ryb3AgZXZlbnQgdHJpZ2dlci5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwic291cmNlXCIsIGRyYWdFdmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMub25EcmFnU3RhcnQuZW1pdChkcmFnRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNJRSgpIHtcclxuICAgICAgICBjb25zdCBtYXRjaCA9IG5hdmlnYXRvci51c2VyQWdlbnQuc2VhcmNoKC8oPzpFZGdlfE1TSUV8VHJpZGVudFxcLy4qOyBydjopLyk7XHJcbiAgICAgICAgbGV0IGlzSUUgPSBmYWxzZTtcclxuICAgIFxyXG4gICAgICAgIGlmIChtYXRjaCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgaXNJRSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc0lFO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpkcmFnb3ZlcicsIFsnJGV2ZW50J10pIFxyXG4gICAgZHJhZyhldmVudDogYW55KSB7XHJcbiAgICAgICAgY29uc3QgZHJhZ0V2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwic291cmNlXCIpO1xyXG5cclxuICAgICAgICBkcmFnRXZlbnQuY2xpZW50WCA9IGV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgZHJhZ0V2ZW50LmNsaWVudFkgPSBldmVudC5jbGllbnRZO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmRyYWdJbkRvY3VtZW50KGRyYWdFdmVudCkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWcuZW1pdChkcmFnRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6ZHJhZ2VuZCcsIFsnJGV2ZW50J10pIFxyXG4gICAgZHJhZ0VuZChldmVudDogYW55KSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgZHJhZ0V2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwic291cmNlXCIpOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5vbkRyYWdFbmQuZW1pdChkcmFnRXZlbnQpO1xyXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZy1vdmVyXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==