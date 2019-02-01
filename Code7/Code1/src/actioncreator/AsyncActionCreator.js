import {actionCreator} from './actioncreator';
import axios from 'axios';
import {URL} from '../utils/url';
export const asyncActionCreator=()=>{
    return dispatch=>{
        // Asynch Coding
        axios.get(URL.QUESTION_URL).then(response=>{
            //console.log("response is ",response.data);
            dispatch(actionCreator(response.data,'SERVER_DATA'));
        }).catch(e=>{
            //console.log("Error is ",e);
             dispatch(actionCreator({error:'Server Issue'},'FAIL'));
        })
        //fetch("http://localhost:9999/questions").then(response=>{
            //return response.json();
        // }).then(data=>{
        //     console.log("After Then..... ",data);
        //     dispatch(actionCreator(data,'SERVER_DATA'));
        // }).catch(err=>{
        //     dispatch(actionCreator({error:'Server Issue'},'FAIL'));
        // })
    }
}