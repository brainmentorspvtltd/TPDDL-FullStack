import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardPipe } from './card.pipe';
import { PhonePipe } from './phone.pipe';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';

@NgModule({
  declarations: [
    AppComponent,CardPipe, PhonePipe, Child1Component, Child2Component, Child3Component
  ],
  imports: [

  BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
