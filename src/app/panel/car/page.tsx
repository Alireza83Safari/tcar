import { InfoBar } from "./components/InfoBar";
import { CarTable } from "./components/CarTable";
import { getCars } from "@/actions/car";

async function page() {
  const cars = await getCars("");

  return (
    <>
      <InfoBar cars={cars} />
      <CarTable cars={cars} />
    </>
  );
}

export default page;
