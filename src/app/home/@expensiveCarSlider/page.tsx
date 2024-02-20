import { getCars } from "@/actions/car";
import CarSlider from "../components/CarSlider";

export default async function page() {
  const expensiveCar = await getCars(`car?order=expensive&limit=8`);

  return (
    <CarSlider
      cars={expensiveCar}
      title="گران ترین خودروها"
      dataAos="fade-up"
    />
  );
}
