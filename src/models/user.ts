import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      /*     match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please provide a valid username address",
      ], */
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models?.User || mongoose.model("User", schema);

export default User;
