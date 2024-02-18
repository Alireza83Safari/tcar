"use server";

import { apiUrl } from "@/services/apiUrl";
import { revalidateTag } from "next/cache";

export async function getCars(url: string) {
  try {
    const res = await fetch(`${apiUrl}/api/${url?.length ? url : `car`}`, {
      next: { tags: ["cars"], revalidate: 60 * 60 },
    });
    if (!res.ok) {
      throw new Error(`Server responded with status: ${res.status}`);
    }
    const cars = await res.json();
    return cars;
  } catch (error) {
    throw new Error(`Server responded with status: ${error}`);
  }
}

export async function getCar(id: string) {
  try {
    const cars = await fetch(`${apiUrl}/api/car/${id}`);
    return cars.json();
  } catch (error) {
    throw new Error(`Server responded with status: ${error}`);
  }
}

export async function deleteCar(id: string) {
  const res = await fetch(`${apiUrl}/api/car/${id}`, {
    method: "DELETE",
  });

  if (res.status === 200) {
    revalidateTag("cars");
  }
}

export async function editCar(prev: any, formData: FormData) {
  "use server";
  const id = formData.get("id");

  const data = {
    title: formData.get("title"),
    carStatus: formData.get("carStatus"),
    price: formData.get("price"),
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
  };

  try {
    const response = await fetch(`${apiUrl}/api/car/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });

    if (response?.status === 200) {
      revalidateTag("cars");
      return { message: "خودرو با موفقیت ویرایش شد", status: 200 };
    } else {
      return { message: "خودرو پیدا نشد", status: 404 };
    }
  } catch (error) {}
}

export async function getUserCars(id: string) {
  const userCar = await fetch(`${apiUrl}/api/profile/car/${id}`, {
    next: { tags: ["userCar"] },
  });
  const data = await userCar.json();
  return data;
}
