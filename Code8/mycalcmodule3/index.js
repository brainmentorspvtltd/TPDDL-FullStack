const obj = require("./calc");
const calcObject = {
    add(first=0, second=0){
        return first + second;
    },
    sub(first , second){
        return obj.subtract(first, second);
    }
}
module.exports=calcObject;