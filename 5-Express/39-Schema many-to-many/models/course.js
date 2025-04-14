const mongoose = require("mongoose");
const {teacherSchema} = require("./teacher");
require("./comment");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  teacher: {
    type: teacherSchema,
    required: true
  },
  comments: [
    {
      type: mongoose.Types.ObjectId,
      ref:"Comment"
    
    }
   ]
});

module.exports = mongoose.model("course", courseSchema);

