"use server";

import Color from "@/models/color";
import connectToDB from "@/utils/database";
import { revalidateTag } from "next/cache";

export async function getColors() {
  const res = await fetch("http://localhost:3000/api/color", {
    next: { tags: ["colors"] },
  });
  const colors = await res.json();
  return colors;
}

export async function deleteColor(id: string) {
  "use server";
  const res = await fetch(`http://localhost:3000/api/color/${id}`, {
    method: "DELETE",
  });

  revalidateTag("colors");
  return res.json();
}

export async function createColors(prev: any, formData: FormData) {
  "use server";
  await connectToDB();

  const validatedFields = await Color.create({
    code: formData.get("code"),
    name: formData.get("name"),
    hex: formData.get("hex"),
  });
  console.log(validatedFields);

  if (!validatedFields) {
    return {
      errors: validatedFields,
    };
  } else {
    revalidateTag("colors");
    return {
      status: 200,
      message: validatedFields,
    };
  }
}

export async function editColors(prev: any, formData: FormData) {
  "use server";
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
