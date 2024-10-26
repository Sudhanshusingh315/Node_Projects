const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator')
const {constant} = require('../constants/constans')
const mail = require('../helpers/mailer')
// Methods
const userRegister = async(req,res) =>{
    try{

        const error = validationResult(req);

        if(!error.isEmpty()){
            return res.status(400).json({
                success:false, 
                message:'Request validation Failed',
                data:error
            })
        }

        const {name, email, mobile, password} = req.body;

        let user = null; 

        user = await User.findOne({email});

        if(!user) {
            const hashPassword = await bcrypt.hash(password,10);
            const user = new User({
                name,
                email,
                mobile,
                password : hashPassword
            })

            const newUser = await user.save();

            const msg = `<p>Hello, ${name}, Please <a href=${process.env.NODE_ENV==='production' ? constant.production_url : constant.dev_url}>Verify</a></p>`
            // send mail for verfication
            await mail.sendMail(email,'Verify Email',msg);

            return res.status(201).json({
                success:true, 
                essage:'Registered Successfully!',
                data : newUser
            })
    }
    
    return res.status(400).json({
            success: false,
            message:'Email Already Exists!'
    })

    }catch(error){
        return res.status(400).json({
            success: false,
            message:error.message
        })
    }
}

module.exports = {
    userRegister,
}