const express = require("express");
const app = express();
const fs = require('fs');
app.use(express.static('public'));

app.get('/score',(req,res)=>{
    // Set Header 
    res.writeHead(200, {
        'content-type' : 'text/event-stream',
        'connection' : 'keep-alive',
        'Access-Control-Allow-Origin' : '*'
    });
    // Emit Event 
    fs.watchFile(__dirname+'/public/score.txt', function(){
        var content = fs.readFileSync(__dirname+'/public/score.txt');
        res.write('event: servermessage\n');
        res.write('data: Score is ' +content + '\n\n');
    });

})
app.listen(1234,()=>{
    console.log("Server Start");
})