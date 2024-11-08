const jsonwebtoken = require('jsonwebtoken');
const {commonConstants}= require('../constants/constants');


const generateAccessToken = async(userData) =>{
   return await jsonwebtoken.sign(userData,commonConstants.jwtSecret,{expiresIn:'4h'})
}

module.exports ={
    generateAccessToken
}