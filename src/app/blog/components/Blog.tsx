import { Blog as BlogType } from "@/types/blog";

const Blog = ({ blog }: { blog: BlogType }) => {
  return (
    <div className="xl:container mx-auto">
      <div>
        <h1 className="text-3xl font-semibold mt-10 mb-5">{blog?.title}</h1>
        <img
          src={blog?.image}
          className="min-w-full min-h-[20rem] object-contain"
        />
        <ul className="flex my-5 mr-3 sm:text-base text-sm">
          <li className="sm:ml-10 ml-5 text-purple">مطلب</li>
          <li className="sm:ml-10 ml-5">
            {blog?.createdAt?.slice(0, 10)} میلادی
          </li>
          <li className="sm:ml-10 ml-5">{blog?.time} دقیقه زمان مطالعه</li>
        </ul>
        <p className="mx-4" style={{ lineHeight: "33px" }}>
          {blog?.description}
        </p>
      </div>
    </div>
  );
};

export default Blog;
