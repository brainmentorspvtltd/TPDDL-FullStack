import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './crud/input/input.component';
import { ListComponent } from './crud/list/list.component';
import { RecordComponent } from './crud/record/record.component';
import {Routes, RouterModule} from '@angular/router';
const routes:Routes= [{path:'',component:InputComponent},{path:'list',component:ListComponent}]

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ListComponent,
    RecordComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
