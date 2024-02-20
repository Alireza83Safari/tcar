import { getPlatforms } from "@/actions/platform";
import { getPlatformType } from "@/types/platform";
import Image from "next/image";
import Link from "next/link";

export default async function page() {
  const platforms = await getPlatforms("");

  return (
    <section className="md:px-8 px-3 xl:container m-auto">
      {platforms?.length && (
        <>
          <p className="text-2xl">جستجو بر اساس بدنه</p>
          <div
            className="grid sm:grid-cols-3 grid-cols-2"
            data-aos="fade-up"
            data-aos-once="true"
          >
            {platforms?.map((platform: getPlatformType) => (
              <Link
                href={`/car?platform=${platform._id}`}
                className="text-center my-3 mx-auto hover:bg-lightPurple duration-300 rounded-lg"
                key={platform?._id}
              >
                <Image
                  width="130"
                  height="130"
                  src={platform?.image}
                  className="w-[14rem]"
                  alt={platform?.name}
                />
                <p className="my-2 text-purple">{platform.name}</p>
              </Link>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
