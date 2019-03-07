import React from 'react';
import {MyContext} from './MyContext';
export const C = ()=>{
    var obj = {id:1001, name:'Ram'};
    return (
        <div>
            <MyContext.Consumer>
                {
                    (context)=>(<div> <button onClick={()=>{
                        context.add(9000,obj);
                        }}>Share</button><h1>C Component {context.x}</h1></div>)
                }
            
            </MyContext.Consumer>
        </div>
    );
}