import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { CommonService } from './common.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxdemos';
  subject:BehaviorSubject<string>;
  constructor(private commonService:CommonService){
    this.subject = this.commonService.getSubject();
  }
  takeData(event){
      this.subject.next(event.target.value);
  }
  subscribeObs(e,type):void{
  var obs:Observable<any> = this.start();
  console.log("Obs is ",obs);
  obs.subscribe((data)=>{
      console.log(type+' Data is ',data);
    },err=>{
      console.log('Error is ',err);
    },()=>{
      console.log('Complete');
    })
  }
  start():Observable<any>{

   var myObservable:Observable<any> = Observable.create((obs=>{
    var counter =0;
    setInterval(()=>{
      counter++;
      obs.next(counter);
      if(counter>=10){
        obs.error('React to 10');
      }
     },1000)
   }));
   return myObservable;
    // var intervalObs:Observable<any> = interval(1000);
    //return intervalObs;
    // intervalObs.subscribe((data)=>{
    //   console.log('Data is ',data);
    // },err=>{
    //   console.log('Error is ',err);
    // },()=>{
    //   console.log('Complete');
    // })
  }
}
