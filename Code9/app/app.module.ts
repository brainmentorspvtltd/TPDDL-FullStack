import { NgModule } from "@angular/core";
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
@NgModule({
  declarations:[AppComponent],  // Contain Component , Pipe, Directive
  imports:[BrowserModule],
  providers:[],  // Services
  bootstrap:[AppComponent],
})
export class AppModule{

}
