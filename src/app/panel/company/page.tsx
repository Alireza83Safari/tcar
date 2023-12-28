import Header from "@/app/panel/components/Header";
import Menu from "@/app/panel/components/Menu";
import { Table } from "./components/Table";
import { getCopmpanies } from "@/actions/company";
import AddBrand from "./components/AddCompany";

export const revalidate = 60 * 60;

async function page() {
  const companies = await getCopmpanies();
  return (
    <div className="bg-[#1F2432]">
      <Header />
      <Menu />

      <div className="md:w-[88vw] w-[84vw] absolute left-0 bg-[#1F2432] md:px-4 mt-12 -z-20">
        <AddBrand />
        <Table brands={companies} />
      </div>
    </div>
  );
}

export default page;
