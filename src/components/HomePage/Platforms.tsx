import Image from "next/image";
import { getPlatformType } from "@/types/platform";
import Link from "next/link";
import { getBrands } from "@/app/actions/brand";

export const revalidate = 60 * 60;

export default async function Platforms() {
  const brands = await getBrands();
  return (
    <section className="md:px-8 px-3 xl:container m-auto">
      <p className="text-2xl">جستجو بر اساس بدنه</p>
      <div className="grid grid-cols-3">
        {brands?.map((car: getPlatformType) => (
          <Link
            href={`/car?platform=${car._id}`}
            className="text-center my-3 mx-auto"
            key={car?._id}
          >
            <Image src={car.image} alt="car" width={220} height={220} />
            <p className="text-gray-200 my-2">{car.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
