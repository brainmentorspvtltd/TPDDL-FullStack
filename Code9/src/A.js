import React from 'react';
import { B } from './B';
import {MyContext} from './MyContext';

export class A extends React.Component{
    constructor(){
        super();
        this.state = {first:10000,second:2000,result:0};
        
    }
    addition(y,z){
        console.log("Y is ",y, " Z is ",z);
        this.setState({...this.state,first:y,z:z });
        return this.state.first + this.state.second;
    }
    render(){
    return (
        <div>
            <h1>A Component</h1>
            <h3>Z is {this.state.z.id} {this.state.z.name}</h3>
            <MyContext.Provider value={{x:this.state.first,y:this.state.second,add:this.addition.bind(this)}}>
            <B/>
            </MyContext.Provider>
        </div>
    );
    }
}