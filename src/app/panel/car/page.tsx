import Header from "@/app/panel/components/Header";
import Menu from "@/app/panel/components/Menu";
import { InfoBar } from "./components/InfoBar";
import { Table } from "./components/Table";
import { getCars } from "@/actions/car";

export default async function page() {
  const cars = await getCars("");

  return (
    <div>
      <Header />
      <Menu />
      <div className="w-[84vw] bg-dGray absolute left-0 mt-10">
        <InfoBar cars={cars} />
        <Table cars={cars} />
      </div>
    </div>
  );
}
