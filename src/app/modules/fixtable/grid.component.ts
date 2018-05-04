/* global Fixtable */

import {Component, Input, OnInit, ContentChildren, QueryList, AfterViewChecked, AfterViewInit} from '@angular/core';
import {ColumnHeaderComponent} from './column-header.component';
import * as _ from 'lodash';
import { FixtableColumnDirective } from './fixtable-column.directive';
import { ElementRef } from '@angular/core';
import * as Fixtable from 'fixtable/dist/fixtable';
import { Observable } from 'rxjs/Observable';

export interface Column {
  property: string;
  label?: string;
  width?: number;
  sortable?: boolean;
  sortCompareMethod?: (a, b) => number;
  hideLabel?: boolean;
  cellClass?: string;
  component?: string;
  actionButton?: boolean;
  onActionButton?: Function;
}

export interface FixtableOptions {
  data: any[]; // For now, pass in the data array. This is different than the original signature in fixtable-angular
               // but makes more sense with the Angular2 programming model
  columns: Column[];
  tableClass?: string;
  loading?: string;
}

@Component({
  selector: 'fixtable-grid',
  template: `
  <div class="fixtable">
    <div class="fixtable-header"></div>
      <div class="fixtable-filters" *ngIf="externalFilter">
        <input ngModel="externalFilter" />
      </div>
      <div class="fixtable-inner">
        <table [ngClass]="tableClass">
          <thead>
            <tr class="fixtable-column-headers">
              <th *ngFor="let column of columns">
                <div>
                  <fixtable-column-header [SortByProperty]="SortByProperty" [column]="column"></fixtable-column-header>
                </div>
              </th>
            <tr>
          </thead>
          <tbody>
            <tr *ngFor="let record of data">
              <td *ngFor="let column of columns; let i = index">
                <ng-template
                  *ngIf="column.cellTemplate"
                  [ngTemplateOutlet]="column.cellTemplate"
                  [ngTemplateOutletContext]="{row: record, value: record[column.property]}"
                ></ng-template>
                <span
                  *ngIf="!column.cellTemplate"
                  [ngClass]="column.cellClasses"
                >{{record[column.property]}}</span>
              </td>
            </tr>
          </tbody>
          <div class="fixtable-footer">
            <tfoot>
              <tr>
              <td [colSpan]="columns && columns.length || 1" >Footer</td>
              </tr>
            </tfoot>
          </div>
        </table>
      </div>
    </div>
  `,

        // <td *ngFor="let column of columns" scope="col">
        //   Footer
        // </td>
  //TODO: Finish adding scrollable content css from https://www.sitepoint.com/community/t/flexible-html-table-with-fixed-header-and-footer-around-a-scrollable-body/271162/2
  // styles: [`
  //   .fixtable-styles-circulated {
  //     height: 400px;
  //   }
  // `],
  styleUrls: [
    '../../../../node_modules/fixtable/dist/fixtable.min.css',
    './grid.component.less'
  ]

})
export class GridComponent implements OnInit, AfterViewChecked {

  // Options params
  data;
  columns;
  externalFilter;
  tableClass;

  _columnTemplates;

  fixtableElement: any;
  fixtable;

  @Input() options: FixtableOptions;

  @ContentChildren(FixtableColumnDirective)
  set columnTemplates(val: QueryList<FixtableColumnDirective>) {
    this._columnTemplates = val;
  }


  // get columTemplates(): QueryList<FixtableColumnDirective> {
  //   return this._columnTemplates;
  // }

  constructor(private element:  ElementRef) {
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
    if (this.options) {
      this.data = this.options.data;
      this.columns = this.options.columns;
      this.externalFilter = this.options.columns;
      this.tableClass = this.options.tableClass;
    }
  }

  ngAfterViewChecked() {
      this.fixtableElement = this.element.nativeElement.children[0];
      this.fixtable = new Fixtable(this.fixtableElement);
      this.fixtable.setDimensions();
  }

}
