import CarTemplate from "@/components/Car/CarTemplate";
import { CarType } from "@/types/car.type";

export async function Car({ cars }: { cars: CarType[] }) {
  return (
    <div className="grid grid-cols-1 mx-5 col-span-8">
      {cars?.map((car: CarType) => (
        <CarTemplate {...car} />
      ))}
    </div>
  );
}
