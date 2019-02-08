const fs = require("fs");
console.log(__dirname);
console.log(__filename);
console.log("Before Reading a File...");
var content = fs.readFileSync(__filename);
console.log("Content is "+content);
// fs.readFile(__filename,(err,content)=>{
//     if(err){
//         console.log("Error Reading a file",err);
//     }
//     else{
//         console.log("Content is "+content);
//     }
// })
// fs.readFile(__filename,(err,content)=>{
//     if(err){
//         console.log("Error Reading a file",err);
//     }
//     else{
//         console.log("Content is "+content);
//     }
// })
console.log("After Reading a file...");