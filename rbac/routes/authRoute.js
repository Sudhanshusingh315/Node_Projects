const express = require('express');
const router = express.Router();
const {registerValidator}= require('../helpers/validator');
const {registerUser} = require("../controllers/authController");


router.post('/register',registerValidator,registerUser);

module.exports = router; 