import React from 'react';
import {NavLink} from 'react-router-dom';
export const Header=(props)=>{
    return (
        <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about/Amit/Delhi">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/news">News</NavLink>
        </>
    )
}