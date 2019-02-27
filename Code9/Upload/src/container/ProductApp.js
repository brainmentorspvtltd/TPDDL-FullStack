import React from 'react';
import { List } from '../components/List';
export class ProductApp extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <h1>Product CRUD</h1>
                <List/>
            </div>
        )
    }
}