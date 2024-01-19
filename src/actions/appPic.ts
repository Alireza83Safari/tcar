"use server";

import AppPic from "@/models/appPic";
import { apiUrl } from "@/services/apiUrl";
import connectToDB from "@/utils/database";
import { revalidateTag } from "next/cache";

export async function getAppPics() {
  "use server";
  if (!apiUrl) {
    return null;
  }
  const res = await fetch(`${apiUrl}/api/appPic`, {
    next: { revalidate: 60 * 60 },
  });
  const appPics = await res.json();
  return appPics;
}

export async function deleteAppPic(id: string) {
  "use server";
  if (!apiUrl) {
    return null;
  }
  const res = await fetch(`${apiUrl}/api/appPic/${id}`, {
    method: "DELETE",
  });

  if (res.status === 200) {
    revalidateTag("appPic");
  }
}

export async function createAppPic(prev: any, formData: FormData) {
  "use server";
  if (!apiUrl) {
    return null;
  }
  await connectToDB();

  const validatedFields = await AppPic.create({
    title: formData.get("title"),
    description: formData.get("description"),
  });

  if (!validatedFields) {
    return {
      errors: validatedFields,
    };
  } else {
    revalidateTag("appPic");
    return {
      status: 200,
      message: validatedFields,
    };
  }
}

export async function editAppPic(prev: any, formData: FormData) {
  "use server";
  if (!apiUrl) {
    return null;
  }
  await connectToDB();
  const id = formData.get("id");

  const data = {
    title: formData.get("title"),
    description: formData.get("description"),
  };
  const validatedFields = await AppPic.findByIdAndUpdate(id, data, {
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
