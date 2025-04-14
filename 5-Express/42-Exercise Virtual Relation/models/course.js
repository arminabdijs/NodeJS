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

courseSchema.virtual("sessions", {
  ref: "session",
  localField: "_id",
  foreignField: "course"
})



const cursesModel = mongoose.model("course", courseSchema);

module.exports = {courseSchema, cursesModel};

