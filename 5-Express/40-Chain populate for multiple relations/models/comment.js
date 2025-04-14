const mongoose = require('mongoose');
const{teacherSchema} = require('./teacher');

const commentSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    }
}) 

const commentModel = mongoose.model('Comment', commentSchema);

module.exports = commentModel ;