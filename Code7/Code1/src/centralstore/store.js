import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from '../reducer/QuestionReducer';
export const store=createStore(reducer,applyMiddleware(thunk));
store.subscribe(()=>{
console.log("subscribe",store.getState());
});
