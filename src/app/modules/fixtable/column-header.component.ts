import { Component, Input, OnInit } from '@angular/core';

import { Column } from './fixtable.component';

@Component({
  selector: 'fixtable-column-header',
  template: `
    <th *ngIf="!column.sortable">
      {{column.label || column.property}}
    </th>
    <th *ngIf="column.sortable">
      <div (click)="SortByMyProperty()">
        {{column.label || column.property}}
      </div>
    </th>
  `,
  styles: []
})
export class ColumnHeaderComponent implements OnInit {

  constructor() { }

  @Input() column: Column;
  @Input() SortByProperty: (key: string) => void;
  @Input() sortBy: string;
  @Input() ascending: boolean;

  SortByMyProperty() {
    this.SortByProperty(this.column.property);
  }

  ngOnInit() {
  }

}
