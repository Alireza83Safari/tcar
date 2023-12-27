import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions"; 
import { apiUrl } from "@/services/apiUrl";

export async function getServerToken() {
  if (!apiUrl) {
    return null;
  }
  const data = await getServerSession(authOptions);
  return data;
}
