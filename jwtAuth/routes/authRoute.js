const express = require('express');
const router = express.Router();
const {loginValidator} = require('../helpers/validation');
const authController = require('../controller/authController');
// auth router
router.post('/login',loginValidator,authController.auth)

module.exports = router;