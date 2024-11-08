const express = require('express');
const router = express.Router();
const {permissionValidator}= require('../helpers/validator');
const {addPermission} = require("../controllers/adminController");


router.post('/add-permission',permissionValidator,addPermission);


module.exports = router; 