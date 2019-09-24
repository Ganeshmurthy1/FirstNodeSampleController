// Dependencies

const express = require('express');
const router = express.Router();

//models
const EmployeeDetails = require('../models/employeeData');

//Routes
router.get('/',(req,res,next) => {
    EmployeeDetails.find({},(err,obj)=> {
        if(err){
                return res.json({status: "error",msg:"error"})
            }
            return res.json({ status:'Success',data:obj});
    })
})

router.post('/',(req,res,next) => {
    console.log("ree",req);
    const employee = new EmployeeDetails({
        userid : req.body.userid,
        name:req.body.name,
        age: req.body.age,
        designation:req.body.designation
        
    })
    employee.save()   
    .then(data =>{
        res.json(data);
    })
    .catch(err => {
        res.json({message : "error"});
    })
});

router.delete('/',(req,res,next) => {
    console.log("reqbody",req.body);
    console.log("reqparam",req.params);
    
    EmployeeDetails.findByIdAndRemove({_id : req.body.id},function(err,docs){
        if(err)
            res.json(err);
            else
            res.json({message : "Success"});
    })
});
// Return modules
module.exports = router;