const mongoose = require("mongoose");
const {teacherSchema} = require("./teacher");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  teacher: {
    type: teacherSchema,
    required: true
  }
});

module.exports = mongoose.model("course", courseSchema);

