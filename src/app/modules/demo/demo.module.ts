import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { FixtableModule } from '../fixtable/fixtable.module';

@NgModule({
  imports: [
    CommonModule,
    FixtableModule
  ],
  declarations: [DemoComponent],
  exports: [
    DemoComponent
  ]
})
export class DemoModule { }
