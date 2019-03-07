import React from 'react';
import {useState} from 'react';
export const MyHook = ()=>{
    // this.state = {};
   // this.setState()
var [items,myState]=useState({items:[{id:1001,name:'Nokia',price:10000}]});
console.log("Type is ",typeof items, "Items ",items);
return (
    <div>
       {items.items.map((i,index)=>{
           return (<h1 key={index}>{i.id} {i.name} {i.price}</h1>)
       })}
        <button onClick={()=>{
            myState({items:[{id:1002,name:'Apple',price:20000}]})
            }}>Change State</button>
    </div>
)
}