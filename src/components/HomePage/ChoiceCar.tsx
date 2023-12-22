import CarTemplate from "../Car/CarTemplate";
import { FaArrowLeft } from "react-icons/fa6";
import { getCars } from "@/app/actions/car";
export const revalidate = 60 * 60;

export default async function ChoiceCar() {
  const cars = await getCars("");

  return (
    <nav className="px-8 xl:container m-auto">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl my-7 font-semibold">آگهی های برگزیده اخیر</h3>
        <div className="flex items-center text-gray-200">
          <p>مشاهده همه</p>
          <FaArrowLeft className="mr-2" />
        </div>
      </div>
      <div className="grid md:grid-cols-3">
        {cars?.slice(1, 4)?.map((car: any) => (
          <CarTemplate {...car} />
        ))}
      </div>
    </nav>
  );
}
