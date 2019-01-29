export const calcReducer=(state={result:0},action)=>{
    var result =0;
    if(action.type=='add'){
        result = parseInt(action.payload.firstNumber) + parseInt(action.payload.secondNumber);
    }
    else
    if(action.type=='sub'){
        result = parseInt(action.payload.firstNumber) - parseInt(action.payload.secondNumber);
    }
    console.log("Result is ",result);
    return {...state,'result':result};
}