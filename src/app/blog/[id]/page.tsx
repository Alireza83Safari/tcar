import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getBlog, getBlogs } from "@/actions/blog";
import Blog from "../components/Blog";

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return [{ id: blogs?._id }];
}

export default async function page({ params }: { params: { id: string } }) {
  const blog = await getBlog(params?.id);

  return (
    <>
      <Header />
      <Blog blog={blog} />
      <Footer />
    </>
  );
}
