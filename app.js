// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express();
const api = require('./routes/routeIndex')

// express

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




// //Import Routes
 //const employeeRoutes = require('./routes/employeeRoute');

 // Routes
//app.use('/employee',employeeRoutes);

// Routes
 app.use('/api',api);









app.get('/',(req,res)=>{
	 res.send("we are on home");
});
// mongoose
mongoose.connect("mongodb://localhost:27017/RestApi" ,()=>{
	console.log("Db connected");
});

// Start Server
app.listen(9000,function(){
	console.log("Listening To Port 9000");
})