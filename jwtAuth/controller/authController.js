// #### all imports ####
const express = require("express");
const User = require("../model/userModel");
const { validationResult } = require("express-validator");
const { generateToken } = require("../helpers/token");
const bcrypt = require("bcrypt");
const BlackListedToken = require("../model/blacklisted");

// #### Methods ####
const auth = async (req, res) => {
    const { email, password } = req.body;
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: "Email or Password Incorrect",
        });
    }

    let user = null;
    user = await User.find({ email });

    const verified = bcrypt.compare(password, user?.password);

    if (user && verified) {
        const token = generateToken({ user: user?.name, email: user?.email });
        return status(200).json({
            success: true,
            message: "Login successful",
            data: { token },
        });
    }
};

const logout = async (req, res) => {
    try {
        let token = req.headers.authorization;
        token = token.split(" ")[1];

        if (!token.isEmpty) {
            const blacklist = new BlackListedToken({
                token: token,
            });
            const testtoke = await blacklist.save();
            return res.status(200).json({
                success: true,
                message: "Token blacklisted successfully",
                data: testtoke,
            });
        }

        throw new Error("User action invalid");
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: "Something went wrong",
            data: err,
        });
    }
};

module.exports = {
    auth,
    logout,
};
