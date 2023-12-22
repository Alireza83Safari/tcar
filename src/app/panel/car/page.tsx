import { fetcher } from "@/app/actions/fetcher";
import Header from "@/app/panel/components/Header";
import Menu from "@/app/panel/components/Menu";
import { InfoBar } from "./components/InfoBar";
import { Table } from "./components/Table";

async function CarComponent() {
  const cars = await fetcher("/car");

  return (
    <div>
      <Header />
      <Menu />

      <div className="w-[88vw] absolute left-0 bg-[#1F2432]">
        <InfoBar cars={cars} />
        <Table cars={cars} />
      </div>
    </div>
  );
}

export default CarComponent; // Export the renamed function
