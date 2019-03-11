import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  message:string;
  constructor() {
    this.message = '';
   }

  ngOnInit() {
  }
  showData(data:string){
  this.message = data;
  }

}
