import { Component, OnInit } from '@angular/core';
import { RawDataService } from './raw-data.service';
import { setTheme } from 'ngx-bootstrap/utils';
import { Column } from '../fixtable/fixtable.component';

@Component({
  selector: 'fixtable-example1',
  template: `<fixtable [columns]="columns" [rows]="rows"><fixtable>`,
  styles: []
})
export class Example1Component implements OnInit {

  columns: Column[];
  rows: any[];

  constructor(private rawData: RawDataService) {
  }

  ngOnInit() {
    this.rows = this.rawData.getData();
    this.columns = [
      {
        property: 'year',
        label: 'Year'
      },
      {
        property: 'title',
        label: 'Film'
      },
      {
        property: 'director',
        label: 'Director(s)'
      },
      {
        property: 'rating',
        label: 'Rating'
      }
    ];
  }
}

