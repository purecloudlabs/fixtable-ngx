import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { ColumnHeaderComponent } from './column-header.component';
import { FixtableColumnDirective } from './fixtable-column.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GridComponent,
    ColumnHeaderComponent,
    FixtableColumnDirective
  ],
  exports: [
    GridComponent,
  ]
})
export class FixtableModule { }
