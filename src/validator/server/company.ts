const Validator = require("fastest-validator");

const v = new Validator();

const companySchema = {
  name: { type: "string", min: 2, max: 20 },
  code: { type: "string", min: 2, max: 20 },
};

const companyValidator = v.compile(companySchema);

export default companyValidator;
