/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { DataTransfer } from './datatransfer';
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
        drag: [{ type: HostListener, args: ['dragover', ['$event'],] }],
        dragEnd: [{ type: HostListener, args: ['dragend', ['$event'],] }]
    };
    return DragDirective;
}());
export { DragDirective };
if (false) {
    /** @type {?} */
    DragDirective.prototype.medium;
    /** @type {?} */
    DragDirective.prototype.dragEffect;
    /** @type {?} */
    DragDirective.prototype.dragEnabled;
    /** @type {?} */
    DragDirective.prototype.onDragStart;
    /** @type {?} */
    DragDirective.prototype.onDragEnd;
    /** @type {?} */
    DragDirective.prototype.onDrag;
    /** @type {?} */
    DragDirective.prototype.handle;
    /** @type {?} */
    DragDirective.prototype.dataTransfer;
    /** @type {?} */
    DragDirective.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvZHJhZy1lbmFibGVkLyIsInNvdXJjZXMiOlsic3JjL2FwcC9kcmFnLWVuYWJsZWQvZHJhZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDZixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBK0IxQyx1QkFDWSxjQUNBO1FBREEsaUJBQVksR0FBWixZQUFZO1FBQ1osT0FBRSxHQUFGLEVBQUU7MEJBbEJELE1BQU07MkJBR0wsVUFBQyxLQUFnQixJQUFLLE9BQUEsSUFBSSxFQUFKLENBQUk7MkJBR1AsSUFBSSxZQUFZLEVBQUU7eUJBR3BCLElBQUksWUFBWSxFQUFFO3NCQUdyQixJQUFJLFlBQVksRUFBRTtLQVE3Qzs7Ozs7SUFHRCxpQ0FBUzs7OztJQURULFVBQ1UsS0FBVTtRQUNoQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7O1FBRXhCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O1FBQzNELElBQU0sU0FBUyxHQUFjO1lBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO1lBQzNCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsTUFBTSxFQUFFO2dCQUNKLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJO2dCQUM1QixDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRzthQUM5QjtTQUNKLENBQUE7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixLQUFLLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ25ELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDZixLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUMsTUFBTSxDQUFDLENBQUM7YUFDbkQ7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDcEM7S0FDSjs7OztJQUNPLDRCQUFJOzs7OztRQUNSLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7O1FBQzNFLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQztRQUVqQixFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNmO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQzs7Ozs7O0lBSWhCLDRCQUFJOzs7O0lBREosVUFDSyxLQUFVOztRQUNYLElBQU0sU0FBUyxHQUFjLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWpFLFNBQVMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNsQyxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFFbEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDL0I7S0FDSjs7Ozs7SUFHRCwrQkFBTzs7OztJQURQLFVBQ1EsS0FBVTtRQUNkLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7UUFDeEIsSUFBTSxTQUFTLEdBQWMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUN2RDs7Z0JBdEZKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsSUFBSSxFQUFFO3dCQUNGLGFBQWEsRUFBRSxNQUFNO3FCQUN4QjtpQkFDSjs7OztnQkFSUSxZQUFZO2dCQU5qQixVQUFVOzs7eUJBaUJULEtBQUssU0FBQyxRQUFROzZCQUdkLEtBQUssU0FBQyxZQUFZOzhCQUdsQixLQUFLLFNBQUMsYUFBYTs4QkFHbkIsTUFBTTs0QkFHTixNQUFNO3lCQUdOLE1BQU07NEJBV04sWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzt1QkFrQ3BDLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBWW5DLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7O3dCQTNGdkM7O1NBaUJhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEhvc3RMaXN0ZW5lcixcclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGFUcmFuc2ZlciB9IGZyb20gJy4vZGF0YXRyYW5zZmVyJztcclxuaW1wb3J0IHsgRHJhZ0V2ZW50IH0gZnJvbSAnLi9kcmFnLWRyb3AuaW50ZXJmYWNlcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2RyYWdFbmFibGVkXScsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ1tkcmFnZ2FibGVdJzogJ3RydWUnXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcmFnRGlyZWN0aXZlIHtcclxuICAgIFxyXG4gICAgQElucHV0KFwibWVkaXVtXCIpXHJcbiAgICBtZWRpdW06IGFueTtcclxuICAgIFxyXG4gICAgQElucHV0KFwiZHJhZ0VmZmVjdFwiKVxyXG4gICAgZHJhZ0VmZmVjdCA9IFwibW92ZVwiO1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJkcmFnRW5hYmxlZFwiKVxyXG4gICAgZHJhZ0VuYWJsZWQgPSAoZXZlbnQ6IERyYWdFdmVudCkgPT4gdHJ1ZTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyYWdTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyYWc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGhhbmRsZTogYW55O1xyXG4gICAgICAgIFxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhVHJhbnNmZXI6IERhdGFUcmFuc2ZlcixcclxuICAgICAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcmFnc3RhcnQnLCBbJyRldmVudCddKSBcclxuICAgIGRyYWdTdGFydChldmVudDogYW55KSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgZHJhZ0V2ZW50OiBEcmFnRXZlbnQgPSB7XHJcbiAgICAgICAgICAgIG1lZGl1bTogdGhpcy5tZWRpdW0sXHJcbiAgICAgICAgICAgIG5vZGU6IHRoaXMuZWwubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcclxuICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcclxuICAgICAgICAgICAgb2Zmc2V0OiB7XHJcbiAgICAgICAgICAgICAgICB4OiBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0LCBcclxuICAgICAgICAgICAgICAgIHk6IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRyYWdFbmFibGVkKGRyYWdFdmVudCkpIHtcclxuICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSB0aGlzLmRyYWdFZmZlY3Q7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0lFKCkpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwibWFrZUl0VGlja1wiLFwidHJ1ZVwiKTsvLyB0aGlzIGlzIG5lZWRlZCBqdXN0IHRvIG1ha2UgZHJhZy9kcm9wIGV2ZW50IHRyaWdnZXIuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInNvdXJjZVwiLCBkcmFnRXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZ1N0YXJ0LmVtaXQoZHJhZ0V2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzSUUoKSB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBuYXZpZ2F0b3IudXNlckFnZW50LnNlYXJjaCgvKD86RWRnZXxNU0lFfFRyaWRlbnRcXC8uKjsgcnY6KS8pO1xyXG4gICAgICAgIGxldCBpc0lFID0gZmFsc2U7XHJcbiAgICBcclxuICAgICAgICBpZiAobWF0Y2ggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGlzSUUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNJRTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pIFxyXG4gICAgZHJhZyhldmVudDogYW55KSB7XHJcbiAgICAgICAgY29uc3QgZHJhZ0V2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwic291cmNlXCIpO1xyXG5cclxuICAgICAgICBkcmFnRXZlbnQuY2xpZW50WCA9IGV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgZHJhZ0V2ZW50LmNsaWVudFkgPSBldmVudC5jbGllbnRZO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmRyYWdFbmFibGVkKGRyYWdFdmVudCkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWcuZW1pdChkcmFnRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ2VuZCcsIFsnJGV2ZW50J10pIFxyXG4gICAgZHJhZ0VuZChldmVudDogYW55KSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgZHJhZ0V2ZW50OiBEcmFnRXZlbnQgPSB0aGlzLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwic291cmNlXCIpOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5vbkRyYWdFbmQuZW1pdChkcmFnRXZlbnQpO1xyXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZy1vdmVyXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==