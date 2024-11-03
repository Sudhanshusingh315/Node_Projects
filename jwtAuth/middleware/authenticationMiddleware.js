const jwt = require("jsonwebtoken");
const { constant } = require("../constants/constans");
const BlackListedToken = require('../model/blacklisted');

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

const blacklistedTokenMiddleware = async(req,res,next) =>{
    
    let token = req.headers.authorization;
    token = token.split(" ")[1];
    try{
        if(token){
            const foundBlacklistedToken = await BlackListedToken.findOne({token});
            if(foundBlacklistedToken){
                return res.status(400).json({
                    success:false,
                    message:"Login again",
                    data:null
                })
            }else{
                return res.status(200).json({
                    success:true,
                    message:"Bardiya sahi hai",
                    data:null
                })
            }
        }
    }catch(err){
        return res.status(400).json({
            success:false,
            message:"Something went wrong",
            data:err

        })
    }
}


module.exports = {
    tokenVerifyMiddleware
}