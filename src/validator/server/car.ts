const Validator = require("fastest-validator");

const v = new Validator();

const carSchema = {
  title: { type: "string", min: 3, max: 30 },
  carStatus: { type: "number", enum: [0, 1] },
  price: { type: "number", positive: true },
  company: { type: "string" },
  model: { type: "string" },
  userId: { type: "string" },
  years: { type: "string" },
  work: { type: "number" },
  platform: { type: "string" },
  fuel: { type: "number", enum: [0, 1] },
  gearbox: { type: "number", enum: [0, 1] },
  color: { type: "string" },
  description: { type: "string", minLength: 10, maxLength: 100 },
  firstname: { type: "string" },
  lastname: { type: "string" },
  phone: { type: "number" },
};

const carValidator = v.compile(carSchema);

export default carValidator;
