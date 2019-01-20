/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var DataTransfer = /** @class */ (function () {
    function DataTransfer() {
        this.data = {};
    }
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    DataTransfer.prototype.setData = /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        this.data[name] = value;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    DataTransfer.prototype.getData = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.data[name];
    };
    DataTransfer.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DataTransfer.ctorParameters = function () { return []; };
    return DataTransfer;
}());
export { DataTransfer };
if (false) {
    /** @type {?} */
    DataTransfer.prototype.data;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXRyYW5zZmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2RyYWctZW5hYmxlZC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJhZy1lbmFibGVkL2RhdGF0cmFuc2Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBVyxNQUFNLGVBQWUsQ0FBQzs7SUFPaEQ7b0JBRm9CLEVBQUU7S0FFTjs7Ozs7O0lBRWhCLDhCQUFPOzs7OztJQUFQLFVBQVEsSUFBSSxFQUFFLEtBQUs7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztLQUMzQjs7Ozs7SUFFRCw4QkFBTzs7OztJQUFQLFVBQVEsSUFBSTtRQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFCOztnQkFiSixVQUFVOzs7O3VCQVBYOztTQVFhLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBUaGUgbWFpbiBwdXJwb3NlIGZvciB0aGlzIG9iamVjdCBpcyB0byBmaXggdGhlIHNob3J0IGNvbWluZyBvZiBkcmFnIGV2ZW50IGRhdGFUcmFuc2ZlciBvYmplY3QuXHJcbiAqIEl0IGFjY2VwdHMgb25seSBTdHJpbmcgdmFsdWVzLiBIb3dldmVyLCBpZiB0aGVyZSBpcyBhIG5lZWQgdG8gcGFzcyBhbiBvYmplY3QsIHRoaXMgc2luZ2xldG9uY2FuIFxyXG4gKiBjb21lIHRvIHRoZSByZXNlY3VlLiBcclxuICovXHJcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGFUcmFuc2ZlciB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgZGF0YTogYW55ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHNldERhdGEobmFtZSwgdmFsdWUpe1xyXG4gICAgICAgIHRoaXMuZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGEobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbbmFtZV07XHJcbiAgICB9XHJcbiAgICAgICAgICAgIFxyXG59Il19