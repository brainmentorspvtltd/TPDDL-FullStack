import React from 'react'
export const Question=(props)=>{
    
    return(
        <div>
            <label htmlFor="">{props.question.id}</label>
            <br/>
            <label htmlFor="">{props.question.name}</label>
            {printJSX(props)}
            
        </div>
    )
    
}
function printJSX(props){
    if(props.isFinish){
        return (
            <>
            <p>Your Ans {props.question.yourAns?"True":"False"} Right Ans {props.question.rightAnswer?"True":"False"}</p>
            <p>Score is {props.question.yourAns==props.question.rightAnswer?props.question.score:0}</p>
            </>
        )
    }
    else{
        return (
            <>
            <button onClick={(e)=>{
                props.yourAns(e,true,props.question.id)
                }}>True</button>
            <button onClick={(e)=>{
                props.yourAns(e,false,props.question.id) }}>False</button>
            </>
        )
    }
}