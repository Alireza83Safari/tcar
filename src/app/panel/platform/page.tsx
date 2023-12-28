import Header from "@/app/panel/components/Header";
import Menu from "@/app/panel/components/Menu";
import { Table } from "./components/Table";
import AddPlatform from "./components/AddPlatform";
import { getPlatforms } from "@/actions/platform";

export const revalidate = 60 * 60;

export default async function page() {
  const platforms = await getPlatforms("");
  return (
    <div className="bg-[#1F2432]">
      <Header />
      <Menu />
      <div className="md:w-[88vw] w-[84vw] absolute left-0 bg-[#1F2432] mt-12 -z-20 md:pr-8 min-h-screen">
        <AddPlatform />
        <Table platforms={platforms} />
      </div>
    </div>
  );
}
