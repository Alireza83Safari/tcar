"use server";
import Blog from "@/models/blog";
import { apiUrl } from "@/services/apiUrl";
import connectToDB from "@/utils/database";
import { revalidateTag } from "next/cache";

export async function getBlogs() {
  "use server";
  if (!apiUrl) {
    return null;
  }
  const res = await fetch(`${apiUrl}/api/blog`, {
    next: { tags: ["blogs"] },
  });
  if (res.status === 404) {
    return [];
  }
  return res.json();
}

export async function createBlog(prev: any, formData: FormData) {
  "use server";
  if (!apiUrl) {
    return null;
  }
  await connectToDB();
  const data = {
    title: formData.get("title"),
    category: formData.get("category"),
    user: formData.get("user"),
    time: formData.get("time"),
    description: formData.get("description"),
    image: null,
  };

  const createBlog = await Blog.create(data);

  if (createBlog) {
    return {
      message: createBlog,
      status: 201,
    };
  } else {
    revalidateTag("blogs");
    return {
      message: "ساخت بلاگ با خطا مواجه شد",
    };
  }
}

export async function getBlog(id: string) {
  "use server";
  if (!apiUrl) {
    return null;
  }
  const res = await fetch(`${apiUrl}/api/blog/${id}`);
  if (res.status === 404) {
    return [];
  }
  return res.json();
}
