import React from 'react';
export const ViewCart = (props)=>{
    return(
        <button className='btn btn-success'><i className="fas fa-shopping-cart"></i>View Cart<i>{props.total}</i></button>
    )
}