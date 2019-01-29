export const calcActionCreator=(first, second,opr)=>{
    return {
        'type':opr,
        'payload':{'firstNumber':first,'secondNumber':second}
    }
}