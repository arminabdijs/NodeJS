const mongoose = require("mongoose");

const usersModel = mongoose.model("users", {
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
  },
  username: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 15,
  },
  email: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 30,
  
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 12,
  },
  address: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
    required: false,
  },
  phone: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 15,
    required: true,
  },
  crime: {
    type: Number,
    required: false,
    default: 0,
  },
   role:{
    type: String,
    required: false,
    default: "USER"
   } 
});

module.exports = usersModel;
