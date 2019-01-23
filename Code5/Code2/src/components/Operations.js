import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export const Operations  = (props)=>{
    return (
        <div>
           <button  onClick={()=>{
               props.opr('add')}} className='btn btn-primary mr-2'>Add</button>
           <button onClick={()=>{
               props.opr('subtract')}} className='btn btn-danger mr-2'>Subtract</button>
           <button onClick={()=>{
               props.opr('multiply')}} className='btn btn-info mr-2'>Multiply</button>
           <button  onClick={()=>{
               props.opr('divide')}}className='btn btn-dark'>Divide</button>
        </div>
    )
}