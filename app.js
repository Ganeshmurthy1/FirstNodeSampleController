// Dependencies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

// mongoose
mongoose.connect("mongodb://localhost:27017/RestApi");

// express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api',require('./controller/api'));

// Start Server
app.listen(9000,function(){
	console.log("Listening To Port 9000");
})