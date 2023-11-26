import React from "react";
import BlogTemplate from "./BlogTemplate";

const LastBlogs = () => {
  return (
    <nav className="grid grid-cols-3 px-8 xl:container m-auto">
      <BlogTemplate />
      <BlogTemplate />
      <BlogTemplate />
    </nav>
  );
};

export default LastBlogs;
