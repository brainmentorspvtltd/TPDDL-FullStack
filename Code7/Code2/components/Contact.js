import React from 'react';
import {NavLink,Route} from 'react-router-dom';
export const Contact=(props)=>{
    return (
        <div>
            <h1>I am Contact Page</h1>
            <NavLink to="/contact/office/Noida">Office</NavLink>
            <NavLink to="/contact/home">Home</NavLink>
            <br/>
            <hr/>
            <Route path="/contact/office/:name" render={(props)=>{
                return (<h1>I am in Office {props.match.params.name}</h1>)
            }} ></Route>
            <Route path="/contact/home" render={()=>{
                return (<h1>I am in Home </h1>)
            }} ></Route>
        </div>
    )
}