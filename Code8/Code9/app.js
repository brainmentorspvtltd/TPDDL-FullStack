const express = require("express");
const app  = express();
const bodyParser  = require('body-parser');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',require("./routes/user"));
const loadModels = require("./utils/loadmodels");
loadModels(app);
// app.listen(process.env.PORT || 1234, ()=>{
//     console.log("Server Start 1234");
// })