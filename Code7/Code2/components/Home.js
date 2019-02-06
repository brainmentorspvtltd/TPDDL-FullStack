import React from 'react';
export const Home=(props)=>{
    return (
        <div>
            <h1>I am Home Page</h1>
            <button onClick={()=>{
                props.history.replace('/contact');
                }}>Contact</button>
        </div>
    )
}