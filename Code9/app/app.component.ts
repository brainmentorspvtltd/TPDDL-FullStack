import { Component } from "@angular/core";
import {Fruit} from  './fruit';
@Component({
  selector:'app-root',
  //template:`Hello Angular `
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent{
  message:string;
  flag:boolean;
  //fruits:string[];
  fruits : Fruit[];
  className:string;
  showhide(){
    //this.flag = !this.flag;
    this.className = this.className=='red'?'green':'red';
  }
  loadFruits():void{
    let fruit:Fruit =new Fruit(1001,'<b>Apple</b>',90);
    let fruit2:Fruit =new Fruit(1002,'<b>Orange</b>',60);
    let fruit3:Fruit =new Fruit(1003,'<b>Mango</b>',190);
    this.fruits = [fruit, fruit2, fruit3];


  }
  constructor(){
    this.className='red';
    this.flag = false;
    this.loadFruits();
    //this.fruits = ['Orange','Apple'];
    this.message = 'Hello Angular .... ';
  }

}
