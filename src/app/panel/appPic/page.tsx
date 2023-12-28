import Header from "@/app/panel/components/Header";
import Menu from "@/app/panel/components/Menu";
import AddAppPic from "./components/AddAppPic";
import { Table } from "./components/Table";
import { getAppPics } from "@/actions/appPic";

export const revalidate = 60 * 60;

async function page() {
  const appPics = await getAppPics();

  return (
    <div className="bg-[#1F2432]">
      <Header />
      <Menu />

      <div className="md:w-[88vw] w-[84vw] absolute left-0 bg-[#1F2432] md:px-4 mt-12 -z-20">
        <AddAppPic />
        <Table appPics={appPics} />
      </div>
    </div>
  );
}

export default page;
