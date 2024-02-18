"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import BlogTemplate from "@/components/Blog/BlogTemplate";
import { blogType } from "@/types/blog.type";

export default function Slider({ blogs }: { blogs: blogType[] }) {
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
  };
  return (
    <>
      {!!blogs?.length && (
        <Swiper
          freeMode={true}
          loop={true}
          rewind={true}
          breakpoints={breakpoints}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {blogs?.map((blog: blogType) => (
            <SwiperSlide key={blog?._id}>
              <BlogTemplate {...blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
