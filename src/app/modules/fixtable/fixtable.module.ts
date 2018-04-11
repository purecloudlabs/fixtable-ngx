import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixtableComponent } from './fixtable.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FixtableComponent
  ],
  exports: [
    FixtableComponent
  ]
})
export class FixtableModule { }
