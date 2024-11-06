const User = require("../models/userModel");
const { validationResult } = require("express-validator");
const aggreagationPipelines = require("../aggregation-pipeline/authControllerPipeline");
const bcrypt = require("bcrypt");
const registerUser = async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: "Something went wrong",
            error: error.array(),
        });
    }
    try {
        const { name, email, password } = req.body;
        let user = null;

        user = await User.aggregate(
            aggreagationPipelines.userExists(name, email, password)
        );

        if (user.length)
            return res.status(409).json({
                success: true,
                messgae: "User already exists with the email",
                data: null,
            });

        const hashedPassword = await bcrypt.hash(password, 10);

        user = User.create({
            name,
            email,
            password: hashedPassword,
        });
        return res.status(201).json({
            success: true,
            messgae: "User Successfully registered",
            data: user,
        });
    } catch (err) {
        console.log(`error is ${err}`);
        return res.status(400).json({
            success: true,
            message: "An error occured",
            error: err,
        });
    }
};

module.exports = {
    registerUser,
};
