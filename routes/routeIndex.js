const express = require('express');
const router = express.Router();
const app = express();



//Import Routes
const employeeRoutes = require('./employeeRoute');

router.use('/employee',employeeRoutes);

module.exports = router;
