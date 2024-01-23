import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import { Slider } from "@/components";
import { CarType } from "@/types/car.type";

export default async function ChoiceCar({ cars }: { cars: CarType[] }) {
  return (
    <nav className="md:px-8 px-3 xl:container m-auto">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl my-7 font-semibold">آگهی های برگزیده اخیر</h3>
        <div className="flex items-center text-gray-200">
          <Link href="/car">مشاهده همه</Link>
          <FaArrowLeft className="mr-2" />
        </div>
      </div>
      <div>{cars?.length && <Slider cars={cars} from={3} to={7} />}</div>
    </nav>
  );
}
