import { fetcher } from "@/app/actions/fetcher";
import Header from "@/app/panel/components/Header";
import Menu from "@/app/panel/components/Menu";
import { InfoBar } from "./components/InfoBar";
import { Table } from "./components/Table";

export default async function page() {
  const cars = await fetcher("/car");

  return (
    <div>
      <Header />
      <Menu />

      <div className="md:w-[88vw] w-[82vw] absolute left-0 bg-[#1F2432] mt-10">
        <InfoBar cars={cars} />
        <Table cars={cars} />
      </div>
    </div>
  );
}
