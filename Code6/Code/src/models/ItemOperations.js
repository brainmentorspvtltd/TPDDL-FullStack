import { URLs } from "../utils/config";
import {Item} from './Item';
export const itemOperations = {
    items:[],
    sortOrder:true,
    search(price){
       
        return this.items.filter(itemObject=>itemObject.price==price);
    },
    sort(key){
        if(key=='price'){
        if(this.sortOrder){
         this.items.sort((first, second)=>first[key] - second[key]);
        }
        else{
             this.items.sort((first, second)=>second[key] - first[key]);
        }
    }
    else{
        if(this.sortOrder){
             this.items.sort((first, second)=>first[key].localeCompare(second[key]));
            }
            else{
                 this.items.sort((first, second)=>second[key].localeCompare(first[key]));
            }
    }
    this.sortOrder = !this.sortOrder;
    return this.items;
    },
    countInCart(){
       return  this.items.filter(itemObject=>itemObject.isAdded).length;
    },
    fetchAndFill(fn){
        fetch(URLs.productURL).then(response=>{
            response.json().then(data=>{
                    console.log("Data is ",data, "Type of ",typeof data);
                    let itemArray = this.fillItems(data.mobiles);
                    fn(itemArray);
            }).catch(err=>{
                console.log("Invalid JSON Error is ",err);
            }).catch(e=>{
                console.log("Server Error ",e);
            })
        })
    },
    fillItems(arr){
        this.items = arr.map(itemObject=>{
            let item = new Item(itemObject.id, itemObject.name, itemObject.price, itemObject.url);
            return item;
        })
        return this.items;
    }
}