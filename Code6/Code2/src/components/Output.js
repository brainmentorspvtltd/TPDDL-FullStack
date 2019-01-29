import React from 'react';
import {connect} from 'react-redux';
 const Output=(props)=>{
    return (
        <div>
            <p>Result is {props.result}</p>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        result:state.result
    }
}
var fn = connect(mapStateToProps);
export default fn(Output);
//export connect(mapStateToProps)(Output)