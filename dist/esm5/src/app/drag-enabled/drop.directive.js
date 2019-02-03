/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { DataTransfer } from './datatransfer';
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
export { DropDirective };
if (false) {
    /** @type {?} */
    DropDirective.prototype.medium;
    /** @type {?} */
    DropDirective.prototype.dropEffect;
    /** @type {?} */
    DropDirective.prototype.dropEnabled;
    /** @type {?} */
    DropDirective.prototype.onDragEnter;
    /** @type {?} */
    DropDirective.prototype.onDragLeave;
    /** @type {?} */
    DropDirective.prototype.onDrop;
    /** @type {?} */
    DropDirective.prototype.onDragOver;
    /** @type {?} */
    DropDirective.prototype.dataTransfer;
    /** @type {?} */
    DropDirective.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvZHJhZy1lbmFibGVkLyIsInNvdXJjZXMiOlsic3JjL2FwcC9kcmFnLWVuYWJsZWQvZHJvcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDZixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBOEIxQyx1QkFDWSxjQUNBO1FBREEsaUJBQVksR0FBWixZQUFZO1FBQ1osT0FBRSxHQUFGLEVBQUU7MEJBbkJELE1BQU07MkJBR0wsVUFBQyxLQUFnQixJQUFLLE9BQUEsSUFBSSxFQUFKLENBQUk7MkJBR1AsSUFBSSxZQUFZLEVBQUU7MkJBR2xCLElBQUksWUFBWSxFQUFFO3NCQUd2QixJQUFJLFlBQVksRUFBRTswQkFHZCxJQUFJLFlBQVksRUFBRTtLQUs5Qzs7Ozs7SUFFQyx1Q0FBZTs7OztjQUFDLEtBQVU7UUFDakMsTUFBTSxDQUFDO1lBQ0csTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUMzQyxXQUFXLEVBQUU7Z0JBQ1QsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO2dCQUMzQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ3RCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTzthQUN6QjtTQUNWLENBQUM7Ozs7OztJQUlBLDRCQUFJOzs7O0lBREosVUFDSyxLQUFVO1FBQ1gsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDOztRQUN2QixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFcEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDL0I7S0FDSjs7Ozs7SUFHRCxpQ0FBUzs7OztJQURULFVBQ1UsS0FBVTtRQUNoQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7O1FBQ3ZCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsS0FBSyxDQUFDLFlBQVksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUVoRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZEO0tBQ0o7Ozs7O0lBR0QsaUNBQVM7Ozs7SUFEVCxVQUNVLEtBQVU7UUFDaEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEM7Ozs7O0lBR0QsZ0NBQVE7Ozs7SUFEUixVQUNTLEtBQVU7O1FBQ2YsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNuQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN2RDtLQUNKOztnQkF6RkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO2lCQUM1Qjs7OztnQkFOUSxZQUFZO2dCQVBqQixVQUFVOzs7eUJBZ0JULEtBQUssU0FBQyxRQUFROzZCQUdkLEtBQUs7OEJBR0wsS0FBSyxTQUFDLGFBQWE7OEJBR25CLE1BQU07OEJBR04sTUFBTTt5QkFHTixNQUFNOzZCQUdOLE1BQU07dUJBb0JOLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7NEJBWS9CLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7NEJBZXBDLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7MkJBUXBDLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7O3dCQTNGeEM7O1NBZ0JhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEhvc3RMaXN0ZW5lcixcclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEYXRhVHJhbnNmZXIgfSBmcm9tICcuL2RhdGF0cmFuc2Zlcic7XHJcbmltcG9ydCB7IERyb3BFdmVudCB9IGZyb20gJy4vZHJhZy1kcm9wLmludGVyZmFjZXMnO1xyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbZHJvcEVuYWJsZWRdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJvcERpcmVjdGl2ZSB7XHJcbiAgICBcclxuICAgIEBJbnB1dCgnbWVkaXVtJylcclxuICAgIG1lZGl1bTogYW55O1xyXG4gICAgICAgIFxyXG4gICAgQElucHV0KClcclxuICAgIGRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcclxuICAgICAgICBcclxuICAgIEBJbnB1dChcImRyb3BFbmFibGVkXCIpXHJcbiAgICBkcm9wRW5hYmxlZCA9IChldmVudDogRHJvcEV2ZW50KSA9PiB0cnVlO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25EcmFnRW50ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uRHJhZ0xlYXZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyb3A6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uRHJhZ092ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZGF0YVRyYW5zZmVyOiBEYXRhVHJhbnNmZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZlxyXG4gICAgKSB7fVxyXG4gICAgXHJcblx0cHJpdmF0ZSBjcmVhdGVEcm9wRXZlbnQoZXZlbnQ6IGFueSk6IERyb3BFdmVudCB7XHJcblx0XHRyZXR1cm4ge1xyXG4gICAgICAgICAgICBzb3VyY2U6IHRoaXMuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJzb3VyY2VcIiksXHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBtZWRpdW06IHRoaXMubWVkaXVtLFxyXG4gICAgICAgICAgICAgICAgbm9kZTogdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcclxuICAgICAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFlcclxuICAgICAgICAgICAgfVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXHJcbiAgICBkcm9wKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGRyb3BFdmVudCA9IHRoaXMuY3JlYXRlRHJvcEV2ZW50KGV2ZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLW92ZXJcIik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRyb3BFbmFibGVkKGRyb3BFdmVudCkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRyb3AuZW1pdChkcm9wRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ2VudGVyJywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnRW50ZXIoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgZHJvcEV2ZW50ID0gdGhpcy5jcmVhdGVEcm9wRXZlbnQoZXZlbnQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kcm9wRW5hYmxlZChkcm9wRXZlbnQpKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gdGhpcy5kcm9wRWZmZWN0O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkcmFnLW92ZXJcIik7XHJcbiAgICAgICAgICAgIHRoaXMub25EcmFnRW50ZXIuZW1pdChkcm9wRXZlbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZy1vdmVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnTGVhdmUoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctb3ZlclwiKTtcclxuICAgICAgICB0aGlzLm9uRHJhZ0xlYXZlLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pIFxyXG4gICAgZHJhZ092ZXIoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGRyb3BFdmVudCA9IHRoaXMuY3JlYXRlRHJvcEV2ZW50KGV2ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZHJvcEVuYWJsZWQoZHJvcEV2ZW50KSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRyYWctb3ZlclwiKTtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWdPdmVyLmVtaXQoZHJvcEV2ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctb3ZlclwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=