import Header from "@/app/panel/components/Header";
import Menu from "@/app/panel/components/Menu";
import { InfoBar } from "./components/InfoBat";
import { Table } from "./components/Table";
import { getBrands } from "@/app/actions/brand";
import AddBrand from "./components/AddBrand";

export const revalidate = 3;

async function page() {
  const brands = await getBrands();
  return (
    <div className="bg-[#1F2432]">
      <Header />
      <Menu />

      <div className="w-[88vw] absolute left-0 bg-[#1F2432] px-4">
        <InfoBar />
        <AddBrand />
        <Table brands={brands} />
      </div>
    </div>
  );
}

export default page;
