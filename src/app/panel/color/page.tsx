import Menu from "../components/Menu";
import Header from "../components/Header";
import { Table } from "./components/Table";
import { InfoBar } from "./components/InfoBar";
import AddColor from "./components/AddColor";
import { getColors } from "@/app/actions/color";

export const revalidate = 60 * 60;

async function page() {
  const colors = await getColors();

  return (
    <div className="bg-[#1F2432]">
      <Header />
      <Menu />

      <div className="w-[88vw] absolute left-0 bg-[#1F2432] px-5">
        <InfoBar />
        <AddColor />
        <Table colors={colors} />
      </div>
    </div>
  );
}

export default page;
