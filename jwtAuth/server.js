const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const globalConstant = require('./constans/constans');


// setting up express
const app = express();
const PORT = parseInt(globalConstant.port); 

// routes
const userRoute = require('./routes/userRoute');

app.use('/api',userRoute);

// //connecting mongoose 

main().catch(err => console.log("this error is ",err));
async function main() {
    await mongoose.connect(`${globalConstant.mongodb_connection_string}`);
    console.log("mongoose connected");
}


// starting port;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})