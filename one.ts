var a = 100;
//a = 'Amit';
//var b  = '1234';
//b = 1234;
var f:boolean = true;
var n:string = "Amit";
var x:number = 10;
var y :number = 20;
var z:number  = x + y;
console.log(' Z is ',z);
function add(x?:number, y?:number):number{
    return x||0 + y||0;
}
var result:number = add(10,20);
add();
console.log(`Result is ${result}`);
var arr:string[] = ["Ram","Shyam"];
var w:Array<string> = new Array<string>();
var t1:[string,number,boolean] = ['Abcd',1001,true];
console.log(t1[0], t1[1],t1[2]);
w.push("Abcd");
//w.push(100);
var g:string|number ;
g ='Ram';
g = 10;
//g = false;
var m:{id:number, name:string, salary:number} = { name:'Ram',salary:9999,id:1001};
type myType= {id:number, name:string, salary:number, bonus:number};
var emp:myType = {id:1001, name:'Ram',salary:88888, bonus:1111};
var emp2:myType = {id:1002, name:'Shyam',salary:8888.98, bonus:1111};

abstract class Person{
    protected id:number;
    public name:string;
    constructor(id:number,name:string,private salary:number, protected bonus:number){
        this.id = id;
        this.name = name;
    }
    abstract show():void;
    print():void{
        console.log('Id is '+this.id +' Name is '+this.name+' Salary is '+this.salary+' Bonus '+this.bonus);
    }
}
// var person:Person = new Person(1001,'Ram',9999,777);
// person.print();

class Employee extends Person{
    constructor(public id:number, private dept:string){
        super(1001,'Ram',9999,777);
    }
    show():void{
        console.log('Show ');
    }
    print():void{
        super.print();
        console.log('Id is '+this.id+' Name is '+this.name+' Dept is '+this.dept );
    }
    display():void{
    console.log('I am Emp Disp');
    }
}
var employee:Person = new Employee(1002,'IT'); //Upcasting
//var employee:Employee = new Employee(1002,'IT');
employee.print();
if(employee instanceof Employee){
    var e:Employee = employee as Employee;  //Downcasting
    e.display();
}


