import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { ContactusComponent } from '../contactus/contactus.component';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from '../home/home.component';
const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contactus',component:ContactusComponent}
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  declarations: [AboutComponent, ContactusComponent, HomeComponent],
  exports:[RouterModule]
})
export class SpamoduleModule { }
