import {createStore} from 'redux';
import {calcReducer} from '../reducers/calcreducer';
export const store = createStore(calcReducer);
console.log("Store Created ",store.getState());
store.subscribe(()=>{
    console.log("Store is Infinite Listener.....");
});
