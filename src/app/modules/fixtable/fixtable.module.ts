import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { ColumnHeaderComponent } from './column-header/column-header.component';
import { TestPageComponent } from './test-page/test-page.component';
import { ExampleCustomComponentComponent } from './example-custom-component/example-custom-component.component';
import { FixtableColumnDirective } from './fixtable-column.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GridComponent,
    ColumnHeaderComponent,
    TestPageComponent,
    ExampleCustomComponentComponent,
    FixtableColumnDirective
  ],
  exports: [
    GridComponent,
    TestPageComponent
  ]
})
export class FixtableModule { }
