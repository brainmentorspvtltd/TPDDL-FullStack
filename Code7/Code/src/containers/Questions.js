import React from 'react';
import {store} from '../centralstore/store';
import { Question } from '../components/Question';
import { actionCreator } from '../actioncreator/actioncreator';
import {connect} from 'react-redux';
export class Questions extends React.Component{
    constructor(){
        super();
        this.isFinish = false;
        this.state={isFinish:this.isFinish,totalScore:0};
    }
    finishTest(){
        console.log("Finish Test Call ",this.props.ques);
        this.isFinish = true;
        //this.setState({isFinish:this.isFinish});
        let totalScore = this.props.ques.reduce((acc,questionObject)=>{
            console.log("Acc is ",acc , " Score is ",questionObject.score);
            console.log(" Your Ans ",questionObject.yourAns , " Right Ans ",questionObject.rightAnswer);
            if(questionObject.yourAns==questionObject.rightAnswer){
                acc+=questionObject.score;
            }
            return acc;
        },0);
        this.setState({isFinish:this.isFinish,totalScore:totalScore});
    }
    
    componentWillMount() {
        console.log("Load Called...");
        store.dispatch(actionCreator({},'LOAD'));
    }
    takeAnswer(event, yourAns,id){
        console.log("Answer is ",yourAns," Id ",id);
        store.dispatch(actionCreator({id:id, yourAns:yourAns},'UPDATE'));
    }
    render(){
        console.log("Props are ",this.props.ques);
        const finish = this.state.isFinish?<p>Total Score is {this.state.totalScore} </p>: <button onClick={this.finishTest.bind(this)}>Finish Test</button>;
        return(
            <div>
                {this.props.ques.map(questionObject=> <Question isFinish={this.state.isFinish} key={questionObject.id} yourAns={this.takeAnswer.bind(this)} question={questionObject} /> )}
                {finish}
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
