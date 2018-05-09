import { Component, OnInit } from '@angular/core';
import { RawDataService } from './raw-data.service';
import { FixtableOptions } from '../fixtable/fixtable.component';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'fixtable-example1',
  template: `<fixtable [options]="options"><fixtable>`,
  styles: []
})
export class Example1Component implements OnInit {

  options: FixtableOptions;

  constructor(private rawData: RawDataService) {
  }

  ngOnInit() {
    this.options = {
      data: this.rawData.getData(),
      columns: [
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
      ],
      tableClass: 'table'
    };
  }
}

