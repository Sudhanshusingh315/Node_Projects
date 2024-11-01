const jwt = require("jsonwebtoken");
const { constant } = require("../constants/constans");

const tokenVerifyMiddleware = (req, res, next) => {
    let token = req.headers.authorization;
    token = token.split(" ")[1];
    try {
        if (token) {
            const decoded = jwt.verify(token, constant.jwt_secret);

            if (decoded) {
                req.user = decoded;
                next();
            }
        }
    } catch (err) {
        return status(401).json({
            success: false,
            message:"Invalid token",
            data:null 
         
        })
    }
};


module.exports = {
    tokenVerifyMiddleware
}