/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class DataTransfer {
    constructor() {
        this.data = {};
    }
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    setData(name, value) {
        this.data[name] = value;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getData(name) {
        return this.data[name];
    }
}
DataTransfer.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DataTransfer.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    DataTransfer.prototype.data;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXRyYW5zZmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2RyYWctZW5hYmxlZC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJhZy1lbmFibGVkL2RhdGF0cmFuc2Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBVyxNQUFNLGVBQWUsQ0FBQztBQUdwRCxNQUFNO0lBSUY7b0JBRm9CLEVBQUU7S0FFTjs7Ozs7O0lBRWhCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO0tBQzNCOzs7OztJQUVELE9BQU8sQ0FBQyxJQUFJO1FBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUI7OztZQWJKLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBUaGUgbWFpbiBwdXJwb3NlIGZvciB0aGlzIG9iamVjdCBpcyB0byBmaXggdGhlIHNob3J0IGNvbWluZyBvZiBkcmFnIGV2ZW50IGRhdGFUcmFuc2ZlciBvYmplY3QuXHJcbiAqIEl0IGFjY2VwdHMgb25seSBTdHJpbmcgdmFsdWVzLiBIb3dldmVyLCBpZiB0aGVyZSBpcyBhIG5lZWQgdG8gcGFzcyBhbiBvYmplY3QsIHRoaXMgc2luZ2xldG9uY2FuIFxyXG4gKiBjb21lIHRvIHRoZSByZXNlY3VlLiBcclxuICovXHJcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGFUcmFuc2ZlciB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgZGF0YTogYW55ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHNldERhdGEobmFtZSwgdmFsdWUpe1xyXG4gICAgICAgIHRoaXMuZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGEobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbbmFtZV07XHJcbiAgICB9XHJcbiAgICAgICAgICAgIFxyXG59Il19