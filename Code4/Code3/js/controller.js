window.addEventListener("load",init);
var counter ;
function init(){
    counter = autoGen();
    bindEvents();
    printId();
    enableDisable();
    printCounts();
}
   

function enableDisable(){
    var mark = questionOperations.countMark();
   
    document.querySelector("#del").disabled=!mark>0;
}

function printCounts(){
    document.querySelector("#mark").innerText = questionOperations.countMark();
    document.querySelector("#unmark").innerText = questionOperations.countUnmark();
    document.querySelector("#total").innerText = questionOperations.questions.length;
}

const printId=()=>document.querySelector('#id').innerText = counter.next().value;

function bindEvents(){
    document.querySelector("#add").addEventListener("click",addQuestion);
    document.querySelector("#clearall").addEventListener("click",clearFields);
    document.querySelector("#del").addEventListener("click",deleteRecord);
    document.querySelector("#load").addEventListener("click",loadRecord);
    document.querySelector("#save").addEventListener("click",saveRecord);
}
function loadRecord(){
    if(localStorage){
        if(localStorage.questions){
            var questions = JSON.parse(localStorage.questions);
            questionOperations.questions = questions;
            printQuestions(questionOperations.questions);
        }
        else{
            alert("Nothing to Load...");
        }
    }
    else{
        alert("Browser is out dated...");
    }
}
function saveRecord(){
    if(localStorage){
        let arr = questionOperations.questions;
        let json =JSON.stringify(arr);
        localStorage.questions = json;
        alert("Record Saved...");
    }
    else{
        alert("Your Browser is Outdated Can't Save...");
    }
}
function deleteRecord(){
    var arr = questionOperations.deleteRecords();
    printQuestions(arr);
    printCounts();

}


function edit(){
    console.log("Edit Call",this.getAttribute("id"))
}
function trash(){
    console.log("Delete Call",this); // <i></i>
    var tr = this.parentNode.parentNode;
    console.log("We are on TR ",tr);
    tr.classList.toggle("alert-danger");
    var currentId = this.getAttribute("id");
    questionOperations.mark(currentId);
    printCounts();
    enableDisable();


}
function clearFields(){
    var fields = document.querySelectorAll(".clear");
    fields.forEach(field=>field.value='');
    document.querySelector("#name").focus();
}

function printQuestions(questionArr){
    printCounts();
    var tbody = document.querySelector("#questions");
    tbody.innerHTML = "";
    questionArr.forEach(printQuestion);
}

function printQuestion(questionObject){
    var tbody = document.querySelector("#questions");
    var tr = tbody.insertRow();
    var index = 0;
    for(let key in questionObject){
        if(key=='isMarked'){
            continue;
        }
    tr.insertCell(index).innerText = questionObject[key];
    index++;
    }
    var td = tr.insertCell(index);
    td.appendChild(createIcon("fas fa-edit mr-2",edit,questionObject.id));
    //td.innerHTML = td.innerHTML + "&nbsp;";
    td.appendChild(createIcon("fas fa-trash-alt",trash,questionObject.id));
    //<i class="fas fa-trash-alt"></i>
    
}

function createIcon(className,fn,id){
    //<i class="fas fa-edit"></i>
    var icon = document.createElement("i");
    icon.setAttribute("id",id);
    icon.className=className;
    icon.addEventListener("click",fn);
    return icon;

}

function addQuestion(){
    var question = new Question();
    for(let key in question){
        if(key=='id'){
            let val = document.querySelector("#"+key).innerText;
            question[key] = val;
            continue;
        }
        if(key=='isMarked'){
            continue;
        }
       let val =  document.querySelector("#"+key).value;
       question[key] = val;
    }
    printQuestion(question);
    console.log("Object is ",question);
    questionOperations.add(question);
    printId();
    clearFields();
    printCounts();
}