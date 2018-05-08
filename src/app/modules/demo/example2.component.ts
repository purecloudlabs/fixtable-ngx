import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { RawDataService } from './raw-data.service';
import { FixtableOptions } from '../fixtable/grid.component';

@Component({
  selector: 'fixtable-example2',
  template: `
    <fixtable-grid
      [options]="options"
    >
      <ng-template #ratingImage let-row="row">
        <div class="rating rating-{{row.rating.toLowerCase() }}"></div>
      </ng-template>
    <fixtable-grid>
  `,
  styles: []
})
export class Example2Component implements OnInit {

  options: FixtableOptions;

  @ViewChild('ratingImage') ratingImage: TemplateRef<any>;

  constructor(private rawData: RawDataService) { }


  ngOnInit() {

    this.options = {
      data: this.rawData.getData(),
      columns: [
        {
          property: 'year',
          label: 'Year',
          width: 80
        },
        {
          property: 'title',
          label: 'Film',
          cellClass: 'text-italic'
        },
        {
          property: 'director',
          label: 'Director(s)'
        },
        {
          property: 'rating',
          label: 'Rating',
          cellTemplate: this.ratingImage,
          width: 80
        }
      ],
      tableClass: 'table'
    };
  }
}