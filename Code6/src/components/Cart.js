import React from 'react';
export const Cart = (props)=>{
    var jsx = props.item.isAdded?<p>Item in Cart</p>:<p>Item Not in Cart</p>;
    return(
        <>
        <button onClick={()=>{
            console.log("Add to Cart Called... ",props.item.isAdded);
            props.item.toggleAdd();
            console.log("NOw Status is Add to Cart Called... ",props.item.isAdded);
            props.isAddedFlag( props.item.isAdded);
            }} className='btn btn-primary'><i className="fas fa-cart-plus"></i>Add to Cart</button>
        {jsx}
        </>
    )
}