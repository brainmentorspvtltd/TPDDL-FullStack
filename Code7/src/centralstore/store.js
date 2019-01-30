import {createStore} from 'redux';
import {reducer} from '../reducer/QuestionReducer';
export const store=createStore(reducer);
store.subscribe(()=>{
console.log("subscribe",store.getState());
});
