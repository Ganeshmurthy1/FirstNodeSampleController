const express = require('express');
const router = express.Router();
const app = express();



//Import Routes
const employeeRoutes = require('./employeeRoute');
const productRoutes = require('./productDetails');



router.use('/employee',employeeRoutes);
router.use('/product',productRoutes);




module.exports = router;
