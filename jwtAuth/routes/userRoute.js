const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const {registerValidtor} = require('../helpers/validation')
const {tokenVerifyMiddleware} = require('../middleware/authenticationMiddleware');
router.use(express.json());

// test
router.get('/test',(req,res)=>{
    res.status(200).json({
        status:true,
        message:"Up and running"
    })
})


router.post('/register', registerValidtor ,userController.userRegister);

router.get('/mail-verification',userController.userVerification);

router.post('/profile',tokenVerifyMiddleware,userController.userProfile);



module.exports = router;
