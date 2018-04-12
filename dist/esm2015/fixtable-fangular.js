import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

/**
 * @record
 */

class GridComponent {
    constructor() {
        this.ascending = true;
        this.SortByKey = ((key) => {
            let /** @type {?} */ defaultSortCompareMethod = (a, b) => a[key] > b[key];
            // Switch to a custom comparator later
            let /** @type {?} */ sortCompareMethod = defaultSortCompareMethod;
            if (this.ascending) {
                this.data.sort(sortCompareMethod);
            }
            else {
                this.data.sort((a, b) => !sortCompareMethod(a, b));
            }
            this.ascending = !this.ascending;
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.data = this.options.data;
        this.columns = this.options.columns;
        this.externalFilter = this.options.columns;
    }
}
GridComponent.decorators = [
    { type: Component, args: [{
                selector: 'fixtable-grid',
                template: `<div *ngIf="externalFilter">
  <input ngModel="externalFilter" />
</div>
<table>
  <th *ngFor="let columnDef of columns">
    <fixtable-column-header [SortByKey]="SortByKey" [columnDef]="columnDef"></fixtable-column-header>
  </th>
  <tr *ngFor="let record of data">
    <td *ngFor="let columnDef of columns">
      <div>{{record[columnDef.key]}}</div>
    </td>
  </tr>
</table>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
GridComponent.ctorParameters = () => [];
GridComponent.propDecorators = {
    "options": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ColumnHeaderComponent {
    constructor() { }
    /**
     * @return {?}
     */
    SortByMyKey() {
        this.SortByKey(this.columnDef.key);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ColumnHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'fixtable-column-header',
                template: `<th *ngIf="!columnDef.sortable">
  {{columnDef.header || columnDef.key}}
</th>
<th *ngIf="columnDef.sortable">
  <div (click)="SortByMyKey()">
    {{columnDef.header || columnDef.key}}
  </div>
</th>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
ColumnHeaderComponent.ctorParameters = () => [];
ColumnHeaderComponent.propDecorators = {
    "columnDef": [{ type: Input },],
    "SortByKey": [{ type: Input },],
    "sortBy": [{ type: Input },],
    "ascending": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FixtableModule {
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { FixtableModule, ColumnHeaderComponent as ɵb, GridComponent as ɵa };
//# sourceMappingURL=fixtable-fangular.js.map
