import React from 'react';
import { Input } from '../components/Input';
import  Output  from '../components/Output';
import { Operations } from '../components/Operations';
import { calcActionCreator } from '../actioncreators/calcactioncreator';
import {store} from '../models/centralstore';
export class Calc extends React.Component{
    constructor(){
        super();
        this.inputs = {first:'',second:'',opr:''};
    }
    takeInput(event, key){
        this.inputs[key] = event.target.value;
        console.log("Input is ",this.inputs);
        if(this.inputs[key]=='add' || this.inputs[key]=='sub' ){
            let actionObject = calcActionCreator(this.inputs.first, this.inputs.second, this.inputs.opr);
            store.dispatch(actionObject);
            console.log("Dispatch Call ", actionObject);
        }
    }
    render(){
        return (
            <>
          <Input takeinput={this.takeInput.bind(this)}/>
          <Operations takeinput={this.takeInput.bind(this)}/>
          <Output/>
          </>
        )
    }
}