import { getUsers } from "@/actions/user";
import UserTable from "./components/UserTable";

export const revalidate = 60 * 60;

async function page() {
  const users = await getUsers();

  return <UserTable users={users} />;
}

export default page;
