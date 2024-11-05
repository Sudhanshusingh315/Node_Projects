require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const {commonConstants} = require('./constants/constants');
const port = parseInt(commonConstants.port);
const app = express();
// DB connection
main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect(`${commonConstants.mongooseConnectionString}/rbac`);
    console.log("Mongoose connected");
}


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})