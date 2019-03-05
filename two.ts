
function error():never{
    throw new Error("SOme Error ");
}

var dbConnect = false;
if(dbConnect){
    console.log("DB Connect")
}
else{
    error();
}

// interface with function 
interface Calc{
    (x:number,y:number):number;
}
var e1:Calc ;
function addition(x:number, y:number):number{
    return x  + y;
}
function show():void{
    console.log("I am Show");
}
//e1 = show;
e1  = addition;
interface AccountType{
    id:number;
    name:string;
    balance:number;
}
// interface with variable
var savingAccount:AccountType = {id:1001, name:'Ram',balance:8888};
// What to do
interface IPlayer{
    run():void;
    jump():void;
}
interface StarPlayer{
    hide():void;
}
// interface with interface
interface HybridPlayer extends IPlayer, StarPlayer{

}
class A1{

}
// interface with class
// How to do
class RedPlayer extends A1 implements HybridPlayer{
    run(){

    }
    jump(){

    }
    hide(){

    }
}