const mongoose = require("mongoose");

const booksModel = mongoose.model("books", {
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
  },
  author: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 15,
  },
  price: {
    type: Number,
    required: false,
    default: 0,
  },
});

module.exports = booksModel;
