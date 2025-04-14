const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    course:{
        type: mongoose.Types.ObjectId,
        ref:"course"
    }
}) 

const commentsModel = mongoose.model('Comment', commentSchema);

module.exports = commentsModel ;