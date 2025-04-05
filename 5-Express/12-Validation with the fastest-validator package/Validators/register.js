const Validator = require("fastest-validator");

const v = new Validator();

const schema = {
  firstName: {
    type: "string",
    required: true,
    min: 3,
    max: 15,
  },
  lastName: {
    type: "string",
    required: true,
    min: 3,
    max: 15,
  },
  username: {
    type: "string",
    required: true,
    min: 5,
    max: 15,
  },
  email: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
    min: 8,
    max: 12,
  },
  age: {
    type: "number",
    positive: true,
    required: false,
    default: 18,
  },
  confirmPassword: {
    type: "equal",
    field: "password",
  },
  $$strict: true,
};

const check = v.compile(schema);

module.exports = check;
