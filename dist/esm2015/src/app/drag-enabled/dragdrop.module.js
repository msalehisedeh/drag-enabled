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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2Ryb3AubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2RyYWctZW5hYmxlZC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJhZy1lbmFibGVkL2RyYWdkcm9wLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUF3QmpELE1BQU07OztZQXRCTCxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNWLFlBQVk7aUJBQ1Y7Z0JBQ0QsWUFBWSxFQUFFO29CQUNmLGFBQWE7b0JBQ1YsdUJBQXVCO29CQUMxQixhQUFhO2lCQUNYO2dCQUNELE9BQU8sRUFBRTtvQkFDVixhQUFhO29CQUNiLHVCQUF1QjtvQkFDdkIsYUFBYTtpQkFDWDtnQkFDRCxlQUFlLEVBQUUsRUFDaEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgRGF0YVRyYW5zZmVyIH0gZnJvbSAnLi9kYXRhdHJhbnNmZXInO1xyXG5pbXBvcnQgeyBEcmFnRGlyZWN0aXZlIH0gZnJvbSAnLi9kcmFnLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IERyYWdJbkRvY3VtZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9kcmFnLW9ubHkuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRHJvcERpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcC5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcblx0Q29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuXHREcmFnRGlyZWN0aXZlLFxyXG4gICAgRHJhZ0luRG9jdW1lbnREaXJlY3RpdmUsXHJcblx0RHJvcERpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG5cdERyYWdEaXJlY3RpdmUsXHJcblx0RHJhZ0luRG9jdW1lbnREaXJlY3RpdmUsXHJcblx0RHJvcERpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIERhdGFUcmFuc2ZlclxyXG4gIF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BNb2R1bGUge31cclxuIl19