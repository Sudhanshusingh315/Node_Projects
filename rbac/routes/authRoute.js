const express = require('express');
const router = express.Router();
const {registerValidator,loginValidator}= require('../helpers/validator');
const {registerUser,login} = require("../controllers/authController");


router.post('/register',registerValidator,registerUser);

router.post('/login',loginValidator,login)

module.exports = router; 