import { URLs } from "../utils/config";
import {Item} from './Item';
export const itemOperations = {
    items:[],
    search(price){

    },
    sort(){

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