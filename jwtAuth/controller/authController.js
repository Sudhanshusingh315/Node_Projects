// #### all imports #### 
const express = require('express');
const User = require('../model/userModel');
const {validationResult} = require('express-validator');
const { generateToken } = require('../helpers/token');
const bcrypt = require('bcrypt');

// #### Methods ####
const auth = async(req,res) =>{

    const {email,password} = req.body;
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({
            success:false,
            message:"Email or Password Incorrect",
        });
    }

    let user = null;
    user = await User.find({email});

    const verified = bcrypt.compare(password,user?.password); 

    if(user && verified){
        const token = generateToken({user:user?.name,email:user?.email}) 
        return status(200).json({
            success:true,
            message:'Login successful',
            data:{token}
       }) 
    }
    
}

module.exports = {
    auth
}