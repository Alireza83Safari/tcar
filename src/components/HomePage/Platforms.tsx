"use client";

import { getPlatformType } from "@/types/platform";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import useSWR from "swr";
import { fetcher } from "@/actions/fetcher";

function Platforms() {
  const { data: platforms } = useSWR("platform", fetcher);

  return (
    <section className="md:px-8 px-3 xl:container m-auto">
      <p className="text-2xl">جستجو بر اساس بدنه</p>
      <div className="grid sm:grid-cols-3 grid-cols-2">
        {platforms?.length &&
          platforms?.map((car: getPlatformType) => (
            <Link
              href={`/car?platform=${car._id}`}
              className="text-center my-3 mx-auto hover:bg-gradient-to-r from-zinc-900 to-slate-900 duration-300 rounded-lg"
              key={car?._id}
            >
              <CldImage
                width="220"
                height="220"
                src={String(car?.image)}
                alt="Description of my image"
              />
              <p className="text-gray-200 my-2">{car.name}</p>
            </Link>
          ))}
      </div>
    </section>
  );
}

export default Platforms;
