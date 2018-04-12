(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('@purecloud/fixtable-fangular', ['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.purecloud = global.purecloud || {}, global.purecloud['fixtable-fangular'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var GridComponent = /** @class */ (function () {
    function GridComponent() {
        var _this = this;
        this.ascending = true;
        this.SortByKey = (function (key) {
            var defaultSortCompareMethod = function (a, b) { return a[key] > b[key]; };
            var sortCompareMethod = defaultSortCompareMethod;
            if (_this.ascending) {
                _this.data.sort(sortCompareMethod);
            }
            else {
                _this.data.sort(function (a, b) { return !sortCompareMethod(a, b); });
            }
            _this.ascending = !_this.ascending;
        });
    }
    GridComponent.prototype.ngOnInit = function () {
        this.data = this.options.data;
        this.columns = this.options.columns;
        this.externalFilter = this.options.columns;
    };
    return GridComponent;
}());
GridComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'fixtable-grid',
                template: "<div *ngIf=\"externalFilter\">\n  <input ngModel=\"externalFilter\" />\n</div>\n<table>\n  <th *ngFor=\"let columnDef of columns\">\n    <fixtable-column-header [SortByKey]=\"SortByKey\" [columnDef]=\"columnDef\"></fixtable-column-header>\n  </th>\n  <tr *ngFor=\"let record of data\">\n    <td *ngFor=\"let columnDef of columns\">\n      <div>{{record[columnDef.key]}}</div>\n    </td>\n  </tr>\n</table>\n",
                styles: [""]
            },] },
];
GridComponent.ctorParameters = function () { return []; };
GridComponent.propDecorators = {
    "options": [{ type: core.Input },],
};
var ColumnHeaderComponent = /** @class */ (function () {
    function ColumnHeaderComponent() {
    }
    ColumnHeaderComponent.prototype.SortByMyKey = function () {
        this.SortByKey(this.columnDef.key);
    };
    ColumnHeaderComponent.prototype.ngOnInit = function () {
    };
    return ColumnHeaderComponent;
}());
ColumnHeaderComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'fixtable-column-header',
                template: "<th *ngIf=\"!columnDef.sortable\">\n  {{columnDef.header || columnDef.key}}\n</th>\n<th *ngIf=\"columnDef.sortable\">\n  <div (click)=\"SortByMyKey()\">\n    {{columnDef.header || columnDef.key}}\n  </div>\n</th>\n",
                styles: [""]
            },] },
];
ColumnHeaderComponent.ctorParameters = function () { return []; };
ColumnHeaderComponent.propDecorators = {
    "columnDef": [{ type: core.Input },],
    "SortByKey": [{ type: core.Input },],
    "sortBy": [{ type: core.Input },],
    "ascending": [{ type: core.Input },],
};
var FixtableModule = /** @class */ (function () {
    function FixtableModule() {
    }
    return FixtableModule;
}());
FixtableModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    GridComponent,
                    ColumnHeaderComponent
                ],
                exports: [
                    GridComponent
                ]
            },] },
];

exports.FixtableModule = FixtableModule;
exports.ɵb = ColumnHeaderComponent;
exports.ɵa = GridComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=purecloud-fixtable-fangular.umd.js.map
