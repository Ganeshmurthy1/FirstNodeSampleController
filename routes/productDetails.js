// Dependencies

const express = require('express');
const router = express.Router();

//models
const ProductDetails = require('../models/productDetails');

//Routes
router.get('/',(req,res,next) => {
    ProductDetails.find({},(err,obj)=> {
        if(err){
                return res.json({status: "error",msg:"error"})
            }
            return res.json({ status:'Success',data:obj});
    })
})

router.post('/',(req,res,next) => {
    console.log("ree",req.body);
    console.log("ree",req.params);
    const product = new ProductDetails({
        productId : req.body.productId,
        name:req.body.name,
        type: req.body.type,
        quantity:req.body.quantity,
        description:req.body.description,
        price : req.body.price
 
        
    })
    product.save()   
    .then(data =>{
        console.log('dataaaaaaaaaaaaa',res)
        res.json(data);
    })
    .catch(err => {
        console.log('errrrrrrrrrr',res)
        res.json({message : "error"});
    })
});

router.delete('/',(req,res,next) => {
    console.log("reqbody",req.body);
    console.log("reqparam",req.params);
    
    ProductDetails.findByIdAndRemove({_id : req.body.id},function(err,docs){
        if(err)
            res.json(err);
            else
            res.json({message : "Success"});
    })
});
// Return modules
module.exports = router;