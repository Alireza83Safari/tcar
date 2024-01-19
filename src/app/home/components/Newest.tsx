import Slider from "@/components/Slider";
import { CarType } from "@/types/car.type";

export default async function Newest({ cars }: { cars: CarType[] }) {
  return (
    <section className="md:px-8 px-3 xl:container m-auto my-32">
      {cars?.length && <Slider cars={cars} from={0} to={4} />}
    </section>
  );
}
