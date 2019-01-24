import React from 'react';
import {Cart} from './Cart';
export const Item = (props=>{

    return (
        <tr>
            <td>{props.item.id}</td>
            <td>{props.item.name}</td>
            <td>{props.item.price}</td>
            <td><img style={{width:'100px',height:'100px'}} src={props.item.url}/></td>
            <td><Cart isAddedFlag={props.isAddedFlag} item={props.item}/></td>

        </tr>
    )
});