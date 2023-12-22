"use server";

import Company from "@/models/company";
import connectToDB from "@/utils/database";
import { revalidateTag } from "next/cache";

export async function getBrands() {
  const res = await fetch("http://localhost:3000/api/company", {
    next: { tags: ["brands"] },
  });
  const brands = await res.json();
  return brands;
}

export async function deleteBrand(id: string) {
  "use server";
  const res = await fetch(`http://localhost:3000/api/company/${id}`, {
    method: "DELETE",
    next: { tags: ["brands"] },
  });

  if (res.status === 200) {
    revalidateTag("brands");
  }
}

export async function createBrand(prev: any, formData: FormData) {
  "use server";
  await connectToDB();

  const validatedFields = await Company.create({
    code: formData.get("code"),
    name: formData.get("name"),
  });
  console.log(validatedFields);

  if (!validatedFields) {
    return {
      errors: validatedFields,
    };
  } else {
    revalidateTag("brands");
    return {
      status: 200,
      message: validatedFields,
    };
  }
}

export async function editBrands(prev: any, formData: FormData) {
  "use server";
  await connectToDB();
  const id = formData.get("id");

  const data = {
    code: formData.get("code"),
    name: formData.get("name"),
  };
  const validatedFields = await Company.findByIdAndUpdate(id, data, {
    new: true,
  });

  if (!validatedFields) {
    return {
      errors: validatedFields,
    };
  } else {
    revalidateTag("brands");
    return {
      status: 200,
    };
  }
}
