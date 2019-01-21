import React  from 'react';
export class App2 extends React.Component{
   constructor(){
       super();  // Call parent constructor
       this.message = "Hello React I am Component2";
   }
   render(){
       return (
           <h1>{this.message}</h1>
       )
   }


}