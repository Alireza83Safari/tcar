import Header from "@/app/panel/components/Header";
import Menu from "@/app/panel/components/Menu";
import AddAppPic from "./components/AddAppPic";
import { Table } from "./components/Table";
import { getAppPics } from "@/actions/appPic";

export const revalidate = 60 * 60;

async function page() {
  const appPics = await getAppPics();

  return (
    <>
      <Header />
      <Menu />

      <div className="w-[84vw] bg-dGray absolute left-0 md:px-4 mt-12 -z-20">
        <AddAppPic />
        <Table appPics={appPics} />
      </div>
    </>
  );
}

export default page;
