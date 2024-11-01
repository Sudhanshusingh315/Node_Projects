const jwt = require('jsonwebtoken');
const {constant} = require('../constants/constans');
const generateToken = (data) =>{
    return jwt.sign(data,constant.jwt_secret,{expiresIn:'12d'});
}

module.exports = {
    generateToken
}