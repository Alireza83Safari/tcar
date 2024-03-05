import { getUsers } from "@/actions/user";
import { Table } from "./components/Table";

export const revalidate = 60 * 60;

async function page() {
  const users = await getUsers();

  return <Table users={users} />;
}

export default page;
