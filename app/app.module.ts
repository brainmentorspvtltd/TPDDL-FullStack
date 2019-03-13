import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonService } from './common.service';
import { Child1Component } from './child1/child1.component';
import {HttpClientModule} from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './TokenInterceptor';
@NgModule({
  declarations: [
    AppComponent,
    Child1Component
  ],
  imports: [

  BrowserModule, HttpClientModule
  ],
  providers: [CommonService, {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
