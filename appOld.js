var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/RestApi");
var Schema = mongoose.Schema;
var userSchema = new Schema({
	"userid":Number,
	"name": String,
	"age": Number,
	"design" : String
});

var user = mongoose.model("users",userSchema);
var app = express();
app.use(bodyParser());


app.get('/api/users',function(req,res){
	console.log("reqqqq",req);

user.find({},function(err,obj){
	if(err){
			return res.json({status: "error",msg:"error"})
		}
		return res.json({ status:'Success',data:obj});
})
});
app.post('/api/users',function(req,res){
	var data = req.body;
	user.create(data,function(err,obj){
		if(err){
			return res.json({status: "error",msg:"error"})
		}
		return res.json({ status:'Success',data:obj});

	})
	
})

app.post('/api/users/delete', function(req,res) {
 
        user.deleteOne({ "_id": req.body.id }, function(err, results) {
           
			return res.json({ status:'Success',data:results});
        });
		

});


app.get(/.*?\.\w{2,4}$/,function(req,res){
	console.log("req url",req.url);
	console.log("dir",__dirname);
res.sendFile(__dirname+'/client/'+req.url);
})
app.get("*",function(req,res){
res.sendFile(__dirname+'/client/index.html')
})


app.listen(9000,function(){
	console.log("Listening To Port 9000");
})