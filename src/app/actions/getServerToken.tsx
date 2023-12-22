import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export async function getServerToken() {
  const data = await getServerSession(authOptions);
  return data;
}
