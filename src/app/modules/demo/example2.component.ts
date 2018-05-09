import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { RawDataService } from './raw-data.service';
import { FixtableColumn } from '../fixtable/fixtable.component';

@Component({
  selector: 'fixtable-example2',
  template: `
    <fixtable [columns]="columns" [rows]="rows">
      <ng-template #ratingImage let-row="row">
        <div class="rating rating-{{row.rating.toLowerCase() }}"></div>
      </ng-template>
    <fixtable>
  `,
  styles: []
})
export class Example2Component implements OnInit {

  columns: FixtableColumn[];
  rows: any[];

  @ViewChild('ratingImage') ratingImage: TemplateRef<any>;

  constructor(private rawData: RawDataService) { }

  ngOnInit() {
    this.rows = this.rawData.getData();
    this.columns = [
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
    ];
  }
}
