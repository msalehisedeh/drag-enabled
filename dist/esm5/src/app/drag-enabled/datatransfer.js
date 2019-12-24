import * as tslib_1 from "tslib";
/*
 * The main purpose for this object is to fix the short coming of drag event dataTransfer object.
 * It accepts only String values. However, if there is a need to pass an object, this singletoncan
 * come to the resecue.
 */
import { Injectable } from '@angular/core';
var DataTransfer = /** @class */ (function () {
    function DataTransfer() {
        this.data = {};
    }
    DataTransfer.prototype.setData = function (name, value) {
        this.data[name] = value;
    };
    DataTransfer.prototype.getData = function (name) {
        return this.data[name];
    };
    DataTransfer = tslib_1.__decorate([
        Injectable()
    ], DataTransfer);
    return DataTransfer;
}());
export { DataTransfer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXRyYW5zZmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2RyYWctZW5hYmxlZC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJhZy1lbmFibGVkL2RhdGF0cmFuc2Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQVcsTUFBTSxlQUFlLENBQUM7QUFHcEQ7SUFJSTtRQUZRLFNBQUksR0FBUSxFQUFFLENBQUM7SUFFUixDQUFDO0lBRWhCLDhCQUFPLEdBQVAsVUFBUSxJQUFZLEVBQUUsS0FBVTtRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsOEJBQU8sR0FBUCxVQUFRLElBQVk7UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFaUSxZQUFZO1FBRHhCLFVBQVUsRUFBRTtPQUNBLFlBQVksQ0FjeEI7SUFBRCxtQkFBQztDQUFBLEFBZEQsSUFjQztTQWRZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBUaGUgbWFpbiBwdXJwb3NlIGZvciB0aGlzIG9iamVjdCBpcyB0byBmaXggdGhlIHNob3J0IGNvbWluZyBvZiBkcmFnIGV2ZW50IGRhdGFUcmFuc2ZlciBvYmplY3QuXHJcbiAqIEl0IGFjY2VwdHMgb25seSBTdHJpbmcgdmFsdWVzLiBIb3dldmVyLCBpZiB0aGVyZSBpcyBhIG5lZWQgdG8gcGFzcyBhbiBvYmplY3QsIHRoaXMgc2luZ2xldG9uY2FuIFxyXG4gKiBjb21lIHRvIHRoZSByZXNlY3VlLiBcclxuICovXHJcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGFUcmFuc2ZlciB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgZGF0YTogYW55ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHNldERhdGEobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KXtcclxuICAgICAgICB0aGlzLmRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbbmFtZV07XHJcbiAgICB9XHJcbiAgICAgICAgICAgIFxyXG59Il19