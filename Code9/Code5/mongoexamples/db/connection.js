const mongoose = require("mongoose");
const db = require("../utils/config").dbConfig;
mongoose.connect(db,{poolSize:10},()=>{
    console.log("Connection Created...");
});
module.exports = mongoose;
//console.log("DB Connection Establish");