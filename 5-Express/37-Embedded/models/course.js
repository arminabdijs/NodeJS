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





// reference Data Model
/* {
  "title": "Node.js",
  "teacher": "67f4c50d9757477619157b0b",
  "__v": 0
} */

//Embedded Data Model
/* {
  "title": "Node.js",
  "teacher": {
    "fullname": "John Doe",
    "__v": 0
  },
  "__v": 0
} */