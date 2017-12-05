// Dependencies

var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var Schema = mongoose.Schema;
var employeeSchema = new Schema({
    "userid":Number,
	"name": String,
	"age": Number,
	"design" : String
})
// Return Model
module.exports = restful.model('users',employeeSchema);