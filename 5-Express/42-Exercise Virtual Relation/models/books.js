const mongoose = require("mongoose");

const booksModel = mongoose.model("books", {
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 40,
  },
  author: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 15,
  },
  publication_year:{
    type: Number,
    required: false,
    difault: 0
  },
  genre:{
    type: String,
    required: false,
    default: "Unknown"
  },
  price: {
    type: Number,
    required: false,
    default: 0,
  },
  free: {
    type: Boolean,
    required: false,
    default: true,
  },
});

module.exports = booksModel;
