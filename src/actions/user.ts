"use server";

import User from "@/models/user";
import { apiUrl } from "@/services/apiUrl";
import connectToDB from "@/utils/database";
import mongoose from "mongoose";
import { revalidateTag } from "next/cache";

export async function getUsers() {
  if (!apiUrl) {
    return null;
  }
  const res = await fetch(`${apiUrl}/api/user`, {
    next: { tags: ["user"] },
  });
  const user = await res.json();
  return user;
}

export async function deleteuser(id: string) {
  "use server";
  if (!apiUrl) {
    return null;
  }
  const res = await fetch(`${apiUrl}/api/user/${id}`, {
    method: "DELETE",
  });

  if (res.status === 200) {
    revalidateTag("user");
  }
}

export async function createUser(prev: any, formData: FormData) {
  if (!apiUrl) {
    return null;
  }
  const data = {
    firstname: formData.get("firstname"),
    lasntname: formData.get("lasntname"),
    email: formData.get("email"),
  };

  try {
    await connectToDB();

    const user = await User.create(data);

    if (user) {
      return { message: "ساخت کاربر با موفقیت انجام شد", status: 200 };
    } else {
      return { message: "ساخت کاربر با خطا مواجه شد", status: 404 };
    }
  } catch (error) {
    return { message: "ساخت کاربر با خطا مواجه شد", status: 404 };
  }
}

export async function editUser(prev: any, formData: FormData) {
  if (!apiUrl) {
    return null;
  }
  const id = formData.get("id");
  const data = {
    firstname: formData.get("firstname"),
    lasntname: formData.get("lasntname"),
    email: formData.get("email"),
  };

  try {
    await connectToDB();

    if (!mongoose.Types.ObjectId.isValid(String(id))) {
      return { message: "شناسه کاربر معتبر نمی‌باشد", status: 422 };
    }

    const editUser = await User.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (editUser) {
      revalidateTag("user");
      return { message: "ویرایش کاربر با موفقیت انجام شد", status: 200 };
    } else {
      return { message: " کاربر وجود ندارد", status: 404 };
    }
  } catch (error) {}
}

export async function getUser(id: string) {
  if (!apiUrl) {
    return null;
  }
  ("use server");
  await connectToDB();
  const user = await User.findOne({ _id: id }, "-__v -password");
  return user;
}
