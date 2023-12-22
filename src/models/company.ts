import mongoose from "mongoose";

export const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      // unique: true,
    },
    code: {
      type: String,
      required: true,
      // unique: true,
    },
    image: {
      type: String,
      // unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Company =
  mongoose.models?.Company || mongoose.model("Company", companySchema);

export default Company;
