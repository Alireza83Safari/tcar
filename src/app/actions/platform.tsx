"use server";

import Platform from "@/models/platform";
import { apiUrl } from "@/services/apiUrl";
import connectToDB from "@/utils/database";
import { revalidateTag } from "next/cache";

export async function getPlatforms(url: string) {
  "use server";
  const res = await fetch(
    `${apiUrl}/${url ? url : `platform`}`,
    {
      next: { tags: ["platform"] },
    }
  );
  const cars = await res.json();
  return cars;
}

export async function deletePlatform(platformId: string) {
  console.log("platformId", platformId);
  ("use server");

  const res = await fetch(`/api/platform/${platformId}`, {
    method: "DELETE",
  });

  if (res.status === 200) {
    revalidateTag("platform");
  }

  return res.json();
}

export async function createPlatform(prev: any, formData: FormData) {
  "use server";
  await connectToDB();

  const data = {
    code: formData.get("code"),
    name: formData.get("name"),
    image: null,
  };

  const findPlatformByName = await Platform.findOne({ name: data.name });
  if (findPlatformByName) {
    return { message: "نام قبلا استفاده شده است", status: 422 };
  }

  const findPlatformByCode = await Platform.findOne({ code: data.code });
  if (findPlatformByCode) {
    return { message: "کد قبلا استفاده شده است", status: 422 };
  }

  const createPlatform = await Platform.create(data);

  if (createPlatform) {
    revalidateTag("platform");
    return { message: createPlatform, status: 201 };
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
