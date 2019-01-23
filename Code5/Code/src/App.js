
import React from 'react';
import './App.css';
import {add} from './X.js';
import {App2} from './App2';
import {Calc} from './components/Calc';
  const Application = ()=>{
    console.log("I am inside Application");
  var a =100;
  var b = 20;
  var c = a + b;
  var msg ;
  add();
 // opr.add();
  if(c>30){
    msg = (<div><p>Hello this is JSX</p><h2>Value is More than 30 </h2></div>);
  }
  else{
    msg = <h2>Value is Less than equalto 30</h2>;
  }
  var products= ["Samsung","LG","Apple"];
  return (
    <div>
    <Calc/>
      <App2/>
    <h1 className={c>30?'green':'red'}>Hello react js</h1>
    <h1>Hi react js {c}</h1>
    {products.map((product,index)=><p key={index}>{product}</p>)}
    {msg}
    </div>
  )
  // React.createElement("h1",null,'Hello React JS');
}
export default Application;