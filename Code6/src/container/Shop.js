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
                <SearchSortBar/>
                <hr/>
                <List isAddedFlag={this.isAddedFlag.bind(this)} items = {this.state.items}/>
            </div>
        )
    }

}