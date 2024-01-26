import Menu from "../components/Menu";
import Header from "../components/Header";
import { Table } from "./components/Table";
const AddColor = lazy(() => import("./components/AddColor"));
import { getColors } from "@/actions/color";
import { Suspense, lazy } from "react";
import { LoadingTemplate } from "@/components";

async function page() {
  const colors = await getColors();

  return (
    <div>
      <Header />
      <Menu />

      <div className="w-[84vw] bg-dGray min-h-screen absolute left-0 mt-10 md:pr-8 -z-20">
        <Suspense fallback={<LoadingTemplate />}>
          <AddColor />
          <Table colors={colors} />
        </Suspense>
      </div>
    </div>
  );
}

export default page;
