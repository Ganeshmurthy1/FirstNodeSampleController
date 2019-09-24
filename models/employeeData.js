// Dependencies

const mongoose = require('mongoose');

//Schema
var Schema = mongoose.Schema;
var employeeSchema = new Schema({   
	"name": String,
	"age": Number,
	"designation" : String
})
// Return Model
module.exports = mongoose.model('users',employeeSchema);