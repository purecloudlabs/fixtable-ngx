import {Component, Input, OnInit} from '@angular/core';

import {Column} from '../grid.component';

@Component({
  selector: 'fixtable-column-header',
  templateUrl: './column-header.component.html',
  styleUrls: ['./column-header.component.less']
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
