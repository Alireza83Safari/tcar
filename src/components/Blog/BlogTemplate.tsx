import { blogType } from "@/types/blog.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogTemplate = ({ image, title, category, _id }: blogType) => {
  return (
    <Link href={`/blog/${_id}`} className=" mx-4 rounded-lg">
      <div>
        <Image
          src={image}
          width={300}
          height={300}
          alt="car"
          className="w-full"
        />
      </div>
      <div className="px-7 py-4">
        <p className="text-purple text-sm font-semibold my-2">{category}</p>
        <p className="text-sm text-gray-200 my-2">{title}</p>
      </div>
    </Link>
  );
};

export default BlogTemplate;
