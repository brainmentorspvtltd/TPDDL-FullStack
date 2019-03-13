import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import {HttpClient} from '@angular/common/http';
@Injectable()
export class CommonService{
  message:string = '';
  behService:BehaviorSubject<string> = new BehaviorSubject<string>(this.message);

  constructor(private httpClient:HttpClient){
    this.message = '';
  }
  doAjax():Observable<any>{
    const url = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/products.json';
    //const url = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json';
    let obs:Observable<any> = this.httpClient.get(url);

    // Post Call
    //var obj = {id:1001};
   // let obs:Observable<any> = this.httpClient.post(url, obj);
    return obs;
  }
  getSubject():BehaviorSubject<string>{
    return this.behService;
  }

}
