import {Component, Input, OnInit} from '@angular/core';

import {ColumnDef} from '../grid/grid.component';

@Component({
  selector: 'fixtable-column-header',
  templateUrl: './column-header.component.html',
  styleUrls: ['./column-header.component.less']
})
export class ColumnHeaderComponent implements OnInit {

  constructor() { }

  @Input() columnDef: ColumnDef;
  @Input() SortByProperty: (key: string) => void;
  @Input() sortBy: string;
  @Input() ascending: boolean;

  SortByMyProperty() {
    this.SortByProperty(this.columnDef.property);
  }

  ngOnInit() {
  }

}
