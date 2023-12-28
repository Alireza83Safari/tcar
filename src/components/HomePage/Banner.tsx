import { getAppPics } from "@/actions/appPic";
import { appPicType } from "@/types/appPic.type";
import Image from "next/image";
import React from "react";

export default async function Banner() {
  const banners = await getAppPics();
  return (
    <>
      {banners?.length &&
        banners?.map((banner: appPicType) => (
          <nav className="grid md:grid-cols-3 md:py-32 py-20 px-8 xl:container m-auto">
            <div className="col-span-1">
              <h1 className="text-5xl font-bold" style={{ lineHeight: "60px" }}>
                {banner?.title}
              </h1>
              <p className="mt-12 text-gray-200" style={{ lineHeight: "33px" }}>
                {banner?.description}
              </p>
            </div>
            <div className="col-span-2 md:mt-0 mt-20">
              <Image
                src={"/img/car-finder/home/hero-img.png"}
                width={1000}
                height={1000}
                alt="car"
              />
            </div>
          </nav>
        ))}
    </>
  );
}
