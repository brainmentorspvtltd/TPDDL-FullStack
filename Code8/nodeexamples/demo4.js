const fs = require("fs");
console.log("Before Read");
var stream = fs.createReadStream('/Volumes/AmitPassPort/Summer-June-18/java/Game.mov');
var wstream = fs.createWriteStream('/Volumes/AmitPassPort/Summer-June-18/java/Game211.mov')
//stream.pipe(wstream);
stream.pipe(process.stdout);
// stream.on('data',(chunk)=>{
//     wstream.write(chunk);
//     console.log("Chunk is ",chunk);
// });
// stream.on('end',()=>{
//     console.log("Stream End ");
// })
// fs.readFile("/Volumes/AmitPassPort/Summer-June-18/java/DataTypesDay2.mov",(err,content)=>{
//     if(err){
//         console.log("Can't Read ",err);
//     }
//     else{
//         console.log("Content is "+content);
//     }
// })
console.log("After Read ");