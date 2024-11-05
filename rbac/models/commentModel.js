const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
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
    comment:{
        type:String,
        require:true
    }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment ;