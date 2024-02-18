import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    blog: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.models?.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
