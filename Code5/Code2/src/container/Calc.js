import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Input } from '../components/Input';
import { Output } from '../components/Output';
import { Operations } from '../components/Operations';
import {Compute} from '../models/Compute';
export class Calc extends Component{
constructor(){
    super();
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.result = 0;
    this.state = {};
}
doCompute(key){
    //Compute
    this.result = Compute[key](this.firstNumber, this.secondNumber);
    this.setState({result:this.result});
}
takeFirstNumber(event){
    this.firstNumber = event.target.value;
    console.log("First ",this.firstNumber);
}
takeSecondNumber(event){
    this.secondNumber = event.target.value;
    console.log("Second ",this.secondNumber);
}
render(){
    return (
        <div className='container'>
        <h1 className='alert-success'>Calc App</h1>
        <Input first={this.takeFirstNumber.bind(this)} second={this.takeSecondNumber.bind(this)}/> 
        <Operations opr={this.doCompute.bind(this)}/>
        <Output result = {this.state.result}/>
        </div>
    );
}
}