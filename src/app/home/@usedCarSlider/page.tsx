import { getCars } from "@/actions/car";
import CarSlider from "../components/CarSlider";

export default async function page() {
  const usedCar = await getCars(`car?order=used&limit=8`);

  return (
    <CarSlider cars={usedCar} title="خودروهای کارکرده" dataAos="fade-left" />
  );
}
