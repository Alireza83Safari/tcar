"use client";
import { CldImage } from "next-cloudinary";
import React from "react";
import { FaFileAlt, FaSearch } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Trait = () => {
  return (
    <nav className="my-32 md:px-8 px-3 xl:container m-auto">
      <h2 className="h3">این سایت چه ویژگی هایی دارد؟</h2>
      <div className="grid grid-cols-12">
        <div className="sm:col-span-5 col-span-12">
          <div className="my-12 md:px-12">
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-semibold">بیش از 1 میلیون آگهی</h3>
              <FaFileAlt className="text-orange" />
            </div>
            <p className="text-gray-200">
              این چیزی است که در سایر بازارهای اصلی آنلاین خودرو در ایالات متحده
              پیدا خواهید کرد.
            </p>
          </div>
          <div className="my-12 md:px-12">
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-semibold">جستجوی قدرتمند</h3>
              <FaSearch className="text-orange" />
            </div>
            <p className="text-gray-200">
              جستجوی قدرتمند ما ، شخصی سازی نتایج شما را آسان می کند تا تنها
              خودروها و ویژگی های موردنظر خود را مشاهده کنید.
            </p>
          </div>
          <div className="my-12 md:px-12">
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-semibold">نوآوری بدون وقفه</h3>
              <IoMdSettings className="text-orange text-xl" />
            </div>
            <p className="text-gray-200">
              تیم ما دائماً در حال توسعه ویژگی های جدیدی است که روند خرید و فروش
              خودرو را ساده تر می کند.
            </p>
          </div>
        </div>
        <div className="sm:col-span-2 col-span-12 flex justify-center items-center">
          <CldImage
            width="100"
            height="200"
            src="https://res.cloudinary.com/dmywzd0yw/image/upload/v1703788233/kzp09lbywq7ttrs2ojcx.png"
            alt="car"
          />
        </div>
        <div className="sm:col-span-5 col-span-12">
          <div className="my-12 md:px-12">
            <div className="flex items-center mb-2">
              <FaFileAlt className="text-orange ml-4" />
              <h3 className="text-lg font-semibold">بیش از 1 میلیون آگهی</h3>
            </div>
            <p className="text-gray-200">
              این چیزی است که در سایر بازارهای اصلی آنلاین خودرو در ایالات متحده
              پیدا خواهید کرد.
            </p>
          </div>
          <div className="my-12 md:px-12">
            <div className="flex items-center mb-2">
              <FaSearch className="text-orange ml-4" />
              <h3 className="text-lg font-semibold">جستجوی قدرتمند</h3>
            </div>
            <p className="text-gray-200">
              جستجوی قدرتمند ما ، شخصی سازی نتایج شما را آسان می کند تا تنها
              خودروها و ویژگی های موردنظر خود را مشاهده کنید.
            </p>
          </div>
          <div className="my-12 md:px-12">
            <div className="flex items-center mb-2">
              <IoMdSettings className="text-orange ml-4" />
              <h3 className="text-lg font-semibold">نوآوری بدون وقفه</h3>
            </div>
            <p className="text-gray-200">
              تیم ما دائماً در حال توسعه ویژگی های جدیدی است که روند خرید و فروش
              خودرو را ساده تر می کند.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Trait;
