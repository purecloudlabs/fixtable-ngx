import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'fixtable-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.less'],
})
export class TestPageComponent implements OnInit {

  @HostBinding('class.fixtable') fixtable = true;

  options;

  constructor() {
  }

  ngOnInit() {

    this.options = {
      columns: [
        {key: 'foo', header: 'Foo', sortable: true},
        {key: 'bar'}
      ],
      data: [
        {
          foo: 'food',
          bar: 'bong'
        },
        {
          foo: 'foob',
          bar: 'bim'
        },
        {
          foo: 'foog',
          bar: 'barb'
        }
      ],
      externalFilter: {query: ''}
    };
  }

}
