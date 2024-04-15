"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { CarType } from "@/types/car";
import CarTemplate from "@/components/Car/CarTemplate";
import { FreeMode, Pagination } from "swiper/modules";
import AOS from "aos";
import "swiper/css";
import "swiper/css/bundle";
import "aos/dist/aos.css";

export default function Slider({ cars }: { cars: CarType[] }) {
  useEffect(() => {
    const isSmallScreen = window.innerWidth <= 600;

    AOS.init({
      offset: isSmallScreen ? 0 : 400,
      easing: "ease-in-out",
      duration: 800,
    });
  }, []);
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
          {cars?.slice(1, 6)?.map((car) => (
            <SwiperSlide key={car?._id}>
              <CarTemplate car={car} dataAos="fead-up" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
