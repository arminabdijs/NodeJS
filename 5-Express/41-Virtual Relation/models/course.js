const mongoose = require("mongoose");
const { teacherSchema}= require("./teacher");


const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  teacher: {
    type:  teacherSchema,
    required: true,
  }
});

courseSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "course"
})





const coursesModel = mongoose.model("course", courseSchema);

module.exports = {courseSchema, coursesModel};

