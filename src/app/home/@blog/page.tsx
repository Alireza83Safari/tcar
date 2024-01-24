import { getBlogs } from "@/actions/blog";
import BlogSlider from "../components/BlogSlider";

export default async function page() {
  const blogs = await getBlogs();
  return (
    <section
      className="md:px-8 px-3 xl:container m-auto my-12"
      data-aos="fade-up"
      data-aos-once="true"
    >
      <BlogSlider blogs={blogs} />
    </section>
  );
}
