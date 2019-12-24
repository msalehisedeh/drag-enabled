import * as tslib_1 from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTransfer } from './datatransfer';
import { DragDirective } from './drag.directive';
import { DragInDocumentDirective } from './drag-only.directive';
import { DropDirective } from './drop.directive';
var DragDropModule = /** @class */ (function () {
    function DragDropModule() {
    }
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
    return DragDropModule;
}());
export { DragDropModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2Ryb3AubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2RyYWctZW5hYmxlZC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJhZy1lbmFibGVkL2RyYWdkcm9wLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUF3QmpEO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixjQUFjO1FBdEIxQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1YsWUFBWTthQUNWO1lBQ0QsWUFBWSxFQUFFO2dCQUNmLGFBQWE7Z0JBQ1YsdUJBQXVCO2dCQUMxQixhQUFhO2FBQ1g7WUFDRCxPQUFPLEVBQUU7Z0JBQ1YsYUFBYTtnQkFDYix1QkFBdUI7Z0JBQ3ZCLGFBQWE7YUFDWDtZQUNELGVBQWUsRUFBRSxFQUNoQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxZQUFZO2FBQ2I7WUFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNsQyxDQUFDO09BRVcsY0FBYyxDQUFHO0lBQUQscUJBQUM7Q0FBQSxBQUE5QixJQUE4QjtTQUFqQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IERhdGFUcmFuc2ZlciB9IGZyb20gJy4vZGF0YXRyYW5zZmVyJztcclxuaW1wb3J0IHsgRHJhZ0RpcmVjdGl2ZSB9IGZyb20gJy4vZHJhZy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBEcmFnSW5Eb2N1bWVudERpcmVjdGl2ZSB9IGZyb20gJy4vZHJhZy1vbmx5LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IERyb3BEaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3AuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG5cdENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcblx0RHJhZ0RpcmVjdGl2ZSxcclxuICAgIERyYWdJbkRvY3VtZW50RGlyZWN0aXZlLFxyXG5cdERyb3BEaXJlY3RpdmVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuXHREcmFnRGlyZWN0aXZlLFxyXG5cdERyYWdJbkRvY3VtZW50RGlyZWN0aXZlLFxyXG5cdERyb3BEaXJlY3RpdmVcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBEYXRhVHJhbnNmZXJcclxuICBdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERyYWdEcm9wTW9kdWxlIHt9XHJcbiJdfQ==