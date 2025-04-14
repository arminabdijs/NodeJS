const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  course: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

const sessionsModel = mongoose.model("session", sessionSchema);

module.exports = sessionsModel;
