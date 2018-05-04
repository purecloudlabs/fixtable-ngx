import {Component, HostBinding, OnInit, ViewChild, TemplateRef} from '@angular/core';
import { RawDataService } from './raw-data.service';


    // <fixtable-grid [options]="options">
    //   <ng-template #customTemplate let-row="row" let-value="value">
    //     <h3>{{value}}</h3>
    //   </ng-template>
    // </fixtable-grid>

@Component({
  selector: 'fixtable-demo',
  template: `

    <fixtable-example1></fixtable-example1>
  `,
  styles: [
    `
      :host ::ng-deep .pink {background-color: pink;}
    `
  ],
})
export class DemoComponent implements OnInit {

  @HostBinding('class.fixtable') fixtable = true;

  @ViewChild('customTemplate') customTemplate: TemplateRef<any>;

  options;

  constructor() {
  }

  ngOnInit() {

    this.options = {
      columns: [
        {property: 'foo', label: 'Foo', sortable: true},
        {property: 'bar', label: 'Bar', cellClasses: ['pink']},
        {property: 'doge', label: 'Doge', cellTemplate: this.customTemplate}
      ],
      data: [
        {
          foo: 'food',
          bar: 'bong',
          doge: 'pup'
        },
        {
          foo: 'foob',
          bar: 'bim',
          doge: 'shibiniu'
        },
        {
          foo: 'foog',
          bar: 'barb',
          doge: 'puglet'
        }
      ],
      externalFilter: {query: ''}
    };
  }

}
