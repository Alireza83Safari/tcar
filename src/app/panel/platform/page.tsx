import Header from "@/app/panel/components/Header";
import Menu from "@/app/panel/components/Menu";
import { InfoBar } from "./components/InfoBar";
import { Table } from "./components/Table";
import AddPlatform from "./components/AddPlatform";
import { getPlatforms } from "@/app/actions/platform";

export const revalidate = 60 * 60;

async function page() {
  const platforms = await getPlatforms("");
  return (
    <div className="bg-[#1F2432]">
      <Header />
      <Menu />
      <div className="w-[88vw] absolute left-0 bg-[#1F2432] px-4">
        <InfoBar />
        <AddPlatform />
        <Table platforms={platforms} />
      </div>
    </div>
  );
}

export default page;
