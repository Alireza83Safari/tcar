import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    time: {
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

const Blog = mongoose.models?.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
