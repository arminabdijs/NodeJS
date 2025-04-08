const Validator = require("fastest-validator");

const v = new Validator();

const schema = {
  name: {
    type: "string",
    min: 3,
    max: 15,
  },

  username: {
    type: "string",
    min: 5,
    max: 15,
  },
  email: {
    type: "string",
    RegExp:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    min: 5,
    max: 30,
  },

  password: {
    type: "string",
    min: 8,
    max: 12,
  },

  

  confirmPassword: {
    type: "equal",
    field: "password",
  },
  address: {
    type: "string",
    min: 5,
    max: 50,
  },
  phone: {
    type: "string",
    min: 5,
    max: 15,
  },

  $$strict: true, // no additional properties allowed
};

const check = v.compile(schema);

module.exports = check;
