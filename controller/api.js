// Dependencies

var express = require('express');
var router = express.Router();


//models
var EmployeeDetails = require('../models/employeeData')

//Routes
router.get('/index', function(req,res){
    res.send("Api is Working");
})
EmployeeDetails.methods(['get','put','post','delete']);
EmployeeDetails.register(router, '/employeeDetails');

// Return modules
module.exports = router;