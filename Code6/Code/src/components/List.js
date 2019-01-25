import React from 'react';
import { Item } from './Item';
export const List = (props)=>{
    console.log("List is ",props.items);
    return (
        <>
        <table className='table table-bordered'>
            <tbody>
            {props.items.map(itemObject=><Item isAddedFlag={props.isAddedFlag} key={itemObject.id} item={itemObject}/>)}
            </tbody>
            
        </table>
        <h2>Total Records {props.items.length}</h2>
        </>
    )
}