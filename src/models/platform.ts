import mongoose from "mongoose";

export const platformShema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Platform =
  mongoose.models?.Platform || mongoose.model("Platform", platformShema);

export default Platform;
