import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  childdata:string;
  @Input()
  sendchild1:string;
  @Output()
  sendBackToParent:EventEmitter<string>= new EventEmitter<string>();
  constructor() { }
  takeInput(event){
      this.childdata= event.target.value;
      this.sendBackToParent.emit(this.childdata);
  }
  ngOnInit() {
  }

}
