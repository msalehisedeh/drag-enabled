(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@sedeh/drag-enabled', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.sedeh = global.sedeh || {}, global.sedeh['drag-enabled'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
        DataTransfer = __decorate([
            core.Injectable()
        ], DataTransfer);
        return DataTransfer;
    }());

    var DropDirective = /** @class */ (function () {
        function DropDirective(dataTransfer, el) {
            this.dataTransfer = dataTransfer;
            this.el = el;
            this.dropEffect = "move";
            this.dropEnabled = function (event) { return true; };
            this.onDragEnter = new core.EventEmitter();
            this.onDragLeave = new core.EventEmitter();
            this.onDrop = new core.EventEmitter();
            this.onDragOver = new core.EventEmitter();
        }
        DropDirective.prototype.createDropEvent = function (event) {
            return {
                source: this.dataTransfer.getData("source"),
                destination: {
                    medium: this.medium,
                    node: this.el.nativeElement,
                    clientX: event.clientX,
                    clientY: event.clientY
                }
            };
        };
        DropDirective.prototype.drop = function (event) {
            event.preventDefault();
            var dropEvent = this.createDropEvent(event);
            this.el.nativeElement.classList.remove("drag-over");
            if (this.dropEnabled(dropEvent)) {
                this.onDrop.emit(dropEvent);
            }
        };
        DropDirective.prototype.dragEnter = function (event) {
            event.preventDefault();
            var dropEvent = this.createDropEvent(event);
            if (this.dropEnabled(dropEvent)) {
                event.dataTransfer.dropEffect = this.dropEffect;
                this.el.nativeElement.classList.add("drag-over");
                this.onDragEnter.emit(dropEvent);
            }
            else {
                this.el.nativeElement.classList.remove("drag-over");
            }
        };
        DropDirective.prototype.dragLeave = function (event) {
            event.preventDefault();
            this.el.nativeElement.classList.remove("drag-over");
            this.onDragLeave.emit(event);
        };
        DropDirective.prototype.dragOver = function (event) {
            var dropEvent = this.createDropEvent(event);
            if (this.dropEnabled(dropEvent)) {
                event.preventDefault();
                this.el.nativeElement.classList.add("drag-over");
                this.onDragOver.emit(dropEvent);
            }
            else {
                this.el.nativeElement.classList.remove("drag-over");
            }
        };
        DropDirective.ctorParameters = function () { return [
            { type: DataTransfer },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input('medium')
        ], DropDirective.prototype, "medium", void 0);
        __decorate([
            core.Input()
        ], DropDirective.prototype, "dropEffect", void 0);
        __decorate([
            core.Input("dropEnabled")
        ], DropDirective.prototype, "dropEnabled", void 0);
        __decorate([
            core.Output()
        ], DropDirective.prototype, "onDragEnter", void 0);
        __decorate([
            core.Output()
        ], DropDirective.prototype, "onDragLeave", void 0);
        __decorate([
            core.Output()
        ], DropDirective.prototype, "onDrop", void 0);
        __decorate([
            core.Output()
        ], DropDirective.prototype, "onDragOver", void 0);
        __decorate([
            core.HostListener('drop', ['$event'])
        ], DropDirective.prototype, "drop", null);
        __decorate([
            core.HostListener('dragenter', ['$event'])
        ], DropDirective.prototype, "dragEnter", null);
        __decorate([
            core.HostListener('dragleave', ['$event'])
        ], DropDirective.prototype, "dragLeave", null);
        __decorate([
            core.HostListener('dragover', ['$event'])
        ], DropDirective.prototype, "dragOver", null);
        DropDirective = __decorate([
            core.Directive({
                selector: '[dropEnabled]'
            })
        ], DropDirective);
        return DropDirective;
    }());

    var DragDirective = /** @class */ (function () {
        function DragDirective(dataTransfer, el) {
            this.dataTransfer = dataTransfer;
            this.el = el;
            this.dragEffect = "move";
            this.dragEnabled = function (event) { return true; };
            this.onDragStart = new core.EventEmitter();
            this.onDragEnd = new core.EventEmitter();
            this.onDrag = new core.EventEmitter();
        }
        DragDirective.prototype.dragStart = function (event) {
            event.stopPropagation();
            var rect = this.el.nativeElement.getBoundingClientRect();
            var dragEvent = {
                medium: this.medium,
                node: this.el.nativeElement,
                clientX: event.clientX,
                clientY: event.clientY,
                offset: {
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top
                }
            };
            if (this.dragEnabled(dragEvent)) {
                event.dataTransfer.effectAllowed = this.dragEffect;
                if (!this.isIE()) {
                    event.dataTransfer.setData("makeItTick", "true"); // this is needed just to make drag/drop event trigger.
                }
                this.dataTransfer.setData("source", dragEvent);
                this.onDragStart.emit(dragEvent);
            }
        };
        DragDirective.prototype.isIE = function () {
            var match = navigator.userAgent.search(/(?:Edge|MSIE|Trident\/.*; rv:)/);
            var isIE = false;
            if (match !== -1) {
                isIE = true;
            }
            return isIE;
        };
        DragDirective.prototype.drag = function (event) {
            var dragEvent = this.dataTransfer.getData("source");
            dragEvent.clientX = event.clientX;
            dragEvent.clientY = event.clientY;
            if (this.dragEnabled(dragEvent)) {
                this.onDrag.emit(dragEvent);
            }
        };
        DragDirective.prototype.dragEnd = function (event) {
            event.stopPropagation();
            var dragEvent = this.dataTransfer.getData("source");
            this.onDragEnd.emit(dragEvent);
            this.el.nativeElement.classList.remove("drag-over");
        };
        DragDirective.ctorParameters = function () { return [
            { type: DataTransfer },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input("medium")
        ], DragDirective.prototype, "medium", void 0);
        __decorate([
            core.Input("dragEffect")
        ], DragDirective.prototype, "dragEffect", void 0);
        __decorate([
            core.Input("dragEnabled")
        ], DragDirective.prototype, "dragEnabled", void 0);
        __decorate([
            core.Output()
        ], DragDirective.prototype, "onDragStart", void 0);
        __decorate([
            core.Output()
        ], DragDirective.prototype, "onDragEnd", void 0);
        __decorate([
            core.Output()
        ], DragDirective.prototype, "onDrag", void 0);
        __decorate([
            core.HostListener('dragstart', ['$event'])
        ], DragDirective.prototype, "dragStart", null);
        __decorate([
            core.HostListener('dragover', ['$event'])
        ], DragDirective.prototype, "drag", null);
        __decorate([
            core.HostListener('dragend', ['$event'])
        ], DragDirective.prototype, "dragEnd", null);
        DragDirective = __decorate([
            core.Directive({
                selector: '[dragEnabled]',
                host: {
                    '[draggable]': 'true'
                }
            })
        ], DragDirective);
        return DragDirective;
    }());

    var DragInDocumentDirective = /** @class */ (function () {
        function DragInDocumentDirective(dataTransfer, el) {
            this.dataTransfer = dataTransfer;
            this.el = el;
            this.dragEffect = "move";
            this.dragInDocument = function (event) { return true; };
            this.onDragStart = new core.EventEmitter();
            this.onDragEnd = new core.EventEmitter();
            this.onDrag = new core.EventEmitter();
        }
        DragInDocumentDirective.prototype.dragStart = function (event) {
            event.stopPropagation();
            var rect = this.el.nativeElement.getBoundingClientRect();
            var dragEvent = {
                medium: this.medium,
                node: this.el.nativeElement,
                clientX: event.clientX,
                clientY: event.clientY,
                offset: {
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top
                }
            };
            if (this.dragInDocument(dragEvent)) {
                event.dataTransfer.effectAllowed = this.dragEffect;
                if (!this.isIE()) {
                    event.dataTransfer.setData("makeItTick", "true"); // this is needed just to make drag/drop event trigger.
                }
                this.dataTransfer.setData("source", dragEvent);
                this.onDragStart.emit(dragEvent);
            }
        };
        DragInDocumentDirective.prototype.isIE = function () {
            var match = navigator.userAgent.search(/(?:Edge|MSIE|Trident\/.*; rv:)/);
            var isIE = false;
            if (match !== -1) {
                isIE = true;
            }
            return isIE;
        };
        DragInDocumentDirective.prototype.drag = function (event) {
            var dragEvent = this.dataTransfer.getData("source");
            dragEvent.clientX = event.clientX;
            dragEvent.clientY = event.clientY;
            if (this.dragInDocument(dragEvent)) {
                this.onDrag.emit(dragEvent);
            }
        };
        DragInDocumentDirective.prototype.dragEnd = function (event) {
            event.stopPropagation();
            var dragEvent = this.dataTransfer.getData("source");
            this.onDragEnd.emit(dragEvent);
            this.el.nativeElement.classList.remove("drag-over");
        };
        DragInDocumentDirective.ctorParameters = function () { return [
            { type: DataTransfer },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input("medium")
        ], DragInDocumentDirective.prototype, "medium", void 0);
        __decorate([
            core.Input("dragEffect")
        ], DragInDocumentDirective.prototype, "dragEffect", void 0);
        __decorate([
            core.Input("dragInDocument")
        ], DragInDocumentDirective.prototype, "dragInDocument", void 0);
        __decorate([
            core.Output()
        ], DragInDocumentDirective.prototype, "onDragStart", void 0);
        __decorate([
            core.Output()
        ], DragInDocumentDirective.prototype, "onDragEnd", void 0);
        __decorate([
            core.Output()
        ], DragInDocumentDirective.prototype, "onDrag", void 0);
        __decorate([
            core.HostListener('dragstart', ['$event'])
        ], DragInDocumentDirective.prototype, "dragStart", null);
        __decorate([
            core.HostListener('document:dragover', ['$event'])
        ], DragInDocumentDirective.prototype, "drag", null);
        __decorate([
            core.HostListener('document:dragend', ['$event'])
        ], DragInDocumentDirective.prototype, "dragEnd", null);
        DragInDocumentDirective = __decorate([
            core.Directive({
                selector: '[dragInDocument]',
                host: {
                    '[draggable]': 'true'
                }
            })
        ], DragInDocumentDirective);
        return DragInDocumentDirective;
    }());

    var DragDropModule = /** @class */ (function () {
        function DragDropModule() {
        }
        DragDropModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule
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
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
            })
        ], DragDropModule);
        return DragDropModule;
    }());

    exports.DragDirective = DragDirective;
    exports.DragDropModule = DragDropModule;
    exports.DragInDocumentDirective = DragInDocumentDirective;
    exports.DropDirective = DropDirective;
    exports.ɵa = DataTransfer;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sedeh-drag-enabled.umd.js.map
