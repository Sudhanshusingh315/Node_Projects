require('dotenv').config()

const commonConstants = {
    port : process.env.PORT,
    mongooseConnectionString : process.env.MONGODB_CONNECTION_STRING,
} 

module.exports = {
    commonConstants
}