const mongoose = require("mongoose");
const { type } = require("os");

const usersModel = mongoose.model("users", {
  lastName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 15,
  },
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 15,
  },
  age: {
    type: Number,
    required: false,
    default: 18,
  },
  username: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 15,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 12,
  },
});

module.exports = usersModel;
