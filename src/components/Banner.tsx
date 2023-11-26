import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <nav className="grid grid-cols-3 py-32 px-8 xl:container m-auto">
      <div className="col-span-1">
        <h1 className="text-5xl font-bold" style={{ lineHeight: "60px" }}>
          راهی آسان برای پیدا کردن خودرو
        </h1>
        <p className="mt-12 text-gray-200" style={{ lineHeight: "33px" }}>
          این سایت یک بازار دیجیتال پیشرو برای صنعت خودرو است که خریداران خودرو
          را با فروشندگان متصل می کند و میتوانید ماشین مناسب را خود را پیدا
          کنید.
        </p>
      </div>
      <div className="col-span-2">
        <Image
          src={"/img/car-finder/home/hero-img.png"}
          width={1000}
          height={1000}
          alt="car"
        />
      </div>
    </nav>
  );
};

export default Banner;
