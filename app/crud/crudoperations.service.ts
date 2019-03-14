import { Injectable } from '@angular/core';
import {Item} from './item';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudoperationsService {
  items:Item[] = [];
  itemsBs:BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
  constructor() { }
  add(itemObject:Item){
    this.items.push(itemObject);
    this.itemsBs.next(this.items);
  }
  getItemBs(){
    return this.itemsBs;
  }
  sort(key):void{
    if(key=='name'){
      this.items.sort((first, second)=>{
        return first[key].localeCompare(second[key]);
      })
    }
    else{
      this.items.sort((first, second)=>{
        return first[key]-second[key];
      })
    }
    this.itemsBs.next(this.items);

  }
  markCount():number{
    return this.items.filter(itemObject=>itemObject.isMarked).length;
  }
  toggleMark(id:number){
    let itemObject:Item = this.items.find(itemObject=>itemObject.id==id);
    if(itemObject){
      itemObject.toggleMark();
    }
    this.itemsBs.next(this.items);
  }
}
