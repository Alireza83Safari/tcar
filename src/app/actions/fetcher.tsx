import { apiUrl } from "@/services/apiUrl";
import { axiosInstance } from "@/services/axios/axios";

export async function fetcher(url: string) {
  if (!apiUrl) {
    return null;
  }
  const res = await axiosInstance.get(`${apiUrl}/api/${url}`);
  const data = await res?.data;
  return data;
}

