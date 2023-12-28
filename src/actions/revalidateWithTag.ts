"use server";
import { revalidateTag } from "next/cache";

export async function revalidateWithTag(tag: string) {
  revalidateTag(tag);
}
