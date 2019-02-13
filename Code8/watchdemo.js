const fs = require('fs');
console.log('Waiting for File Changes');
fs.watchFile('/Users/amit/Dropbox/Commands.txt',(c,p)=>{
    console.log('Score Has been Updated...');
    fs.readFile('/Users/amit/Dropbox/Commands.txt',(er,content)=>{
        console.log(""+content);
    })
})