window.addEventListener("load",bindEvents);
function bindEvents(){
    document.querySelector("#add").addEventListener("click",addQuestion);
}

function edit(){
    console.log("Edit Call",this.id)
}
function trash(){
    console.log("Delete Call",this.id)
}

function printQuestion(questionObject){
    var tbody = document.querySelector("#questions");
    var tr = tbody.insertRow();
    var index = 0;
    for(let key in questionObject){
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
       var val =  document.querySelector("#"+key).value;
       question[key] = val;
    }
    printQuestion(question);
    console.log("Object is ",question);
    questionOperations.add(question);
}