import { apiUrl } from "@/services/apiUrl";
import { axiosInstance } from "@/services/axios/axios";

export async function fetcher(url: string) {
/*   if (!apiUrl) {
    return null;
  } */
  const res = await fetch(`/api/${url}`, { cache: "no-store" });
  console.log(res);

  const data = await res?.json();
  return data;
}
