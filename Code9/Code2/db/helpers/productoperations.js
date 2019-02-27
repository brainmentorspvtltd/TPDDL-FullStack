const ProductModel = require("../models/productschema");
const logger = require("../../utils/logger");
const productOperations = {
    add(productObject,res){
        logger.debug("During Add Product is ",productObject);
        ProductModel.create(productObject,(err)=>{
               if(err){
                logger.error("Error Occur in Add  ",err);
                res.status(500).json({"error":"Unable to Add Record "});
               } 
               else{
                res.status(200).json({"message":"Product Added SuccessFully","id":productObject.id});
               }
        })
    },
    search(price=0,res){
        // ProductModel.findById()
        // ProductModel.findOne({},(err,doc)=>{

        // })
        logger.debug("Inside Product Operations Search ",price);
         ProductModel.find({},(err,docs)=>{
             if(err){
                logger.error("Some Error Occur in Search ",err);
                res.status(500).json({"error":"Unable to Find DB Error "});
             }
             else{
                 if(docs && docs.length>0){
                    logger.debug("Data Found ",docs);
                    res.status(200).json({
                        "products":docs,"message":"Record Found"
                    })
                 }
                 else{
                    logger.debug("No Data Found ",docs);
                    res.status(404).json({"message":"No Record Found"});
                 }
             }
         })   
    },
    update(){

        var pr = new ProductModel(obj);
        pr.save()
        //ProductModel.findByIdAndUpdate()
    },
    remove(){
            ProductModel.findByIdAndRemove({},(err)=>{
                if(err){

                }
                else{

                }
            })
           // ProductModel.findOneAndDelete()
    }
}
module.exports = productOperations;