import Header from "@/app/panel/components/Header";
import Menu from "@/app/panel/components/Menu";
import { Table } from "./components/Table";
import AddPlatform from "./components/AddPlatform";
import { getPlatforms } from "@/actions/platform";
import { LoadingTemplate } from "@/components";
import { Suspense } from "react";
import { withAuthPanel } from "@/HOC/withAuthPanel";

export const revalidate = 60 * 60;

async function page() {
  const platforms = await getPlatforms("");
  return (
    <div>
      <Header />
      <Menu />
      <div className="w-[84vw] bg-dGray absolute left-0 mt-12 -z-20 md:pr-8 min-h-screen">
        <Suspense fallback={<LoadingTemplate />}>
          <AddPlatform />
          <Table platforms={platforms} />
        </Suspense>
      </div>
    </div>
  );
}

export default withAuthPanel(page);
