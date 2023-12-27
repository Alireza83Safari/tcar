const Validator = require("fastest-validator");

const v = new Validator();

const brandSchema = {
  name: { type: "string", min: 2, max: 20 },
  code: { type: "string", min: 2, max: 20 },
};

const brandValidator = v.compile(brandSchema);

export default brandValidator;
