import Menu from "../components/Menu";
import Header from "../components/Header";
import { InfoBox } from "./components/infoBox";
import { Table } from "./components/Table";
import { getUsers } from "@/app/actions/user";
import AddUser from "./components/Adduser";

export const revalidate = 60 * 60;

async function page() {
  const users = await getUsers();

  return (
    <div className="bg-[#1F2432]">
      <Header />
      <Menu />

      <div className="w-[88vw] absolute left-0 bg-[#1F2432] px-4">
        <InfoBox />
        <AddUser />
        <Table users={users} />
      </div>
    </div>
  );
}

export default page;
