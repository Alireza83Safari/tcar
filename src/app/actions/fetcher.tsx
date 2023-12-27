import { axiosInstance } from "@/services/axios/axios";

export async function fetcher(url: string) {
  const res = await axiosInstance.get(url);
  const data = await res?.data;
  return data;
}

