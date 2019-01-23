import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export const Input =(props)=>{
    return (
        <div>
        <div className='form-group'>
        <label htmlFor="">First Number</label>
        <input onChange={props.first} type="text" placeholder='Type First Number' className='form-control'/>
        </div>
        <div className='form-group'>
        <label htmlFor="">Second Number</label>
        <input onChange={props.second} type="text" placeholder='Type Second Number' className='form-control'/>
        </div>
        </div>
    );
}