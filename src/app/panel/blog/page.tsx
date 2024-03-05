import { Table } from "./components/Table";
import AddBlog from "./components/AddBlog";
import { getBlogs } from "@/actions/blog";

async function page() {
  const blogs = await getBlogs();

  return (
    <>
      <AddBlog />
      <Table blogs={blogs} />
    </>
  );
}

export default page;
