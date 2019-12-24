import * as tslib_1 from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTransfer } from './datatransfer';
import { DragDirective } from './drag.directive';
import { DragInDocumentDirective } from './drag-only.directive';
import { DropDirective } from './drop.directive';
let DragDropModule = class DragDropModule {
};
DragDropModule = tslib_1.__decorate([
    NgModule({
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
    })
], DragDropModule);
export { DragDropModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2Ryb3AubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2RyYWctZW5hYmxlZC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJhZy1lbmFibGVkL2RyYWdkcm9wLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUF3QmpELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7Q0FBRyxDQUFBO0FBQWpCLGNBQWM7SUF0QjFCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNWLFlBQVk7U0FDVjtRQUNELFlBQVksRUFBRTtZQUNmLGFBQWE7WUFDVix1QkFBdUI7WUFDMUIsYUFBYTtTQUNYO1FBQ0QsT0FBTyxFQUFFO1lBQ1YsYUFBYTtZQUNiLHVCQUF1QjtZQUN2QixhQUFhO1NBQ1g7UUFDRCxlQUFlLEVBQUUsRUFDaEI7UUFDRCxTQUFTLEVBQUU7WUFDVCxZQUFZO1NBQ2I7UUFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztLQUNsQyxDQUFDO0dBRVcsY0FBYyxDQUFHO1NBQWpCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgRGF0YVRyYW5zZmVyIH0gZnJvbSAnLi9kYXRhdHJhbnNmZXInO1xyXG5pbXBvcnQgeyBEcmFnRGlyZWN0aXZlIH0gZnJvbSAnLi9kcmFnLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IERyYWdJbkRvY3VtZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9kcmFnLW9ubHkuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRHJvcERpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcC5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcblx0Q29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuXHREcmFnRGlyZWN0aXZlLFxyXG4gICAgRHJhZ0luRG9jdW1lbnREaXJlY3RpdmUsXHJcblx0RHJvcERpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG5cdERyYWdEaXJlY3RpdmUsXHJcblx0RHJhZ0luRG9jdW1lbnREaXJlY3RpdmUsXHJcblx0RHJvcERpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIERhdGFUcmFuc2ZlclxyXG4gIF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BNb2R1bGUge31cclxuIl19