"use server";

import Car from "@/models/car";
import { apiUrl } from "@/services/apiUrl";
import connectToDB from "@/utils/database";
import { revalidateTag } from "next/cache";

export async function getCars(url: string) {
  "use server";
  if (!apiUrl) {
    return null;
  }
  const res = await fetch(`${apiUrl}/api/${url ? url : `car`}`, {
    next: { tags: ["cars"], revalidate: 60 },
  });
  const cars = await res.json();
  return cars;
}

export async function getCar(id: string) {
  "use server";
  if (!apiUrl) {
    return null;
  }
  const cars = await fetch(`${apiUrl}/api/car/${id}`);
  return cars.json();
}

export async function deleteCar(id: string) {
  "use server";
  if (!apiUrl) {
    return null;
  }
  const res = await fetch(`${apiUrl}/api/car/${id}`, {
    method: "DELETE",
  });
  console.log(res);

  if (res.status === 200) {
    revalidateTag("cars");
  }
}

export async function editCar(prev: any, formData: FormData) {
  "use server";
  if (!apiUrl) {
    return null;
  }
  await connectToDB();
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
    await connectToDB();
    const findCar = await Car.findById(id);
    if (findCar) {
      const editCar = await Car.findOneAndUpdate({ _id: id }, data, {
        new: true,
      });
      if (editCar) {
        revalidateTag("cars");
        return { message: "خودرو با موفقیت ویرایش شد", status: 200 };
      } else {
        return { message: "خودرو پیدا نشد", status: 404 };
      }
    }
  } catch (error) {}
}

export async function getUserCars(id: string) {
  "use server";
  if (!apiUrl) {
    return null;
  }
  const userCar = await fetch(`${apiUrl}/api/profile/car/${id}`, {
    next: { tags: ["userCar"] },
  });
  const data = await userCar.json();
  return data;
}
