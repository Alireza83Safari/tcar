"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { CarType } from "@/types/car.type";
import CarTemplate from "@/components/Car/CarTemplate";
import { FreeMode, Pagination } from "swiper/modules";

export default function Slider({
  cars,
  from,
  to,
}: {
  cars: CarType[];
  from: number;
  to: number;
}) {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    840: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  };
  return (
    <>
      {cars?.length && (
        <Swiper
          freeMode={true}
          loop={true}
          rewind={true}
          breakpoints={breakpoints}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {cars?.slice(from, to)?.map((car) => (
            <SwiperSlide key={car?._id}>
              <CarTemplate {...car} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
