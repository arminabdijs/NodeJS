const mongoose = require("mongoose");
require("./teacher"); 

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher",
  }
});

module.exports = mongoose.model("course", courseSchema);
