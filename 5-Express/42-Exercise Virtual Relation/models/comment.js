const mongoose = require('mongoose');
// const{teacherSchema} = require('./teacher');

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