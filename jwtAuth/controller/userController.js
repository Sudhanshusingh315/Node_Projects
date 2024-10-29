const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator')
const {constant} = require('../constants/constans')
const mail = require('../helpers/mailer')
// Methods
const userRegister = async(req,res) =>{
    try{

        const error = validationResult(req);

        // checking for validation failed

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

        // Checking if the user already exits throw error if does
        // else create new user and send the verification email

        if(!user) {
            const hashPassword = await bcrypt.hash(password,10);
            const user = new User({
                name,
                email,
                mobile,
                password : hashPassword
            })

            const newUser = await user.save();
            
            let message =` <p>Hello ${name}, Please, 
                
                <a href=${process.env.NODE_ENV==='production' ? constant.production_url : `${constant.dev_url}/auth?id=${user.id}`}>Verify yourself</a>
            
            </p>`
            
            await mail.sendEmail(email,"Email verfication",message)

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

const userVerification = async(req,res) =>{
    // check for the id
    // make sure it valid, if valie make sure use is not verfired already
    // the just verify
    let id = req.query.id;
    if(id){
        try{
            let user = null;
            user = await User.findById(id);            

            if(user?.is_Verified){
                return res.status(401).json({
                    status:false,
                    message:"Email Verified already"
                })
                }
                
            await User.findByIdAndUpdate(id,{
                $set:{
                    is_Verified:true
                }
            })

            return res.status(404).json({
                status:true,
                message:"Verification Successful"
            })

        }
        catch(err){
            
            return res.status(404).json({
                status:false,
                message:"Invalid Id"
            })
    }    
    }

    
    return res.status(404).json({
        status:false,
        message:"Expected Id not undefined"
    })
}    

module.exports = {
    userRegister,
    userVerification
}