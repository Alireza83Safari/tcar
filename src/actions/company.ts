"use server";

import Company from "@/models/company";
import { apiUrl } from "@/services/apiUrl";
import connectToDB from "@/utils/database";
import { revalidateTag } from "next/cache";

export async function getCopmpanies() {
  const res = await fetch(`${apiUrl}/api/company`, {
    next: { tags: ["company"], revalidate: 60 * 60 },
  });
  const companies = await res.json();
  return companies;
}

export async function deleteCompany(id: string) {
  "use server";
  if (!apiUrl) {
    return null;
  }
  const res = await fetch(`${apiUrl}/api/company/${id}`, {
    method: "DELETE",
  });
  console.log(res);

  if (res.status === 200) {
    revalidateTag("company");
  }
}

export async function createCompany(prev: any, formData: FormData) {
  await connectToDB();

  const validatedFields = await Company.create({
    code: formData.get("code"),
    name: formData.get("name"),
  });

  if (!validatedFields) {
    return {
      errors: validatedFields,
    };
  } else {
    revalidateTag("company");
    return {
      status: 200,
      message: validatedFields,
    };
  }
}

export async function editCompany(prev: any, formData: FormData) {
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
    revalidateTag("company");
    return {
      status: 200,
    };
  }
}
