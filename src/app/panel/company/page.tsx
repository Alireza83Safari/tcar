import Header from "@/app/panel/components/Header";
import Menu from "@/app/panel/components/Menu";
import { Table } from "./components/Table";
import { getCopmpanies } from "@/actions/company";
import AddBrand from "./components/AddCompany";
import { Suspense } from "react";
import { LoadingTemplate } from "@/components";
import { withAuthPanel } from "@/HOC/withAuthPanel";

export const revalidate = 60 * 60;

async function page() {
  const companies = await getCopmpanies();
  return (
    <div>
      <Header />
      <Menu />

      <div className="w-[84vw] bg-dGray absolute left-0 md:px-4 mt-12 -z-20">
        <Suspense fallback={<LoadingTemplate />}>
          <AddBrand />
          <Table brands={companies} />
        </Suspense>
      </div>
    </div>
  );
}

export default withAuthPanel(page);

