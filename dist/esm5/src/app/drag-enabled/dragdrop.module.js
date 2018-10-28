/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTransfer } from './datatransfer';
import { DragDirective } from './drag.directive';
import { DragInDocumentDirective } from './drag-only.directive';
import { DropDirective } from './drop.directive';
var DragDropModule = /** @class */ (function () {
    function DragDropModule() {
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
                        DataTransfer
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                },] }
    ];
    return DragDropModule;
}());
export { DragDropModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2Ryb3AubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHJhZy1lbmFibGVkLyIsInNvdXJjZXMiOlsic3JjL2FwcC9kcmFnLWVuYWJsZWQvZHJhZ2Ryb3AubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Z0JBRWhELFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1YsWUFBWTtxQkFDVjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2YsYUFBYTt3QkFDVix1QkFBdUI7d0JBQzFCLGFBQWE7cUJBQ1g7b0JBQ0QsT0FBTyxFQUFFO3dCQUNWLGFBQWE7d0JBQ2IsdUJBQXVCO3dCQUN2QixhQUFhO3FCQUNYO29CQUNELGVBQWUsRUFBRSxFQUNoQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDbEM7O3lCQTVCRDs7U0E4QmEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBEYXRhVHJhbnNmZXIgfSBmcm9tICcuL2RhdGF0cmFuc2Zlcic7XHJcbmltcG9ydCB7IERyYWdEaXJlY3RpdmUgfSBmcm9tICcuL2RyYWcuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRHJhZ0luRG9jdW1lbnREaXJlY3RpdmUgfSBmcm9tICcuL2RyYWctb25seS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBEcm9wRGlyZWN0aXZlIH0gZnJvbSAnLi9kcm9wLmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuXHRDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG5cdERyYWdEaXJlY3RpdmUsXHJcbiAgICBEcmFnSW5Eb2N1bWVudERpcmVjdGl2ZSxcclxuXHREcm9wRGlyZWN0aXZlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcblx0RHJhZ0RpcmVjdGl2ZSxcclxuXHREcmFnSW5Eb2N1bWVudERpcmVjdGl2ZSxcclxuXHREcm9wRGlyZWN0aXZlXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgRGF0YVRyYW5zZmVyXHJcbiAgXSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmFnRHJvcE1vZHVsZSB7fVxyXG4iXX0=