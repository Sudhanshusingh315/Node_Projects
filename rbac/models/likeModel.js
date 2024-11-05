const mongoose = require("mongoose");
const { Schema } = mongoose;

const likeSchema = new Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    post_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Post'
    },
    like:{
        type:Boolean,
        require:true
    }
});

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;