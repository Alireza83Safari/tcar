import { getCars } from "@/actions/car";
import CarSlider from "../components/CarSlider";

export default async function page() {
  const newestCar = await getCars(`car?order=newest&limit=8`);

  return (
    <CarSlider cars={newestCar} title="جدیدترین خودروها" dataAos="fade-right" />
  );
}
