const express = require('express');
const router = express.Router();
const userCOntroller = require('../controller/userController');
const {registerValidtor} = require('../helpers/validation')
router.use(express.json());

// test
router.get('/test',(req,res)=>{
    res.status(200).json({
        status:true,
        message:"Up and running"
    })
})


router.post('/register',registerValidtor ,userCOntroller.userRegister);

module.exports = router;
