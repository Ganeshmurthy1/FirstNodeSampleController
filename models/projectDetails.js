// Dependencies

var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var Schema = mongoose.Schema;
var projectSchema = new Schema({
    "projectId":Number,
	"name": String,
	"type": String,
    "ui_type" : String,
    "api_type" : String
})
// Return Model
module.exports = restful.model('projects',projectSchema);