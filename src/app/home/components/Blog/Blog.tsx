import Slider from "./Slider";
import { blogType } from "@/types/blog.type";

export default async function Blog({ blogs }: { blogs: blogType[] }) {
  return (
    <section className="md:px-8 px-3 xl:container m-auto my-12">
      <Slider blogs={blogs} />
    </section>
  );
}
