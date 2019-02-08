// function show(x=0, y=0){
//     return x + y;
// }
// function test(){
//     console.log("I am Test");
// }

const obj = {
    show(x=0, y=0){
        return x +y;
    },
    test(){
        console.log("I am Test");
    }

}
module.exports = obj;

//module.exports.a = show;
//module.exports.b = test;
// var d = show(10,20);
// console.log("D is ",d);