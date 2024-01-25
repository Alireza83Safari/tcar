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
              className="text-center my-3 mx-auto hover:bg-lightPurple duration-300 rounded-lg"
              key={car?._id}
            >
              <Image
                width="130"
                height="130"
                src={String(car?.image)}
                className="w-[14rem]"
                alt="Description of my image"
              />
              <p className="my-2 text-purple">{car.name}</p>
            </Link>
          ))}
      </div>
    </section>
  );
}
