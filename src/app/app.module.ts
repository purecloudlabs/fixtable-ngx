import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FixtableModule} from './modules/fixtable/fixtable.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FixtableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
