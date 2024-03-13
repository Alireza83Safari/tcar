import { getCopmpanies } from "@/actions/company";
import AddBrand from "./components/AddCompany";
import CompanyTable from "./components/CompanyTable";

export const revalidate = 60 * 60;

async function page() {
  const companies = await getCopmpanies();
  return (
    <>
      <AddBrand />
      <CompanyTable companies={companies} />
    </>
  );
}

export default page;
