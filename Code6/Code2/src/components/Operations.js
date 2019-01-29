import React from 'react';
export const Operations = (props)=>{
return(
    <>
    <button value="add" onClick={(e)=>{
        props.takeinput(e,'opr');
        }} >Add</button>
    <button value="sub" onClick={(e)=>{
        props.takeinput(e,'opr');
        }} >Subtract</button>
    </>
)
}