// Dependencies

const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const productSchema = new Schema({
    "productId":String,
	"name": String,
	"type": String,
    "quantity" : Number,
    "description" : String,
    "price" : Number
})
// Return Model
module.exports = mongoose.model('products',productSchema);