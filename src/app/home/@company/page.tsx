import { getCopmpanies } from "@/actions/company";
import React from "react";
import CompanySlider from ".././components/CompanySlider";

export default async function page() {
  const companies = await getCopmpanies();
  return (
    <>
      <CompanySlider companies={companies} />
    </>
  );
}
