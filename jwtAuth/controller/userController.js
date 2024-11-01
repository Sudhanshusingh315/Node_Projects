const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const { constant } = require("../constants/constans");
const mail = require("../helpers/mailer");
// Methods
const userRegister = async (req, res) => {
    try {
        const error = validationResult(req);

        if (!error.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: "Request validation Failed",
                data: error,
            });
        }

        const { name, email, mobile, password } = req.body;

        let user = null;

        user = await User.findOne({ email });

        if (!user) {
            const hashPassword = await bcrypt.hash(password, 10);
            const user = new User({
                name,
                email,
                mobile,
                password: hashPassword,
            });

            const newUser = await user.save();
            console.log(newUser);
            const msg = `<p>Hello, ${name}, Please <a href=${
                process.env.NODE_ENV === "production"
                    ? constant.production_url
                    : `${constant.dev_url}/api/mail-verificatio?id=${user?.id}`
            }>Verify</a></p>`;
            // send mail for verfication
            await mail.sendMail(email, "Verify Email", msg);

            return res.status(201).json({
                success: true,
                essage: "Registered Successfully!",
                data: newUser,
            });
        }

        return res.status(400).json({
            success: false,
            message: "Email Already Exists!",
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const userVerification = async (req, res) => {
    const id = req.query.id;
    console.log("id is ", id);
    const user = await User.findById(id);

    if (user?.is_Verified) {
        return res.status(400).json({
            success: false,
            message: "User is already verified",
            data: { is_Verified: user?.is_Verified },
        });
    }

    await User.findByIdAndUpdate(
        id,
        {
            $set: {
                is_Verified: true,
            },
        },
        { new: true }
    );

    return res.status(200).json({
        success: true,
        message: "User Verification completed",
        data: null,
    });
};

const resendVerificatioEmail = async (req, res) => {};

const userProfile = async (req, res) => {
    const userData = req.user;
    try{

    let user = await User.aggregate([
        {
            $match: {
                email : userData?.email
            },
        },
        {
            $addFields: {
                id: "$_id",
            },
        },
        {
            $project: {
                _id: 0,
                __v: 0,
                password: 0,
            },
        },
    ]);
    
    return res.status(200).json({
        success:true,
        message:"Successful get profile",
        data:user
    })
    
    }catch(err){
        return res.status(400).json({
            success:false,
            message:"Something went wrong",
            data:null
        })
    }

};

module.exports = {
    userRegister,
    userVerification,
    userProfile,
};
