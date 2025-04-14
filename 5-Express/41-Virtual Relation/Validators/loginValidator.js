const Validator = require("fastest-validator");
const v = new Validator();

const loginSchema = {
  username: { type: "string", optional: true },
  email: { type: "string", optional: true },
  phone: { type: "string", optional: true },
  password: { type: "string", min: 6, max: 32 },
};

const checkLogin = v.compile(loginSchema);

module.exports = checkLogin;
