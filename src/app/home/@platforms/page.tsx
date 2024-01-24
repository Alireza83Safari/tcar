import { getPlatforms } from "@/actions/platform";
import { getPlatformType } from "@/types/platform";
import Image from "next/image";
import Link from "next/link";

export default async function page() {
  const platforms = await getPlatforms("");
  return (
    <section className="md:px-8 px-3 xl:container m-auto">
      <p className="text-2xl">جستجو بر اساس بدنه</p>

      <div
        className="grid sm:grid-cols-3 grid-cols-2"
        data-aos="fade-up"
        data-aos-once="true"
      >
        {platforms?.length &&
          platforms?.map((car: getPlatformType) => (
            <Link
              href={`/car?platform=${car._id}`}
              className="text-center my-3 mx-auto hover:bg-gradient-to-r from-zinc-900 to-slate-900 duration-300 rounded-lg"
              key={car?._id}
            >
              <Image
                width="440"
                height="440"
                src={String(car?.image)}
                className="w-[14rem]"
                alt="Description of my image"
              />
              <p className="text-gray-200 my-2">{car.name}</p>
            </Link>
          ))}
      </div>
    </section>
  );
}
