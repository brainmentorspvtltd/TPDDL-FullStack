const express = require("express");
const app = express();
const multer = require("multer");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(express.static('public'));
const fileStorage = multer.diskStorage({
    destination:(req,file,next)=>{
        console.log("File Destination ",file);
        next(null,'./uploads');
    },
    filename:(req,file,next)=>{
        console.log("File  is ",file);
        next(null, 'Sample'+'_'+new Date().toISOString()+".xlsx");
    }

});
const fileFilterFn = (req,file,next)=>{
    console.log("FILE IS ",file);
    let error = null;
    let isMimeMatch ;
    if(file.mimetype=='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.mimetype=='application/msexcel' || file.mimetype=='application/vnd.ms-excel'){
        isMimeMatch = true;

        next(error,isMimeMatch);
    }
    else{
        isMimeMatch = false;
        
        console.log("Mime not Match ",error, " isMimeMatch ",isMimeMatch);
        next(error,isMimeMatch);
    }
}

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());
//app.use(multer().single('productfile'));
app.use(multer({storage:fileStorage,limits:{fileSize:5*1024*1024

},fileFilter:fileFilterFn}).single('productfile'));
app.use('/',require("./routes/uploadroute"));
app.use('/',require("./api/productRoutes"));
// Error Handling Middleware
app.use(function (err, req, res, next) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      res.send({ result: 'fail', error: { code: 1001, message: 'File is too big' } })
       
    }
  
    // Handle any other errors
  });
app.listen(process.env.PORT || 1234,(err)=>{
    if(err){
        throw err;
    }
    else{
        console.log('Server Start');
    }
})