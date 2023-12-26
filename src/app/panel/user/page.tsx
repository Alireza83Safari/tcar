import Menu from "../components/Menu";
import Header from "../components/Header";
import { getUsers } from "@/app/actions/user";
import { Table } from "./components/Table";

export const revalidate = 60 * 60;

async function page() {
  const users = await getUsers();

  return (
    <div className="bg-[#1F2432]">
      <Header />
      <Menu />

      <div className="md:w-[88vw] w-[84vw] absolute left-0 bg-[#1F2432] md:pr-8 min-h-screen">
        <Table users={users} />
      </div>
    </div>
  );
}

export default page;
