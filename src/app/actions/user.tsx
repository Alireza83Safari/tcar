"use server";

import User from "@/models/user";
import axiosInstance from "@/services/axios/axios";
import connectToDB from "@/utils/database";
import { useSession } from "next-auth/react";
import { revalidateTag } from "next/cache";

export async function getUsers() {
  const res = await fetch("http://localhost:3000/api/user", {
    next: { tags: ["user"] },
  });
  const user = await res.json();
  return user;
}

export async function deleteuser(id: string) {
  "use server";
  const res = await fetch(`http://localhost:3000/api/user/${id}`, {
    method: "DELETE",
  });

  revalidateTag("user");
}

export async function editUser(id, userInfo) {
  const editResponse = await axiosInstance.put(
    `/user/${id}`,
    JSON.stringify(userInfo)
  );
  console.log("editResponse", editResponse);

  if (!editResponse) {
    return {
      errors: editResponse,
    };
  } else {
    revalidateTag("user");
    return {
      status: 200,
    };
  }
}

export async function getUser(email: string) {
  "use server";
  connectToDB();
  const user = await User.findOne({ email: email }, "-__v -password");
  return user;
}
