require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const {commonConstants} = require('./constants/constants');
const port = parseInt(commonConstants.port);
const app = express();
const authRouter = require('./routes/authRoute');


// body-parser
app.use(express.json());

// DB connection
main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(`${commonConstants.mongooseConnectionString}rbac`);
    console.log("Mongoose connected");
}


//Routes
app.use('/auth',authRouter)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})