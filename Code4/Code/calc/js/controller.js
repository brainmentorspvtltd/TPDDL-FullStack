window.addEventListener("load",bindEvents);
function bindEvents(){
    document.querySelector("#num").addEventListener("change",compute);
    document.querySelector("#compute").addEventListener("click",compute);
    document.querySelector("#clear").addEventListener("click",()=>{document.querySelector("#num").value='';
    document.querySelector("#num").focus();
});
    var buttons = document.querySelectorAll("button");
    buttons.forEach(currentButton=>{
        if(currentButton.innerText!='=' && currentButton.innerText!='C'){
            currentButton.addEventListener("click",takeInput); // button.takeInput()
        }
    })

}
 const compute =()=>{
    console.log("Compute Call") 
    if(document.querySelector("#num").value){
    document.querySelector("#num").value = eval(document.querySelector("#num").value);
    }
 }

function takeInput(){
    document.querySelector("#num").value +=this.innerText;

}