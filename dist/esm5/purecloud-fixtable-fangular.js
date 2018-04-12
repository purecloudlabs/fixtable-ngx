import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    { type: Component, args: [{
                selector: 'fixtable-grid',
                template: "<div *ngIf=\"externalFilter\">\n  <input ngModel=\"externalFilter\" />\n</div>\n<table>\n  <th *ngFor=\"let columnDef of columns\">\n    <fixtable-column-header [SortByKey]=\"SortByKey\" [columnDef]=\"columnDef\"></fixtable-column-header>\n  </th>\n  <tr *ngFor=\"let record of data\">\n    <td *ngFor=\"let columnDef of columns\">\n      <div>{{record[columnDef.key]}}</div>\n    </td>\n  </tr>\n</table>\n",
                styles: [""]
            },] },
];
GridComponent.ctorParameters = function () { return []; };
GridComponent.propDecorators = {
    "options": [{ type: Input },],
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
    { type: Component, args: [{
                selector: 'fixtable-column-header',
                template: "<th *ngIf=\"!columnDef.sortable\">\n  {{columnDef.header || columnDef.key}}\n</th>\n<th *ngIf=\"columnDef.sortable\">\n  <div (click)=\"SortByMyKey()\">\n    {{columnDef.header || columnDef.key}}\n  </div>\n</th>\n",
                styles: [""]
            },] },
];
ColumnHeaderComponent.ctorParameters = function () { return []; };
ColumnHeaderComponent.propDecorators = {
    "columnDef": [{ type: Input },],
    "SortByKey": [{ type: Input },],
    "sortBy": [{ type: Input },],
    "ascending": [{ type: Input },],
};
var FixtableModule = /** @class */ (function () {
    function FixtableModule() {
    }
    return FixtableModule;
}());
FixtableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
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

export { FixtableModule, ColumnHeaderComponent as ɵb, GridComponent as ɵa };
//# sourceMappingURL=purecloud-fixtable-fangular.js.map
