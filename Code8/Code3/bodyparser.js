
function doBodyParse(request){
    console.log("I am in Body Parser");
    var data = '';
    request.on('data',(chunk)=>{
        console.log('::::::Chunk is ',chunk);
           data+=chunk; 
    });
    request.on('end',()=>{
        const qs = require("querystring");
            var obj = qs.parse(data);
            request.body = {};
            request.body = obj;
            console.log("End ::: ",obj);
            //return obj;
    });
    console.log("Ending Body Parser ");
}
module.exports= doBodyParse;