import mongoose from "mongoose";
import { colorSchema } from "../models/color";
import { platformShema } from "./platform";
import { companySchema } from "./company";

const carSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
    },

    /// 0 new  1 work
    carStatus: {
      type: Number,
      enum: [0, 1],
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    company: {
      type: mongoose.Types.ObjectId,
      ref: "Company",
      required: true,
    },

    color: {
      type: mongoose.Types.ObjectId,
      ref: "Color",
      required: true,
    },

    model: {
      type: String,
      required: true,
    },

    years: {
      type: String,
      required: true,
    },

    work: {
      type: Number,
      required: true,
    },

    platform: {
      type: mongoose.Types.ObjectId,
      ref: "Platform",
      required: true,
    },
    /// 0 petrol  1 electronic
    fuel: {
      type: Number,
      required: true,
      enum: [0, 1],
    },
    /// 0 دستی
    /// 1 اتومات
    gearbox: {
      type: Number,
      required: true,
      enum: [0, 1],
    },

    description: {
      type: String,
      required: true,
      min: 10,
      max: 1000,
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
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Car = mongoose.models?.Car || mongoose.model("Car", carSchema);

export default Car;
