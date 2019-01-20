/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { DataTransfer } from './datatransfer';
export class DropDirective {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvZHJhZy1lbmFibGVkLyIsInNvdXJjZXMiOlsic3JjL2FwcC9kcmFnLWVuYWJsZWQvZHJvcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDZixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPOUMsTUFBTTs7Ozs7SUF1QkYsWUFDWSxjQUNBO1FBREEsaUJBQVksR0FBWixZQUFZO1FBQ1osT0FBRSxHQUFGLEVBQUU7MEJBbkJELE1BQU07MkJBR0wsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJOzJCQUdQLElBQUksWUFBWSxFQUFFOzJCQUdsQixJQUFJLFlBQVksRUFBRTtzQkFHdkIsSUFBSSxZQUFZLEVBQUU7MEJBR2QsSUFBSSxZQUFZLEVBQUU7S0FLOUM7Ozs7O0lBRUMsZUFBZSxDQUFDLEtBQUs7UUFDNUIsTUFBTSxDQUFDO1lBQ0csTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUMzQyxXQUFXLEVBQUU7Z0JBQ1QsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO2dCQUMzQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ3RCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTzthQUN6QjtTQUNWLENBQUM7Ozs7OztJQUlBLElBQUksQ0FBQyxLQUFLO1FBQ04sS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDOztRQUN2QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFcEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDL0I7S0FDSjs7Ozs7SUFHRCxTQUFTLENBQUMsS0FBSztRQUNYLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7UUFDdkIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixLQUFLLENBQUMsWUFBWSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBRWhELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDcEM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdkQ7S0FDSjs7Ozs7SUFHRCxTQUFTLENBQUMsS0FBSztRQUNYLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2hDOzs7OztJQUdELFFBQVEsQ0FBQyxLQUFLOztRQUNWLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbkM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdkQ7S0FDSjs7O1lBekZKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZUFBZTthQUM1Qjs7OztZQU5RLFlBQVk7WUFQakIsVUFBVTs7O3FCQWdCVCxLQUFLLFNBQUMsUUFBUTt5QkFHZCxLQUFLOzBCQUdMLEtBQUssU0FBQyxhQUFhOzBCQUduQixNQUFNOzBCQUdOLE1BQU07cUJBR04sTUFBTTt5QkFHTixNQUFNO21CQW9CTixZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO3dCQVkvQixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO3dCQWVwQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO3VCQVFwQyxZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIERpcmVjdGl2ZSxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBIb3N0TGlzdGVuZXIsXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGF0YVRyYW5zZmVyIH0gZnJvbSAnLi9kYXRhdHJhbnNmZXInO1xyXG5pbXBvcnQgeyBEcm9wRXZlbnQgfSBmcm9tICcuL2RyYWctZHJvcC5pbnRlcmZhY2VzJztcclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2Ryb3BFbmFibGVkXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIERyb3BEaXJlY3RpdmUge1xyXG4gICAgXHJcbiAgICBASW5wdXQoJ21lZGl1bScpXHJcbiAgICBtZWRpdW06IGFueTtcclxuICAgICAgICBcclxuICAgIEBJbnB1dCgpXHJcbiAgICBkcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgICAgICAgXHJcbiAgICBASW5wdXQoXCJkcm9wRW5hYmxlZFwiKVxyXG4gICAgZHJvcEVuYWJsZWQgPSAoZXZlbnQ6IERyb3BFdmVudCkgPT4gdHJ1ZTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9uRHJhZ0VudGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyYWdMZWF2ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25Ecm9wOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvbkRyYWdPdmVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGRhdGFUcmFuc2ZlcjogRGF0YVRyYW5zZmVyLFxyXG4gICAgICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWZcclxuICAgICkge31cclxuICAgIFxyXG5cdHByaXZhdGUgY3JlYXRlRHJvcEV2ZW50KGV2ZW50KTogRHJvcEV2ZW50IHtcclxuXHRcdHJldHVybiB7XHJcbiAgICAgICAgICAgIHNvdXJjZTogdGhpcy5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInNvdXJjZVwiKSxcclxuICAgICAgICAgICAgZGVzdGluYXRpb246IHtcclxuICAgICAgICAgICAgICAgIG1lZGl1bTogdGhpcy5tZWRpdW0sXHJcbiAgICAgICAgICAgICAgICBub2RlOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WVxyXG4gICAgICAgICAgICB9XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcclxuICAgIGRyb3AoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGRyb3BFdmVudCA9IHRoaXMuY3JlYXRlRHJvcEV2ZW50KGV2ZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLW92ZXJcIik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRyb3BFbmFibGVkKGRyb3BFdmVudCkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRyb3AuZW1pdChkcm9wRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ2VudGVyJywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnRW50ZXIoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGRyb3BFdmVudCA9IHRoaXMuY3JlYXRlRHJvcEV2ZW50KGV2ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZHJvcEVuYWJsZWQoZHJvcEV2ZW50KSkge1xyXG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IHRoaXMuZHJvcEVmZmVjdDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHJhZy1vdmVyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZ0VudGVyLmVtaXQoZHJvcEV2ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctb3ZlclwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFsnJGV2ZW50J10pIFxyXG4gICAgZHJhZ0xlYXZlKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZy1vdmVyXCIpO1xyXG4gICAgICAgIHRoaXMub25EcmFnTGVhdmUuZW1pdChldmVudCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSkgXHJcbiAgICBkcmFnT3ZlcihldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGRyb3BFdmVudCA9IHRoaXMuY3JlYXRlRHJvcEV2ZW50KGV2ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZHJvcEVuYWJsZWQoZHJvcEV2ZW50KSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRyYWctb3ZlclwiKTtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWdPdmVyLmVtaXQoZHJvcEV2ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctb3ZlclwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=