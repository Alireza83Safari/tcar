import mongoose from "mongoose";

export const appPicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const AppPic =
  mongoose.models?.AppPic || mongoose.model("AppPic", appPicSchema);

export default AppPic;
