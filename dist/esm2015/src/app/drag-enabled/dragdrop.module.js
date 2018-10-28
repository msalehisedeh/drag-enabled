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
export class DragDropModule {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2Ryb3AubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHJhZy1lbmFibGVkLyIsInNvdXJjZXMiOlsic3JjL2FwcC9kcmFnLWVuYWJsZWQvZHJhZ2Ryb3AubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQXdCakQsTUFBTTs7O1lBdEJMLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1YsWUFBWTtpQkFDVjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2YsYUFBYTtvQkFDVix1QkFBdUI7b0JBQzFCLGFBQWE7aUJBQ1g7Z0JBQ0QsT0FBTyxFQUFFO29CQUNWLGFBQWE7b0JBQ2IsdUJBQXVCO29CQUN2QixhQUFhO2lCQUNYO2dCQUNELGVBQWUsRUFBRSxFQUNoQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBEYXRhVHJhbnNmZXIgfSBmcm9tICcuL2RhdGF0cmFuc2Zlcic7XHJcbmltcG9ydCB7IERyYWdEaXJlY3RpdmUgfSBmcm9tICcuL2RyYWcuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRHJhZ0luRG9jdW1lbnREaXJlY3RpdmUgfSBmcm9tICcuL2RyYWctb25seS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBEcm9wRGlyZWN0aXZlIH0gZnJvbSAnLi9kcm9wLmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuXHRDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG5cdERyYWdEaXJlY3RpdmUsXHJcbiAgICBEcmFnSW5Eb2N1bWVudERpcmVjdGl2ZSxcclxuXHREcm9wRGlyZWN0aXZlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcblx0RHJhZ0RpcmVjdGl2ZSxcclxuXHREcmFnSW5Eb2N1bWVudERpcmVjdGl2ZSxcclxuXHREcm9wRGlyZWN0aXZlXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgRGF0YVRyYW5zZmVyXHJcbiAgXSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmFnRHJvcE1vZHVsZSB7fVxyXG4iXX0=