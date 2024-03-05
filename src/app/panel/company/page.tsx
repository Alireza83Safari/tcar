import { Table } from "./components/Table";
import { getCopmpanies } from "@/actions/company";
import AddBrand from "./components/AddCompany";

export const revalidate = 60 * 60;

async function page() {
  const companies = await getCopmpanies();
  return (
    <>
      <AddBrand />
      <Table brands={companies} />
    </>
  );
}

export default page;
