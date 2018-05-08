import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { FixtableModule } from '../fixtable/fixtable.module';
import { Example1Component } from './example1.component';
import { RawDataService } from './raw-data.service';
import { Example2Component } from './example2.component';

@NgModule({
  imports: [
    CommonModule,
    FixtableModule
  ],
  declarations: [
    DemoComponent,
    Example1Component,
    Example2Component
  ],
  providers: [
    RawDataService
  ],
  exports: [
    DemoComponent
  ]
})
export class DemoModule { }
