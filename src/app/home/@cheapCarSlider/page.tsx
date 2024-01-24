import { getCars } from "@/actions/car";
import CarSlider from "../components/CarSlider";

export default async function page() {
  const cheapCar = await getCars(`car?order=cheap&limit=8`);

  return (
    <CarSlider
      cars={cheapCar}
      title="ارزان ترین خودروها"
      dataAos="fade-up"
    />
  );
}
