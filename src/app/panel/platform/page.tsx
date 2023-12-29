import Header from "@/app/panel/components/Header";
import Menu from "@/app/panel/components/Menu";
import { Table } from "./components/Table";
import AddPlatform from "./components/AddPlatform";
import { getPlatforms } from "@/actions/platform";

export const revalidate = 60 * 60;

export default async function page() {
  const platforms = await getPlatforms("");
  return (
    <div>
      <Header />
      <Menu />
      <div className="w-[84vw] bg-dGray absolute left-0 mt-12 -z-20 md:pr-8 min-h-screen">
        <AddPlatform />
        <Table platforms={platforms} />
      </div>
    </div>
  );
}
