"use server";
import { apiUrl } from "@/services/apiUrl";
import connectToDB from "@/utils/database";

export async function getBlogs() {
  const res = await fetch(`${apiUrl}/api/blog`, {
    next: { tags: ["blogs"], revalidate: 60 * 60 },
  });
  if (res.status === 404) {
    return [];
  }
  return res.json();
}

export async function createBlog(prev: any, formData: FormData) {
  await connectToDB();
  const data = {
    blog: formData.get("blog"),
  };
  console.log(prev);
  console.log(formData.getAll(""));

  /*   const createBlog = await Blog.create(data);

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
  } */
}

export async function getBlog(id: string) {
  const res = await fetch(`${apiUrl}/api/blog/${id}`);
  if (res.status === 404) {
    return [];
  }
  return res.json();
}
