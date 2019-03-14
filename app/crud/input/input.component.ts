import { Component, OnInit } from '@angular/core';
import {Item} from '../item';
import {CrudoperationsService} from '../crudoperations.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private crud: CrudoperationsService) {
    this.isSortShow = true;
   // $('#sortdrop').hide();
  }

  ngOnInit() {
  }
  isSortShow:boolean;
  toggleSort(){
    if(this.isSortShow){
    $('select').hide(2000);
    }
    else{
    $('select').show(3000);
    }
    this.isSortShow = !this.isSortShow;
  }
  doSort(key){
      this.crud.sort(key);
  }
  add(id:string, name:string, price:string):void{
        let item:Item = new Item(parseInt(id), name, parseFloat(price));
        console.log('Item added ',item);
        this.crud.add(item);

  }

}
