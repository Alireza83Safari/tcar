"use server";

import Car from "@/models/car";
import Company from "@/models/company";
import axiosInstance from "@/services/axios/axios";
import connectToDB from "@/utils/database";
import { revalidateTag } from "next/cache";

export async function getCars(url: string) {
  "use server";
  const res = await fetch(`http://localhost:3000/api/${url ? url : `car`}`, {
    next: { tags: ["cars"] },
  });
  const cars = await res.json();
  return cars;
}

export async function deleteBrand(id: string) {
  "use server";
  const res = await fetch(`http://localhost:3000/api/company/${id}`, {
    method: "DELETE",
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

export async function editCar(prev: any, formData: FormData) {
  "use server";
  await connectToDB();
  const id = formData.get("id");
  const userId = formData.get("userId");

  const data = {
    title: formData.get("title"),
    carStatus: formData.get("carStatus"),
    price: formData.get("price"),
    name: formData.get("name"),
    userId: formData.get("userId"),
    company: formData.get("company"),
    color: formData.get("color"),
    model: formData.get("model"),
    years: formData.get("years"),
    work: formData.get("work"),
    platform: formData.get("platform"),
    fuel: formData.get("fuel"),
    gearbox: 0,
    description: formData.get("description"),
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    phone: formData.get("phone"),
    image: null,
  };

  const validatedFields = await axiosInstance.post(`/car/${id}`, {
    ...data,
    carStatus: Number(data.carStatus),
    price: Number(data.price),
    phone: Number(data.phone),
    fuel: Number(data.fuel),
    gearbox: Number(data.gearbox),
    work: Number(data.work),
  });

  console.log(data);
  console.log(validatedFields);

  /*   if (!validatedFields) {
    return {
      validatedFields,
    };
  } else {
    revalidateTag("cars");
    return {
      status: 200,
    };
  } */
}
