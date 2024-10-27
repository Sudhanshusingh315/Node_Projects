const dotenv = require('dotenv').config();

const constant = {
    mongodb_connection_string : process.env.MONGODB_CONNECTION_STRING,
    port : process.env.PORT,
    production_url : process.env.NODE_PROD_URL,
    dev_url : process.env.NODE_DEV_URL 
}

const nodemailerConfig = {
    host:process.env.NODEMAILER_HOST,
    port:process.env.NODEMAILER_PORT,
    user:process.env.NODEMAILER_USER ,
    pass:process.env.NODEMAILER_PASS 
}

module.exports = {constant,nodemailerConfig};