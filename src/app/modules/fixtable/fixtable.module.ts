import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { ColumnHeaderComponent } from './column-header/column-header.component';
import { TestPageComponent } from './test-page/test-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GridComponent,
    ColumnHeaderComponent,
    TestPageComponent
  ],
  exports: [
    GridComponent,
    TestPageComponent
  ]
})
export class FixtableModule { }
