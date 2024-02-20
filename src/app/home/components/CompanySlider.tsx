"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { companyType } from "@/types/company.type";
import "swiper/css/pagination";
import Image from "next/image";


interface CompanyProps {
  companies: companyType[];
}

const CompanySlider: React.FC<CompanyProps> = ({ companies }) => {
  const breakpoints = {
    320: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    550: {
      slidesPerView: 8,
      spaceBetween: 10,
    },
    840: {
      slidesPerView: 10,
      spaceBetween: 10,
    },
    1300: {
      slidesPerView: 12,
      spaceBetween: 10,
    },
  };
  return (
    <nav
      className="md:px-8 px-3 xl:container m-auto gap-y-10 my-32"
      data-aos="fade-up"
      data-aos-once="true"
    >
      {!!companies?.length && (
        <Swiper
          freeMode={true}
          loop={true}
          rewind={true}
          breakpoints={breakpoints}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {companies?.map((company: companyType) => (
            <SwiperSlide key={company?._id}>
              <Link href={`/car?company=${company?._id}`} key={company.name}>
                <Image
                  width="600"
                  height="600"
                  src={String(company?.image)}
                  className="w-[4rem]"
                  alt="Description of my image"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </nav>
  );
};

export default CompanySlider;
