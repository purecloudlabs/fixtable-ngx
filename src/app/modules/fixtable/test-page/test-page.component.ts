import {Component, HostBinding, OnInit, ViewChild, TemplateRef} from '@angular/core';

@Component({
  selector: 'fixtable-test-page',
  template: `
    <fixtable-grid [options]="options">
      <ng-template #customTemplate let-row="row" let-value="value">
        <h3>{{value}}</h3>
      </ng-template>
    </fixtable-grid>
  `,
  styles: [
    `
      :host ::ng-deep .pink {background-color: pink;}
    `
  ],
})
export class TestPageComponent implements OnInit {

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
