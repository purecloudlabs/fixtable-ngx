import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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
