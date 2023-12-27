import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions"; 

export async function getServerToken() {
  const data = await getServerSession(authOptions);
  return data;
}
