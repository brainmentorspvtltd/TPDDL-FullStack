import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import { BehaviorSubject ,Observable} from 'rxjs';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  subject:BehaviorSubject<string>;
  myData:string;
  products:any[] =[];
  myProductsObs:Observable<any>;
  constructor(private commonService:CommonService){
      this.subject = this.commonService.getSubject();
  }

  unsub():void{
  this.subject.unsubscribe();
  }
  doSecondAjaxCall(){
    this.myProductsObs =  this.commonService.doAjax();
    console.log('Second Ajax Call');
  }

  doAjaxCall(){
      let obs:Observable<any>= this.commonService.doAjax();
      obs.subscribe(data=>{
        console.log('Data is ',data['mobiles']);
        this.products = data['mobiles'];
      },err=>{
        console.log('Error is ',err);
      },()=>{
          console.log('Completed ....');
      })
  }


  ngOnInit() {
    //this.doAjaxCall();
    this.subject.subscribe(data=>{
        this.myData = data;
    },err=>{

    },()=>{

    });


  }

}
