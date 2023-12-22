import mongoose from "mongoose";

export const colorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    hex: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Color = mongoose.models?.Color || mongoose.model("Color", colorSchema);

export default Color;
