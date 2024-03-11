const Validator = require("fastest-validator");

const v = new Validator();

const loginSchema = {
  username: { type: "string", max: 30 },
  password: { type: "string" },
};

const loginValidator = v.compile(loginSchema);

export default loginValidator;
