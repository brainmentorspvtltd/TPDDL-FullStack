
window.addEventListener("load",bindEvents);
function bindEvents(){
    document.getElementById("compute").addEventListener("click",doCompute);
}

function doCompute(){
    var basicSalary = document.getElementById("basicsalary").value;
    console.log("Basic Salary is "+basicSalary);
    salaryOperation.takeSalary(basicSalary);
    printSalaryDetails();
    //document.getElementById("hra").innerText  =salaryOperation.hra();

    //document.getElementById("da").innerText = salaryOperation.da();
    //alert("Compute Call ");
}
function createTag(key, value){
    var pTag  = document.createElement("p");
    pTag.innerText = key +" is " + value;
    if(key=='ns'){
       pTag.className = value>500000?'green':'red';
    }
    document.getElementById("result").appendChild(pTag);
}

function printSalaryDetails(){
    document.getElementById("result").innerHTML = "";
    for(let key in salaryOperation){
        if(key=='basicSalary' || key=='takeSalary'){
        continue;
        }
       
        createTag(key,salaryOperation[key]());
        //console.log(key , "   ", salaryOperation[key]());
        }
}



