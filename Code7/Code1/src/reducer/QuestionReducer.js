import {questionOperations} from '../model/QuestionOperations';
export const reducer=(state={questions:[]},action)=>{
if(action.type=='LOAD'){
  return{...state,'questions':questionOperations.loadQuestion()};  
  
}
else
if(action.type=='UPDATE'){
  return {...state,'questions':questionOperations.updateAns(action.payload.id,action.payload.yourAns)}
}
else
if(action.type=='SERVER_DATA'){
  return {...state,'questions':action.payload}
}
return state;
}