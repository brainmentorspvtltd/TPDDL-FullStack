import React from 'react';
export const Input=(props)=>{
    return (
          <div>
                <label htmlFor="">First Number</label><input onChange={(e)=>{
                    props.takeinput(e,'first');
                }} placeholder='Type First Number' type="text"/>
                <br/>
                <label htmlFor="">Second Number</label>
                <input onChange={(e)=>{
                    props.takeinput(e,'second');
                }} placeholder='Type Second Number' type="text"/>
            </div>
    )
}