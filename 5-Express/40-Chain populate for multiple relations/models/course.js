const mongoose = require("mongoose");
const { ref } = require("process");
require("./teacher");
require("./comment");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  teacher: {
    type:  mongoose.Types.ObjectId,
    ref: "teacher",
  },
  comments: [
    {
      type: mongoose.Types.ObjectId,
      ref:"Comment"
    
    }
   ]
});

module.exports = mongoose.model("course", courseSchema);

