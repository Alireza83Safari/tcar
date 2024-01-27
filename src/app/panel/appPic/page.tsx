import Header from "@/app/panel/components/Header";
import Menu from "@/app/panel/components/Menu";
import AddAppPic from "./components/AddAppPic";
import { Table } from "./components/Table";
import { getAppPics } from "@/actions/appPic";
import { Suspense } from "react";
import { LoadingTemplate } from "@/components";
import { withAuthPanel } from "@/HOC/withAuthPanel";

export const revalidate = 60 * 60;

async function page() {
  const appPics = await getAppPics();

  return (
    <>
      <Header />
      <Menu />

      <div className="w-[84vw] bg-dGray absolute left-0 md:px-4 mt-12 -z-20">
        <Suspense fallback={<LoadingTemplate />}>
          <AddAppPic />
          <Table appPics={appPics} />
        </Suspense>
      </div>
    </>
  );
}

export default withAuthPanel(page);
