const xlsxj = require("xlsx-to-json");
function convertXLStoJSON(filePath){
  xlsxj({
    input: filePath, 
    output: "./uploads/output.json"
    //sheet: "tags"
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.log("JSON Result is ",result);
    }
  });
}
convertXLStoJSON('/Users/amit/Downloads/Brainmentors training schedule.xlsx');