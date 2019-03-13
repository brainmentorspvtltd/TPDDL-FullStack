import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SpamoduleModule } from './spamodule/spamodule.module';

@NgModule({
  declarations: [
    AppComponent//,
    //HomeComponent
  ],
  imports: [

  BrowserModule,SpamoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent ]  //,
  //exports:[HomeComponent]
})
export class AppModule { }
