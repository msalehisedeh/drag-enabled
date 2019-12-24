import * as tslib_1 from "tslib";
/*
 * The main purpose for this object is to fix the short coming of drag event dataTransfer object.
 * It accepts only String values. However, if there is a need to pass an object, this singletoncan
 * come to the resecue.
 */
import { Injectable } from '@angular/core';
let DataTransfer = class DataTransfer {
    constructor() {
        this.data = {};
    }
    setData(name, value) {
        this.data[name] = value;
    }
    getData(name) {
        return this.data[name];
    }
};
DataTransfer = tslib_1.__decorate([
    Injectable()
], DataTransfer);
export { DataTransfer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXRyYW5zZmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2RyYWctZW5hYmxlZC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJhZy1lbmFibGVkL2RhdGF0cmFuc2Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQVcsTUFBTSxlQUFlLENBQUM7QUFHcEQsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUlyQjtRQUZRLFNBQUksR0FBUSxFQUFFLENBQUM7SUFFUixDQUFDO0lBRWhCLE9BQU8sQ0FBQyxJQUFZLEVBQUUsS0FBVTtRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsT0FBTyxDQUFDLElBQVk7UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FFSixDQUFBO0FBZFksWUFBWTtJQUR4QixVQUFVLEVBQUU7R0FDQSxZQUFZLENBY3hCO1NBZFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFRoZSBtYWluIHB1cnBvc2UgZm9yIHRoaXMgb2JqZWN0IGlzIHRvIGZpeCB0aGUgc2hvcnQgY29taW5nIG9mIGRyYWcgZXZlbnQgZGF0YVRyYW5zZmVyIG9iamVjdC5cclxuICogSXQgYWNjZXB0cyBvbmx5IFN0cmluZyB2YWx1ZXMuIEhvd2V2ZXIsIGlmIHRoZXJlIGlzIGEgbmVlZCB0byBwYXNzIGFuIG9iamVjdCwgdGhpcyBzaW5nbGV0b25jYW4gXHJcbiAqIGNvbWUgdG8gdGhlIHJlc2VjdWUuIFxyXG4gKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0ICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0YVRyYW5zZmVyIHtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBkYXRhOiBhbnkgPSB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgc2V0RGF0YShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpe1xyXG4gICAgICAgIHRoaXMuZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGEobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtuYW1lXTtcclxuICAgIH1cclxuICAgICAgICAgICAgXHJcbn0iXX0=