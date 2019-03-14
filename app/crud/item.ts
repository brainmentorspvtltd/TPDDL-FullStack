export class Item{
  isMarked:boolean;
  constructor(public id:number , public name:string, public price:number){
      this.isMarked = false;
  }
  toggleMark(){
    this.isMarked = !this.isMarked;
  }
}
