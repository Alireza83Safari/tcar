import Menu from "../components/Menu";
import Header from "../components/Header";
import { Table } from "./components/Table";
const AddColor = lazy(() => import("./components/AddColor"));
import { getColors } from "@/app/actions/color";
import { Suspense, lazy } from "react";

export const revalidate = 60 * 60;

async function page() {
  const colors = await getColors();

  return (
    <div className="bg-[#1F2432]">
      <Header />
      <Menu />

      <div className="md:w-[88vw] w-[84vw] min-h-screen absolute left-0 bg-[#1F2432] mt-10 md:pr-8 pr- -z-20">
        <Suspense>
          <AddColor />
        </Suspense>
        <Table colors={colors} />
      </div>
    </div>
  );
}

export default page;
