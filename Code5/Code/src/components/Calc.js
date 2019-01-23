import React, {Component} from 'react';
export class Calc extends Component{
    constructor(){
        super();
        
        this.firstNumber = this.secondNumber = 0;
        this.state = {result:0};
        console.log("Constructor Called ",this);
    }
    takeFirstNumber(event){
        console.log("Take First Number Called....",event.target.value, "This is ",this);
        this.firstNumber = event.target.value;
    }
    takeSecondNumber(event){
        console.log("Take Second Number Called....",event.target.value, "This is ",this);
        this.secondNumber = event.target.value;
    }
    add(){
        var output = parseInt(this.firstNumber) + parseInt(this.secondNumber);
        console.log("Result is ",output);
        this.setState({result:output});
        
    }
    render(){
        console.log("Render Call.......... ");
        return (
            <div>
                <h1>Calc App </h1>
                <label>First Number</label>
               <input  onChange={this.takeFirstNumber.bind(this)} placeholder='Type First Number Here' type="text"/>
               <br/>
               <label htmlFor="">Second Number</label>
               <input onChange={this.takeSecondNumber.bind(this)} placeholder='Type Second Number Here' type="text"/>
               <br/>
               <button onClick={this.add.bind(this)}>Add</button>
               <button>Subtract</button>
               <button>Multiply</button>
               <button>Divide</button>
               <br/>
               <h2>Result is {this.state.result}</h2>
               <hr/>

            </div>
        )
    }
}