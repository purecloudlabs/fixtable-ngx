import {Component, Input, OnInit, ContentChildren, QueryList} from '@angular/core';
import {ColumnHeaderComponent} from '../column-header/column-header.component';
import * as _ from 'lodash';
import { FixtableColumnDirective } from '../fixtable-column.directive';



export interface ColumnDef {
  property: string;
  label?: string;
  width?: number;
  sortable?: boolean;
  sortCompareMethod?: (a, b) => number;
  hideLabel?: boolean;
  cellClass?: string;
  component?: string;
}

export interface FixtableOptions {
  data: any[]; // For now, pass in the data array. This is different than the original signature in fixtable-angular
               // but makes more sense with the Angular2 programming model
  columns: ColumnDef[];
  tableClass?: string;
  loading: string;
}


@Component({
  selector: 'fixtable-grid',
  template: `
  <div *ngIf="externalFilter">
    <input ngModel="externalFilter" />
  </div>
  <table>
    <th *ngFor="let columnDef of columns">
      <fixtable-column-header [SortByProperty]="SortByProperty" [columnDef]="columnDef"></fixtable-column-header>
    </th>
    <tr *ngFor="let record of data">
      <td *ngFor="let columnDef of columns">
        <div>{{record[columnDef.key]}}</div>
      </td>
    </tr>
  </table>
`,
  styles: []
})
export class GridComponent implements OnInit {

  // Options params
  data;
  columns;
  externalFilter;
  _columnTemplates;

  @Input() options: FixtableOptions;

  @ContentChildren(FixtableColumnDirective)
  set columnTemplates(val: QueryList<FixtableColumnDirective>) {
    this._columnTemplates = val;
  }

  get columTemplates(): QueryList<FixtableColumnDirective> {
    return this._columnTemplates;
  }

  constructor() {
  }

  private ascending = true;

  SortByProperty = ((property: string) => {
    const defaultSortCompareMethod = (a, b) => a[property] > b[property];

    // Switch to a custom comparator later
    const sortCompareMethod = defaultSortCompareMethod;

    if (this.ascending) {
      this.data.sort(sortCompareMethod);
    } else {
      this.data.sort((a, b) => !sortCompareMethod(a, b));
    }
    this.ascending = !this.ascending;
  });

  ngOnInit() {
    this.data = this.options.data;
    this.columns = this.options.columns;
    this.externalFilter = this.options.columns;
  }

}
