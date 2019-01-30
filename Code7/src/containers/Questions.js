import React from 'react';
import {store} from '../centralstore/store';
import { Question } from '../components/Question';
import { actionCreator } from '../actioncreator/actioncreator';
import {connect} from 'react-redux';
export class Questions extends React.Component{
    constructor(){
        super();
        this.state={};
    }
    
    componentWillMount() {
        console.log("Load Called...");
        store.dispatch(actionCreator({},'LOAD'));
    }
    
    render(){
        console.log("Props are ",this.props.ques);
        return(
            <div>
              <Question />  
            </div>
        );
    }

}
const mapStateToProps = (state)=>{
    console.log("Map State to props ",state);
    return {
        ques: state.questions
    }
}
const fn = connect(mapStateToProps);
export default fn(Questions)
