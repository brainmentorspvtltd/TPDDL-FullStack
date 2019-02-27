
const productRoutes = require("express").Router();
const Product = require("../models/product");
const productOperations = require("../db/helpers/productoperations");
const logger = require("../utils/logger");
productRoutes.get('/fetch/:price?',(req,res)=>{
    logger.debug('inside fetch ',req.params.price);
    var price = req.params.price;
    productOperations.search(price,res);
})
productRoutes.post('/add',(req,res)=>{
var id = req.body.id;
var name = req.body.name;
var price = req.body.price;
var url = req.body.url;
logger.debug('Inside Product Route Post ',id , name , price, url, " Req ",req);
const product = new Product(id, name, price, url);
productOperations.add(product,res);
})
productRoutes.put('/update',(req,res)=>{
    
})
productRoutes.delete('/remoe',(req,res)=>{
    
})
module.exports = productRoutes;