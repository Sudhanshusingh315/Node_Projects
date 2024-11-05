const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
        required: false,
    }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;