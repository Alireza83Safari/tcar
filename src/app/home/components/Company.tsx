"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { companyType } from "@/types/company.type";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import "swiper/css/pagination";

const Company = ({ companies }: { companies: companyType[] }) => {
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
    <nav className="md:px-8 px-3 xl:container m-auto gap-y-10">
      {companies?.length && (
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
                <CldImage
                  width="60"
                  height="60"
                  src={String(company?.image)}
                  sizes="100vw"
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

export default Company;
