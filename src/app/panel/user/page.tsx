import Menu from "../components/Menu";
import Header from "../components/Header";
import { getUsers } from "@/actions/user";
import { Table } from "./components/Table";

export const revalidate = 60 * 60;

export default async function page() {
  const users = await getUsers();

  return (
    <div>
      <Header />
      <Menu />

      <div className="w-[84vw] bg-dGray absolute left-0 md:pr-8 min-h-screen">
        <Table users={users} />
      </div>
    </div>
  );
}
