const mongoose = require('mongoose');
const { Schema } = mongoose;


const blackListedToken = new Schema({
    token:{
        type:String,
        required:true,
    },

},
    {timestamps:true}

);

const BlackListedToken = mongoose.model('blacklistedtoken',blackListedToken);
module.exports = BlackListedToken;