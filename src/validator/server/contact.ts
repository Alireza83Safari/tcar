const Validator = require("fastest-validator");

const v = new Validator();

const contactSchema = {
  username: { type: "string" },
  email: { type: "string" },
  comment: { type: "string" },
};

const contactValidator = v.compile(contactSchema);

export default contactValidator;
