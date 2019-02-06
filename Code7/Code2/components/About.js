import React from 'react';
export const About=(props)=>{
    return (
        <div>
            <h1>I am About Page {props.match.params.name} {props.match.params.desc}</h1>
        </div>
    )
}