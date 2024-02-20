"use server";

import Banner from "@/models/banner";
import { apiUrl } from "@/services/apiUrl";
import connectToDB from "@/utils/database";
import { revalidateTag } from "next/cache";

export async function getBanners() {
  const res = await fetch(`${apiUrl}/api/banner`, {
    next: { revalidate: 60 * 60 },
  });
  const banners = await res.json();
  return banners;
}

export async function deleteBanner(id: string) {
  const res = await fetch(`${apiUrl}/api/banner/${id}`, {
    method: "DELETE",
  });

  if (res.status === 200) {
    revalidateTag("banner");
  }
}

export async function createBanner(prev: any, formData: FormData) {
  await connectToDB();

  const validatedFields = await Banner.create({
    title: formData.get("title"),
    description: formData.get("description"),
  });

  if (!validatedFields) {
    return {
      errors: validatedFields,
    };
  } else {
    revalidateTag("banner");
    return {
      status: 200,
      message: validatedFields,
    };
  }
}

export async function editBanner(prev: any, formData: FormData) {
  await connectToDB();
  const id = formData.get("id");

  const data = {
    title: formData.get("title"),
    description: formData.get("description"),
  };
  const validatedFields = await Banner.findByIdAndUpdate(id, data, {
    new: true,
  });

  if (!validatedFields) {
    return {
      errors: validatedFields,
    };
  } else {
    revalidateTag("appPic");
    return {
      status: 200,
    };
  }
}
