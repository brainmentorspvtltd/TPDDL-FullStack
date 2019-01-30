import {questionOperations} from '../model/QuestionOperations';
export const reducer=(state={questions:[]},action)=>{
if(action.type=='LOAD'){
  return{...state,'questions':questionOperations.loadQuestion()};  
  
}
return state;
}