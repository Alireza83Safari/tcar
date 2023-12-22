"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IoIosArrowBack } from "react-icons/io";

const Options = () => {
  return (
    <nav className="xl:container m-auto my-20">
      <div className="bg-black-100 sm:mx-12 rounded-lg py-4 px-8">
        <Swiper className="mySwiper" loop={true}>
          <SwiperSlide>
            <div className="grid grid-cols-4">
              <div className="col-span-1">
                <h3 className="sm:text-2xl text-xl">فروشگاه ماشین</h3>
                <p className="text-gray-200 my-8">
                  بهترین ماشین خود را انتخاب کنید
                </p>
                <button className="flex items-center bg-orange px-4 py-2 rounded-lg">
                  <p className="ml-2">مشاهده فروشگاه</p>
                  <IoIosArrowBack className="text-xl" />
                </button>
              </div>
              <div className="col-span-3 grid grid-cols-4 my-auto">
                <div>
                  <Image
                    src={"/img/car-finder/categories/04.png"}
                    width={100}
                    height={100}
                    alt="car"
                  />
                  <p>صندلی کودک</p>
                </div>
                <div>
                  <Image
                    src={"/img/car-finder/categories/03.png"}
                    width={100}
                    height={100}
                    alt="car"
                  />
                  <p>صندلی کودک</p>
                </div>
                <div>
                  <Image
                    src={"/img/car-finder/categories/02.png"}
                    width={100}
                    height={100}
                    alt="car"
                  />
                  <p>صندلی کودک</p>
                </div>
                <div>
                  <Image
                    src={"/img/car-finder/categories/01.png"}
                    width={100}
                    height={100}
                    alt="car"
                  />
                  <p>صندلی کودک</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid grid-cols-2">
              <div>
                <h3 className="text-2xl">فروشگاه خودرو در 24 ساعت</h3>
                <p className="text-gray-200 my-8">
                  ارزش ماشین خود را محاسبه کنید ، سپس نحوه فروش خود را انتخاب
                  کنید.
                </p>
                <button className="flex items-center bg-orange px-4 py-2 rounded-lg">
                  <p className="ml-2">قصد فروش ماشین دارم</p>
                  <IoIosArrowBack className="text-xl" />
                </button>
              </div>

              <div className="grid grid-cols-3 my-auto">
                <div>
                  <Image
                    src={"/img/car-finder/icons/handshake.svg"}
                    width={100}
                    height={100}
                    alt="car"
                  />
                  <p>خریداران تایید شده</p>
                </div>
                <div>
                  <Image
                    src={"/img/car-finder/icons/tools.svg"}
                    width={100}
                    height={100}
                    alt="car"
                  />
                  <p>ابزارهای هوشمند</p>
                </div>
                <div>
                  <Image
                    src={"/img/car-finder/icons/buyers.svg"}
                    width={100}
                    height={100}
                    alt="car"
                  />
                  <p>ارائه پیشنهادات</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </nav>
  );
};

export default Options;
