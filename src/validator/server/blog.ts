const Validator = require("fastest-validator");

const v = new Validator();

const blogSchema = {
  title: { type: "string", min: 2, max: 100 },
  category: { type: "string", min: 2, max: 20 },
  user: { type: "string", min: 2, max: 100 },
  time: { type: "number" },
  description: { type: "string", min: 2, max: 1000 },
};

const blogValidator = v.compile(blogSchema);

export default blogValidator;
