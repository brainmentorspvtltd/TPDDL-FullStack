import { Component, OnInit } from '@angular/core';
import {CrudoperationsService} from '../crudoperations.service';
import {Item} from '../item';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items:Item[] = [];
  markCount:number;
  constructor(private crudOpr:CrudoperationsService) {
    this.markCount = 0;
   }

  ngOnInit() {
    this.crudOpr.getItemBs().subscribe(items=>{
        this.items = items;
        console.log("Updated Items are ",this.items);
    })
  }
  toggleMark(id:number):void{
    this.crudOpr.toggleMark(id);
    this.markCount = this.crudOpr.markCount();
  }

}
