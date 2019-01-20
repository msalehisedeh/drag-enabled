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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1vbmx5LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9kcmFnLWVuYWJsZWQvIiwic291cmNlcyI6WyJzcmMvYXBwL2RyYWctZW5hYmxlZC9kcmFnLW9ubHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ2YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUzlDLE1BQU07Ozs7O0lBc0JGLFlBQ1ksY0FDQTtRQURBLGlCQUFZLEdBQVosWUFBWTtRQUNaLE9BQUUsR0FBRixFQUFFOzBCQWxCRCxNQUFNOzhCQUdGLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJOzJCQUdDLElBQUksWUFBWSxFQUFFO3lCQUdwQixJQUFJLFlBQVksRUFBRTtzQkFHckIsSUFBSSxZQUFZLEVBQUU7S0FRN0M7Ozs7O0lBR0QsU0FBUyxDQUFDLEtBQUs7UUFDWCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7O1FBRXhCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O1FBQzNELE1BQU0sU0FBUyxHQUFjO1lBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO1lBQzNCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsTUFBTSxFQUFFO2dCQUNKLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJO2dCQUM1QixDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRzthQUM5QjtTQUNKLENBQUE7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxLQUFLLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ25ELEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBQyxNQUFNLENBQUMsQ0FBQztZQUVoRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDcEM7S0FDSjs7Ozs7SUFHRCxJQUFJLENBQUMsS0FBSzs7UUFDTixNQUFNLFNBQVMsR0FBYyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVqRSxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDbEMsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBRWxDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQy9CO0tBQ0o7Ozs7O0lBR0QsT0FBTyxDQUFDLEtBQUs7UUFDVCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7O1FBQ3hCLE1BQU0sU0FBUyxHQUFjLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDdkQ7OztZQTVFSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsSUFBSSxFQUFFO29CQUNGLGFBQWEsRUFBRSxNQUFNO2lCQUN4QjthQUNKOzs7O1lBUlEsWUFBWTtZQU5qQixVQUFVOzs7cUJBaUJULEtBQUssU0FBQyxRQUFRO3lCQUdkLEtBQUssU0FBQyxZQUFZOzZCQUdsQixLQUFLLFNBQUMsZ0JBQWdCOzBCQUd0QixNQUFNO3dCQUdOLE1BQU07cUJBR04sTUFBTTt3QkFXTixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO21CQXdCcEMsWUFBWSxTQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDO3NCQVk1QyxZQUFZLFNBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBUaGlzIGRpcmVjdGl2ZSBpcyBiZXN0IHN1aXRlZCBmb3IgZHJhZ2dpbmcgYW4gZWxlbWVudCB3aXRoIGNvbmZpbmVtZW50IG9mIGRvY3VtZW50LiAgaXQgaXMgbm90IHJlY29tZW5kZWRcclxuICogdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGEgZHJvcCBvcGVyYXRpb24gaWYgYW4gZWxlbWVudCBpcyB0byBiZSBkcm9wcGVkIG9uIGFub3RoZXIgZWxlbWVudCB3aXRoaW4gXHJcbiAqIGEgaGVpcmFyY2h5IG9mIG5vZGVzLlxyXG4gKi9cclxuaW1wb3J0IHtcclxuICAgIERpcmVjdGl2ZSxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBIb3N0TGlzdGVuZXIsXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhVHJhbnNmZXIgfSBmcm9tICcuL2RhdGF0cmFuc2Zlcic7XHJcbmltcG9ydCB7IERyYWdFdmVudCB9IGZyb20gJy4vZHJhZy1kcm9wLmludGVyZmFjZXMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tkcmFnSW5Eb2N1bWVudF0nLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdbZHJhZ2dhYmxlXSc6ICd0cnVlJ1xyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhZ0luRG9jdW1lbnREaXJlY3RpdmUge1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJtZWRpdW1cIilcclxuICAgIG1lZGl1bTogYW55O1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJkcmFnRWZmZWN0XCIpXHJcbiAgICBkcmFnRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImRyYWdJbkRvY3VtZW50XCIpXHJcbiAgICBkcmFnSW5Eb2N1bWVudCA9IChldmVudCkgPT4gdHJ1ZTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyYWdTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyYWc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGhhbmRsZTogYW55O1xyXG4gICAgICAgIFxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhVHJhbnNmZXI6IERhdGFUcmFuc2ZlcixcclxuICAgICAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcmFnc3RhcnQnLCBbJyRldmVudCddKSBcclxuICAgIGRyYWdTdGFydChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IGRyYWdFdmVudDogRHJhZ0V2ZW50ID0ge1xyXG4gICAgICAgICAgICBtZWRpdW06IHRoaXMubWVkaXVtLFxyXG4gICAgICAgICAgICBub2RlOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXHJcbiAgICAgICAgICAgIG9mZnNldDoge1xyXG4gICAgICAgICAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCwgXHJcbiAgICAgICAgICAgICAgICB5OiBldmVudC5jbGllbnRZIC0gcmVjdC50b3BcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kcmFnSW5Eb2N1bWVudChkcmFnRXZlbnQpKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gdGhpcy5kcmFnRWZmZWN0O1xyXG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcIm1ha2VJdFRpY2tcIixcInRydWVcIik7Ly8gdGhpcyBpcyBuZWVkZWQganVzdCB0byBtYWtlIGRyYWcvZHJvcCBldmVudCB0cmlnZ2VyLlxyXG5cclxuICAgICAgICAgICAgdGhpcy5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInNvdXJjZVwiLCBkcmFnRXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZ1N0YXJ0LmVtaXQoZHJhZ0V2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmRyYWdvdmVyJywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgZHJhZ0V2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwic291cmNlXCIpO1xyXG5cclxuICAgICAgICBkcmFnRXZlbnQuY2xpZW50WCA9IGV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgZHJhZ0V2ZW50LmNsaWVudFkgPSBldmVudC5jbGllbnRZO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmRyYWdJbkRvY3VtZW50KGRyYWdFdmVudCkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWcuZW1pdChkcmFnRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6ZHJhZ2VuZCcsIFsnJGV2ZW50J10pIFxyXG4gICAgZHJhZ0VuZChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGRyYWdFdmVudDogRHJhZ0V2ZW50ID0gdGhpcy5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInNvdXJjZVwiKTsgICAgICAgIFxyXG4gICAgICAgIHRoaXMub25EcmFnRW5kLmVtaXQoZHJhZ0V2ZW50KTtcclxuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctb3ZlclwiKTtcclxuICAgIH1cclxufVxyXG4iXX0=