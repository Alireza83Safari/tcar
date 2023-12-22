const Validator = require("fastest-validator");

const v = new Validator();

const colorSchema = {
  name: { type: "string", min: 2, max: 20 },
  code: { type: "string", min: 2, max: 20 },
  hex: { type: "string", min: 2, max: 20 },
};

const colorValidator = v.compile(colorSchema);

export default colorValidator;
