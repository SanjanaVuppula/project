const express=require('express')
 const router=express.Router();
const EmployeeController=require('../controllers/EmployeeController')
const Employee=require('../models/Employee')

router.post('/add-emp',EmployeeController.createEmployee);

module.exports=router;