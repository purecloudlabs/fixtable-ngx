import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { RawDataService } from './raw-data.service';
import { Column } from '../fixtable/fixtable.component';

@Component({
  selector: 'fixtable-example3',
  template: `
    <fixtable [columns]="columns" [rows]="rows" [pageNumber]="pageNumber" [pageSize]="pageSize" 
      [totalRows]="totalRows" (getPage)="getPage($event)">
      <ng-template #ratingImage let-row="row">
        <div class="rating rating-{{row.rating.toLowerCase() }}"></div>
      </ng-template>
    <fixtable>
  `,
  styles: []
})
export class Example3Component implements OnInit {

  columns: Column[];
  rows: any[];
  allRows: any[];
  pageSize: number;
  pageNumber: number;
  totalRows: number;

  @ViewChild('ratingImage') ratingImage: TemplateRef<any>;

  constructor(private rawData: RawDataService) { }

  // The getPage handler is responsible for updatig totalRows, rows, pageNumber
  getPage(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.rows = this.allRows.slice((this.pageNumber - 1) * this.pageSize, this.pageNumber * this.pageSize);
    this.totalRows = this.allRows.length;
  }

  ngOnInit() {
    this.allRows = this.rawData.getData();
    this.rows = [];
    this.pageSize = 10;
    this.pageNumber = 1;
    this.columns = [
      {
        property: 'year',
        label: 'Year',
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
      }
    ];
    this.getPage(1);
  }
}
