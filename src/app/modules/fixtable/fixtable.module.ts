import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixtableComponent } from './fixtable.component';
import { ColumnHeaderComponent } from './column-header.component';
import { FixtableColumnDirective } from './fixtable-column.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FixtableComponent,
    ColumnHeaderComponent,
    FixtableColumnDirective
  ],
  exports: [
    FixtableComponent,
  ]
})
export class FixtableModule { }
