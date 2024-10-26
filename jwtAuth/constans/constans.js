const dotenv = require('dotenv').config();

const constant = {
    mongodb_connection_string : process.env.MONGODB_CONNECTION_STRING,
    port : process.env.PORT,
}

module.exports = constant;