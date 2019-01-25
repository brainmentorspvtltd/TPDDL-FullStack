import React from 'react';
import { SearchSortBar } from '../components/SearchSortBar';
import { List } from '../components/List';
import { itemOperations } from '../models/ItemOperations';
import { ViewCart } from '../components/ViewCart';

export class Shop extends React.Component{
    constructor(props){
        super(props);
        console.log("Shop Cons Call");
        this.items = [];
        this.state = {items:this.items,isAdded:false};
    }
    takeSortInput(event){
        console.log("Sort By ",event.target.value);
        var order = event.target.value;
        if(order!=-1){
            var items  = itemOperations.sort(order);
            this.setState({...this.state,items:items});
        }
    }
    takeSearchInput(event){
        var price = 0;
        console.log("Price ::: ",event.target.value);
        if(event.target.value){
           
        
        var price = parseInt(event.target.value);
        console.log("Price is ",price);
        var searchResult = itemOperations.search(price);
        this.setState({...this.state,items:searchResult});
        }
        else{
            this.setState({...this.state, items:itemOperations.items});
        }
    }
    isAddedFlag(flag){
        this.setState({...this.state,isAdded:flag});
    }
    componentWillMount(){
        console.log("Component Will Mount Call");
        itemOperations.fetchAndFill(this.getItems.bind(this));
    }
    getItems(items){
        console.log("Items Rec ",items);
        this.items = items;
        this.setState({...this.state, items:this.items});
    }
    render(){
        console.log("Shop Render Call");
        return(
            <div className='container'>
                <h1 className='alert-info text-center'>Shop App</h1>
                <ViewCart total = {itemOperations.countInCart()}/>
                <SearchSortBar sort={this.takeSortInput.bind(this)} search={this.takeSearchInput.bind(this)}/>
                <hr/>
                <List isAddedFlag={this.isAddedFlag.bind(this)} items = {this.state.items}/>
            </div>
        )
    }

}