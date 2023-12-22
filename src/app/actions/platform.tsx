"use server";

import Platform from "@/models/platform";
import connectToDB from "@/utils/database";
import { revalidateTag } from "next/cache";

export async function getPlatforms(url: string) {
  "use server";
  const res = await fetch(
    `http://localhost:3000/api/${url ? url : `platform`}`,
    {
      next: { tags: ["platform"] },
    }
  );
  const cars = await res.json();
  return cars;
}

export async function deletePlatform(platformId: string) {
  console.log("platformId", platformId);
  "use server";

  const res = await fetch(`http://localhost:3000/api/platform/${platformId}`, {
    method: "DELETE",
  });

  //console.log(res);

  if (res.status === 200) {
    revalidateTag("platform");
  }

  return res.json();
}

export async function createPlatform(prev: any, formData: FormData) {
  "use server";
  await connectToDB();

  const validatedFields = await Platform.create({
    code: formData.get("code"),
    name: formData.get("name"),
    image: null,
  });

  if (!validatedFields) {
    return {
      errors: validatedFields,
    };
  } else {
    revalidateTag("platform");
    return {
      status: 200,
      message: validatedFields,
    };
  }
}

export async function editPlatform(prev: any, formData: FormData) {
  "use server";
  await connectToDB();
  const id = formData.get("id");

  const data = {
    code: formData.get("code"),
    name: formData.get("name"),
  };
  const validatedFields = await Platform.findByIdAndUpdate(id, data, {
    new: true,
  });

  if (!validatedFields) {
    return {
      errors: validatedFields,
    };
  } else {
    revalidateTag("platform");
    return {
      status: 200,
    };
  }
}
