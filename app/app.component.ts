import { Component,ViewChild, ViewChildren,QueryList } from '@angular/core';
import { Product } from './product';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  fruits:string[]=[];
  products:Product[] = [];
  cardNumber:string;
  mobile:string;
  result:number = 0;
   isLogin:boolean = true;
   counter:number;
   data:string;
   sum:number;
   parentDataRec:string;
   @ViewChild(Child2Component)
   child2:Child2Component;

   @ViewChildren(Child3Component)
   child3:QueryList<Child3Component>;
   recChildData(event){
      this.parentDataRec = event;
   }
   sendToChildrens(event){
      let val = event.target.value;
      this.child3.forEach(child=>{

        child.showData(val);
      })
   }
   callChild2():void{
        this.sum = this.child2.add(100,200);
   }
   sendToChild(event){
      this.data = event.target.value;
   }
  takeCardNumber(event):void{
      this.cardNumber = event.target.value;
  }
  add(a:string,b:string,c:string){
    console.log('A is ',a,' B is ',b, ' C is ',c);
    this.result = parseInt(a) + parseInt(b) + parseInt(c);
  }
  loadProducts():Product[]{
    this.products.push(new Product(1001,'Apple',90));
    this.products.push(new Product(1002,'Mango',100));
    this.products.push(new Product(1003,'Orange',80));
    return this.products;
  }
  plus():void{
    this.counter++;
  }
  constructor(){
    this.counter = 0;
    this.cardNumber = '0';
    this.fruits = ['Mango','Orange','Apple'];
    this.products = this.loadProducts();
    this.mobile = '9992212321';
  }
}
