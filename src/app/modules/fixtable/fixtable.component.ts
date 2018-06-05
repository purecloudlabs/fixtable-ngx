/* global Fixtable */

import {
  Component,
  Input,
  OnInit,
  ContentChildren,
  QueryList,
  AfterViewChecked,
  AfterViewInit,
  OnChanges,
  TemplateRef,
  Output,
  EventEmitter
} from '@angular/core';
import {ColumnHeaderComponent} from './column-header.component';
import * as _ from 'lodash';
import { FixtableColumnDirective } from './fixtable-column.directive';
import { ElementRef } from '@angular/core';
import * as Fixtable from 'fixtable/dist/fixtable';
import { Observable } from 'rxjs';

export interface Column {
  property: string;
  label?: string;
  width?: number;
  sortable?: boolean;
  sortCompareMethod?: (a, b) => number;
  hideLabel?: boolean;
  cellClass?: string;
  cellTemplate?: TemplateRef<any>;
  component?: string;
  actionButton?: boolean;
  onActionButton?: Function;
}

@Component({
  selector: 'fixtable',
  template: `
  <div class="fixtable table">
    <div class="fixtable-header"></div>
      <div class="fixtable-filters" *ngIf="externalFilter">
        <th>
          <input ngModel="externalFilter" />
        </th>
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
            <tr *ngFor="let row of rows">
              <td *ngFor="let column of columns; let i = index">
                <ng-template
                  *ngIf="column.cellTemplate"
                  [ngTemplateOutlet]="column.cellTemplate"
                  [ngTemplateOutletContext]="{row: row, value: row[column.property]}"
                ></ng-template>
                <span
                  *ngIf="!column.cellTemplate"
                  [ngClass]="column.cellClass"
                >{{row[column.property]}}</span>
              </td>
            </tr>
          </tbody>
          <div class="fixtable-footer">
            <tfoot>
              <tr>
                <td [colSpan]="columns && columns.length || 1" >
                  <a (click)="previousPage()" href="javascript:;">\<</a>
                  <span *ngFor="let p of pageNumbers">
                    <a (click)="clickPageNumber(p)" [href]="p === pageNumber ? 'javascript:;' : null">{{p}}</a>
                  </span>
                  <a (click)="nextPage()" href="javascript:;">\></a>
                </td>
              </tr>
            </tfoot>
          </div>
        </table>
      </div>
    </div>
  `,

  styleUrls: [
    '../../../../node_modules/fixtable/dist/fixtable.min.css',
    './fixtable.component.less'
  ],
  styles: [
    `
      
    `
  ]

})
export class FixtableComponent implements OnInit, AfterViewInit, OnChanges {

  // Options params
  data;
  externalFilter;
  tableClass;

  _columnTemplates;

  fixtableElement: any;
  table: any;

  @Input() columns: Column[];
  @Input() rows?: any[] = [];
  @Input() pageNumber = 1;
  @Input() pageSize: number;
  @Input() totalRows: number;

  // Update the page number, rows and (if necessary) total rows from outside
  @Output() getPage = new EventEmitter<number>();

  // Just grabs an array of ascending numbers beginning with 1
  get pageNumbers() {
    const totalPages = Math.ceil(this.totalRows / this.pageSize) + 1 || 0;
    return Array.from(Array(totalPages).keys()).slice(1);
  }

  @ContentChildren(FixtableColumnDirective)
  set columnTemplates(val: QueryList<FixtableColumnDirective>) {
    this._columnTemplates = val;
  }

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

  ngOnChanges() {
    // console.log('ngOnChanges', this.columns, this.rows);
  }

  ngOnInit() {
    // console.log('ngOnInit', this.columns, this.rows);
  }


  ngAfterViewInit() {
    this.fixtableElement = this.element.nativeElement.children[0];
    this.table = new Fixtable(this.fixtableElement);
    if (this.columns) {
        this.columns.forEach((column, index) => {
        if (column.width) {
          this.table.setColumnWidth(index + 1, column.width);
        }
      });
    }
    this.table.setDimensions();
  }

  previousPage() {
    this.getPage.emit(this.pageNumber - 1);
  }

  nextPage() {
    this.getPage.emit(this.pageNumber + 1);
  }

  clickPageNumber(i: number) {
    this.getPage.emit(i);
  }

}
