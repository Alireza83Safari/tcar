import Image from "next/image";
import { getPlatformType } from "@/types/platform";
import Link from "next/link";
import { apiUrl } from "@/services/apiUrl";

export const revalidate = 60 * 60;

const getPlatforms = async () => {
  const res = await fetch(`${apiUrl}/platform`, {
    next: { tags: ["platform"] },
  });

  const data = await res.json();
  return data;
};

export default async function Platforms() {
  const platforms = await getPlatforms();
  return (
    <section className="md:px-8 px-3 xl:container m-auto">
      <p className="text-2xl">جستجو بر اساس بدنه</p>
      <div className="grid sm:grid-cols-3 grid-cols-2">
        {platforms?.length &&
          platforms?.map((car: getPlatformType) => (
            <Link
              href={`/car?platform=${car._id}`}
              className="text-center my-3 mx-auto"
              key={car?._id}
            >
              <Image src={car.image ? `/uploads/${car?.image}` : '/img/no-image.png'} alt="car" width={220} height={220} />
              <p className="text-gray-200 my-2">{car.name}</p>
            </Link>
          ))}
      </div>
    </section>
  );
}
