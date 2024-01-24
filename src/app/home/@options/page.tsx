"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import "swiper/css";

export default function page() {
  return (
    <nav
      className="xl:container m-auto my-20"
      data-aos="fade-left"
      data-aos-once="true"
    >
      <div className="bg-black-100 sm:mx-12 rounded-lg py-4 px-8">
        <Swiper className="mySwiper" loop={true}>
          <SwiperSlide>
            <div className="grid sm:grid-cols-4">
              <div className="col-span-1">
                <h3 className="sm:text-2xl text-xl">فروشگاه ماشین</h3>
                <p className="text-gray-200 sm:my-8 my-1">
                  بهترین ماشین خود را انتخاب کنید
                </p>
                <button className="flex items-center bg-orange px-4 py-2 sm:mb-0 mb-3 rounded-lg">
                  <p className="ml-2">مشاهده فروشگاه</p>
                  <IoIosArrowBack className="text-xl" />
                </button>
              </div>
              <div className="col-span-3 grid grid-cols-4 my-auto">
                <div>
                  <Image
                    src="https://res.cloudinary.com/dmywzd0yw/image/upload/v1703789497/mmkcpvdklfclalptqmjj.png"
                    width={100}
                    height={100}
                    alt="car"
                  />
                  <p>صندلی کودک</p>
                </div>
                <div>
                  <Image
                    src="https://res.cloudinary.com/dmywzd0yw/image/upload/v1703789594/hwjs7lzsaohdhwwekrnm.png"
                    width={100}
                    height={100}
                    alt="car"
                  />
                  <p>صندلی کودک</p>
                </div>
                <div>
                  <Image
                    src="https://res.cloudinary.com/dmywzd0yw/image/upload/v1703789620/je4xwl0m4zqwlcfojpxv.png"
                    width={100}
                    height={100}
                    alt="car"
                  />
                  <p>صندلی کودک</p>
                </div>
                <div>
                  <Image
                    src="https://res.cloudinary.com/dmywzd0yw/image/upload/v1703789638/hlkg2zyw2jvvplgkl0hi.png"
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
}
