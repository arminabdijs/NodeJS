const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("teacher", teacherSchema);
