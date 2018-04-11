import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import {ColumnHeaderComponent} from "./column-header/column-header.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GridComponent,
    ColumnHeaderComponent
  ],
  exports: [
    GridComponent
  ]
})
export class FixtableModule { }
