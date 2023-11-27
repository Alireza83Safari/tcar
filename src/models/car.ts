import mongoose from "mongoose";
import { colorSchema } from "../models/color";
import { companySchema } from "./company";

const carSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
  },
  carStatus: {
    type: String,
    enum: ["نو", "کارکرده"],
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  company: {
    type: companySchema,
    required: true,
  },

  color: {
    type: colorSchema,
    required: true,
  },

  model: {
    type: String,
    required: true,
  },

  years: {
    type: Number,
    required: true,
  },

  work: {
    type: Number,
    required: true,
  },

  platform: {
    type: String,
    required: true,
  },

  fuel: {
    type: String,
    required: true,
    enum: ["برقی", "بنزینی"],
  },
  gearbox: {
    type: String,
    required: true,
    enum: ["دستی", "اتومات"],
  },

  description: {
    type: String,
    required: true,
    min: 10,
    max: 100,
  },

  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

const Car = mongoose.models.Car || mongoose.model("Car", carSchema);

export default Car;
