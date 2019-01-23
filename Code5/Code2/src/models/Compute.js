export const Compute ={
    add(first, second){
        return parseInt(first) + parseInt(second);
    },
    subtract(first, second){
        return first - second;
    },
    multiply(first, second){
        return first * second;
    },
    divide(first, second){
        return first / second;
    }
}