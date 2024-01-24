"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { CarType } from "@/types/car.type";
import { CarTemplate } from "@/components";
import AOS from "aos";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/bundle";
import "aos/dist/aos.css";

interface CarSliderProps {
  cars: CarType[];
  title: string;
  dataAos?: string;
}

const CarSlider: React.FC<CarSliderProps> = ({ cars, title, dataAos }) => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
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
    <section className="md:px-8 px-3 xl:container m-auto my-32">
      <p className="text-3xl mb-4 font-semibold">{title}</p>
      <div>
        {!!cars?.length && (
          <Swiper
            freeMode={true}
            loop={true}
            rewind={true}
            breakpoints={breakpoints}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {cars?.map((car) => (
              <SwiperSlide key={car?._id}>
                <CarTemplate car={car} dataAos={dataAos} /> {/*    */}
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default CarSlider;
