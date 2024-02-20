import Header from "@/app/panel/components/Header";
import Menu from "@/app/panel/components/Menu";
import AddBanner from "./components/AddBanner";
import { Table } from "./components/Table";
import { getBanners } from "@/actions/banner";
import { Suspense } from "react";
import { LoadingTemplate } from "@/components";
import { withAuthPanel } from "@/HOC/withAuthPanel";

export const revalidate = 60 * 60;

async function page() {
  const banners = await getBanners();

  return (
    <>
      <Header />
      <Menu />

      <div className="w-[84vw] bg-dGray absolute left-0 md:px-4 mt-12 -z-20">
        <Suspense fallback={<LoadingTemplate />}>
          <AddBanner />
          <Table banners={banners} />
        </Suspense>
      </div>
    </>
  );
}

export default withAuthPanel(page);