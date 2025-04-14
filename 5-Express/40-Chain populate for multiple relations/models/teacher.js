const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
});

const teacherModel = mongoose.model("teacher", teacherSchema);

module.exports ={teacherSchema, teacherModel};
