"use server";

import Color from "@/models/color";
import { apiUrl } from "@/services/apiUrl";
import connectToDB from "@/utils/database";
import colorValidator from "@/validator/server/color";
import { revalidateTag } from "next/cache";

export async function getColors() {
  if (!apiUrl) {
    return null;
  }
  const res = await fetch(`${apiUrl}/api/color`, {
    next: { tags: ["colors"] },
  });
  const colors = await res.json();
  return colors;
}

export async function deleteColor(id: string) {
  "use server";
  if (!apiUrl) {
    return null;
  }
  const res = await fetch(`${apiUrl}/api/color/${id}`, {
    method: "DELETE",
  });

  revalidateTag("colors");
  return res.json();
}

export async function createColors(prev: any, formData: FormData) {
  "use server";
  if (!apiUrl) {
    return null;
  }
  const data = {
    code: formData.get("code"),
    name: formData.get("name"),
    hex: formData.get("hex"),
  };

  try {
    await connectToDB();

    const validationResult = colorValidator(data);

    if (validationResult !== true) {
      return { status: 422 };
    }

    const existingColor = await Color.findOne({ code: data?.code });

    if (existingColor) {
      return {
        message: "کد رنگ از قبل وجود دارد",
        status: 409,
      };
    }

    const createdColor = await Color.create(data);

    if (createdColor) {
      revalidateTag("colors");
      return { message: "رنگ با موفقیت ایجاد شد", status: 201 };
    }
  } catch (error) {
    return {
      message: error,
    };
  }
}

export async function editColors(prev: any, formData: FormData) {
  "use server";
  if (!apiUrl) {
    return null;
  }
  await connectToDB();
  const id = formData.get("id");

  const data = {
    code: formData.get("code"),
    name: formData.get("name"),
    hex: formData.get("hex"),
  };
  const validatedFields = await Color.findByIdAndUpdate(id, data, {
    new: true,
  });

  if (!validatedFields) {
    return {
      errors: validatedFields,
    };
  } else {
    revalidateTag("colors");
    return {
      status: 200,
    };
  }
}
