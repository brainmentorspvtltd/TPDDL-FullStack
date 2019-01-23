import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export const Output  = (props)=>{
    return (
        <div>
            <h1 className='alert-info'>Result is {props.result}</h1>
        </div>
    )
}