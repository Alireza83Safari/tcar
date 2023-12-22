import React from "react";
import BlogTemplate from "./BlogTemplate";

const LastBlogs = () => {
  return (
    <nav className="grid grid-cols-3 md:px-8 px-3 xl:container m-auto">
      <BlogTemplate />
      <BlogTemplate />
      <BlogTemplate />
    </nav>
  );
};

export default LastBlogs;
