import {Component, Input, OnInit} from '@angular/core';
import {ColumnHeaderComponent} from '../column-header/column-header.component';
import * as _ from 'lodash';

export interface ColumnDef {
  key: string;
  header?: string;
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
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.less']
})
export class GridComponent implements OnInit {

  // Options params
  data;
  columns;
  externalFilter;

  @Input() options: FixtableOptions;

  constructor() {
  }



  private ascending = true;

  SortByKey = ((key: string) => {
    let defaultSortCompareMethod = (a, b) => a[key] > b[key];

    // Switch to a custom comparator later
    let sortCompareMethod = defaultSortCompareMethod;

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
