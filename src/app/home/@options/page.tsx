"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import "swiper/css";
import { Button } from "@/components";

export default function page() {
  return (
    <nav
      className="xl:container m-auto my-20"
      data-aos="fade-left"
      data-aos-once="true"
    >
      <div className="sm:mx-12">
        <Swiper className="mySwiper" loop={true}>
          <SwiperSlide>
            <div className="grid sm:grid-cols-4 bg-lightPurple rounded-lg py-4 px-8">
              <div className="col-span-1">
                <h3 className="sm:text-2xl text-xl">فروشگاه ماشین</h3>
                <p className="text-gray-200 sm:my-8 my-1">
                  بهترین ماشین خود را انتخاب کنید
                </p>
                <Button href="/car">
                  <p className="ml-2">مشاهده فروشگاه</p>
                  <IoIosArrowBack className="text-xl" />
                </Button>
              </div>
              <div className="col-span-3 grid grid-cols-4 my-auto">
                <div>
                  <Image
                    src="/img/hlkg2zyw2jvvplgkl0hi.png"
                    width={100}
                    height={100}
                    alt="car"
                  />
                  <p>صندلی کودک</p>
                </div>
                <div>
                  <Image
                    src="/img/je4xwl0m4zqwlcfojpxv.png"
                    width={100}
                    height={100}
                    alt="car"
                  />
                  <p>رینگ خودرو</p>
                </div>
                <div>
                  <Image
                    src="/img/hwjs7lzsaohdhwwekrnm.png"
                    width={100}
                    height={100}
                    alt="car"
                  />
                  <p>رینگ خودرو</p>
                </div>
                <div>
                  <Image
                    src="/img/mmkcpvdklfclalptqmjj.png"
                    width={100}
                    height={100}
                    alt="car"
                  />
                  <p>صندلی خودرو</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid grid-cols-2 bg-lightPurple rounded-lg py-4 px-8">
              <div>
                <h3 className="text-2xl">فروشگاه خودرو در 24 ساعت</h3>
                <p className="text-gray-200 my-8">
                  ارزش ماشین خود را محاسبه کنید ، سپس نحوه فروش خود را انتخاب
                  کنید.
                </p>
                <Button href="/addcar">
                  <p className="ml-2">قصد فروش ماشین دارم</p>
                  <IoIosArrowBack className="text-xl" />
                </Button>
              </div>

              <div className="grid grid-cols-3 my-auto">
                <div>
                  <Image
                    src={"/img/handshake.svg"}
                    width={100}
                    height={100}
                    alt="car"
                  />
                  <p>خریداران تایید شده</p>
                </div>
                <div>
                  <Image
                    src={"/img/tools.svg"}
                    width={100}
                    height={100}
                    alt="car"
                  />
                  <p>ابزارهای هوشمند</p>
                </div>
                <div>
                  <Image
                    src={"/img/buyers.svg"}
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
