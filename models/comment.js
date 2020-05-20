const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    comments: {
        type: [
            {
                username: String,
                text: String,
                dateofcreation: Date
            }
        ],
        required: true
    },
    likes: {
        type: [
            {
                username: String,
                dateofcreation: Date
            }
        ],
        required: true
    },

    likesCount: {
        type: Number,
        required: true
    },
})
module.exports  = mongoose.model("comment", CommentSchema);