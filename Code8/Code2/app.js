const http = require("http");
const chalk = require("chalk");

function isStaticFile(fileName){
    const extensions = [".html",".css",".js",".png",".jpeg"];
    const path = require("path");
    var ext = path.extname(fileName);
    return extensions.indexOf(ext)>=0;
}

function handleRequestResponse(request, response){
    
    var url = request.url;
    var method = request.method;
    console.log("Here Comes the Request....", request.url," Method is ",method);
    if(isStaticFile(url)){
        const path = require("path");
        var fullPath = path.join(__dirname,"/public"+url);
        console.log("Full Path is ",fullPath);
        const fs = require("fs");
        const readStream = fs.createReadStream(fullPath);
        readStream.pipe(response);
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
server.listen(process.env.PORT || 1234,()=>{
    console.log(chalk.green("Server Start..."));
})