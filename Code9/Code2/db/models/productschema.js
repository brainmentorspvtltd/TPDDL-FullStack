const mongoose = require('../connection');

var ProductSchema = mongoose.Schema;
var productModel = new ProductSchema({
  id: { type: Number },
  name: { type: String, trim: true,unique:true,required:true ,lowercase:true},
  price: {type:Number,default:0},
  path: String
})
const ProductModel = mongoose.model('products', productModel)
module.exports = ProductModel;
