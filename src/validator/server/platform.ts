const Validator = require("fastest-validator");

const v = new Validator();

const platformSchema = {
  name: { type: "string" },
  code: { type: "string" },
  image: { type: "string" },
};

const platformValidator = v.compile(platformSchema);

export default platformValidator;
