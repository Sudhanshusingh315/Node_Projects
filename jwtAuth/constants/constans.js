const dotenv = require('dotenv').config();

const constant = {
    mongodb_connection_string : process.env.MONGODB_CONNECTION_STRING,
    port : process.env.PORT,
    production_url : process.env.NODE_PROD_URL,
    dev_url : process.env.NODE_DEV_URL,
    jwt_secret : process.env.JWT_SECRETE
}

const nodemailerConfig = {
    host:process.env.SMTP_HOST,
    port:process.env.SMTP_PORT,
    user:process.env.SMTP_MAIL,
    pass:process.env.SMTP_PASSWORD
}

module.exports = {constant,nodemailerConfig};