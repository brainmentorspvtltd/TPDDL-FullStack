const http = require("http");
const chalk = require("chalk");

var portNumber =1234;
var env;
process.argv.forEach((val, index) => {
    console.log("Index ",index, " VAL ",val);
    
    //portNumber = val;
   if(index==2){
       portNumber = val;
   }
   else
   if(index==3){
       env = val;
   }
  // console.log("Index ",index,"Process Argv ",portNumber, env);
  });
  

process.on('uncaughtException', (err) => {
    console.log('Server CRASH ......',err);
    const fs = require("fs");
    fs.writeFileSync('error.log',err);  
   
    });
    

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
  });

function isStaticFile(fileName){
    const extensions = [".html",".css",".js",".png",".jpeg"];
    const path = require("path");
    var ext = path.extname(fileName);
    return extensions.indexOf(ext)>=0;
}

function handleRequestResponse(request, response){
    // if(10>2){
    // throw new Error("Server Error Occur")
    // }
    var url = request.url;
    var method = request.method;
    console.log("Here Comes the Request....", request.url," Method is ",method);
    if(url=='/'){
        url = '/index.html';
        
    }
    
    if(isStaticFile(url)){
        const path = require("path");
        var fullPath = path.join(__dirname,"/public"+url);
        console.log("Full Path is ",fullPath);
        const fs = require("fs");
        const readStream = fs.createReadStream(fullPath);
        readStream.pipe(response);
    }
    else
    if(url.startsWith('/login') && method=='GET'){
        const urlObject = require("url");
        var qs = urlObject.parse(url,true);
        if(qs.query.userid==qs.query.pwd){
            response.write('Welcome '+qs.query.userid);
        }
        else{
            response.write('Invalid Userid or Password');
        }
        response.end();
    }
    else
    if(url=='/login' && method=='POST'){

        const bodyParser= require("./bodyparser");
        console.log("OBJ NOT REC JUST CALLING BODY Parser");
        var obj = bodyParser(request);
        console.log("OBJ REC ", obj);
        /*if(obj.userid == obj.pwd){
            response.write('Welcome '+obj.userid);
        }
        else{
            response.write('Invalid Userid or Password');
        }
        response.end();
        */
        /*var data = '';
        request.on('data',(chunk)=>{
            console.log('Chunk is ',chunk);
               data+=chunk; 
        });
        request.on('end',()=>{
            console.log('Data Rec from Post is ',data);
            const qs = require("querystring");
            var obj = qs.parse(data);
            if(obj.userid == obj.pwd){
                response.write('Welcome '+obj.userid);
            }
            else{
                response.write('Invalid Userid or Password');
            }
            response.end();
            */
        //})
    }
    //if()
   /* if(method=='GET' && url=='/index.html'){
        console.log(__dirname);
        const path = require("path");
        var fullPath = path.join(__dirname,"/public"+url);
        console.log("Full Path is ",fullPath);
        const fs = require("fs");
        const readStream = fs.createReadStream(fullPath);
        readStream.pipe(response);
        //response.write('U r Reqesting for index page');
        //response.end();
    }*/
    else{
    response.write("Hello Client I am Server");
    response.end();
    }
}
const server = http.createServer(handleRequestResponse);
server.listen(process.env.PORT || portNumber,()=>{
    console.log(chalk.green("Server Start...Running in "+env));
})