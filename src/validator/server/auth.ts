const Validator = require("fastest-validator");

const v = new Validator();

const loginSchema = {
  email: { type: "email", convert: true, max: 30 },
  password: { type: "string" },
};

const loginValidator = v.compile(loginSchema);

export default loginValidator;
