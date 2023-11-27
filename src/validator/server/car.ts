const Validator = require("fastest-validator");

const v = new Validator();

const carSchema = {
  title: { type: "string", min: 3, max: 30 },
  carStatus: { type: "string", enum: ["نو", "کارکرده"] },
  price: { type: "number", positive: true },
  company: { type: "string" },
  model: { type: "string" },
  years: { type: "number" },
  work: { type: "number" },
  platform: { type: "string" },
  fuel: { type: "string", enum: ["برقی", "بنزینی"] },
  gearbox: { type: "string", enum: ["دستی", "اتومات"] },
  color: { type: "string" },
  description: { type: "string", min: 10, max: 100 },
  firstname: { type: "string" },
  lastname: { type: "string" },
  phone: { type: "number" },
};

const carValidator = v.compile(carSchema);

export default carValidator;
