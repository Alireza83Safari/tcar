"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const CarDetails = () => {
  const [showTechnology, setShowTechnology] = useState(false);
  const [showSafe, setShowSafe] = useState(false);
  return (
    <section className="px-4 mt-10">
      <div className="flex justify-between pb-5">
        <p>مرسدس بنز کانورتیبل کوپه</p>
        <div className="flex">
          <FaHeart className="text-xl mx-3" />
          <FaShareAlt className="text-xl mx-3" />
        </div>
      </div>
      <div className="grid grid-cols-5">
        <div className="col-span-3">
          <Image
            src={"/img/car-finder/single/gallery/02.jpg"}
            alt="car"
            className="min-w-full rounded-lg"
            width={400}
            height={400}
          />
        </div>
        <div className="col-span-2 px-7">
          <div className="mb-5">
            <button className="px-8 rounded-lg bg-green mx-1">نو</button>
            <button className="px-8 rounded-lg bg-blue mx-1">کارکرده</button>
          </div>
          <p className="text-xl mb-4">345000 م.ت</p>
          <div className="flex mb-4">
            <p className="pl-3">25 کیلومتر</p>
            <p className="pr-3 border-r border-borderColor">البرز</p>
          </div>

          <div className="bg-black-100 p-4 rounded-lg mt-8">
            <p className="mb-4">مشخصات فروشنده</p>
            <div className="mb-4 flex items-center">
              <p>نام:</p>
              <p>علیرضا</p>
            </div>
            <div className="mb-4 flex items-center">
              <p className="ml-4">شماره تماس:</p>
              <p className="border border-orange px-4 rounded-lg py-1">
                0910292343
              </p>
            </div>
            <div className="flex items-center">
              <p className="ml-4">آدرس:</p>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
      </div>

      <div>
      <div className="rounded-lg border-x border-t border-borderColor mt-5">
            <div className="border-b border-borderColor">
              <div
                className="flex justify-between items-center p-3"
                onClick={() => setShowTechnology(!showTechnology)}
              >
                <p>تکنولوژی</p>
                {showTechnology ? <FaAngleDown /> : <FaAngleUp />}
              </div>

              <div
                className={`  grid grid-cols-2 p-3 ${
                  showTechnology ? `grid` : `hidden`
                }`}
              >
                <div className="text-sm text-gray-200">
                  <li>کنترل آب و هوا</li>
                  <li>سیستم ناوبری</li>
                  <li>بلوتوث</li>
                  <li>مدیریت از راه دور</li>
                </div>
                <div className="text-sm text-gray-200">
                  <li>کنترل آب و هوا</li>
                  <li>سیستم ناوبری</li>
                  <li>بلوتوث</li>
                  <li>مدیریت از راه دور</li>
                </div>
              </div>
            </div>
            <div className="border-b border-borderColor">
              <div
                className="flex justify-between items-center p-3"
                onClick={() => setShowSafe(!showSafe)}
              >
                <p>امنیت</p>
                {showSafe ? <FaAngleDown /> : <FaAngleUp />}
              </div>

              <div
                className={`  grid grid-cols-2 p-3 ${
                  showSafe ? `grid` : `hidden`
                }`}
              >
                <div className="text-sm text-gray-200">
                  <li>کیسه هوا: راننده</li>
                  <li>کیسه هوا: مسافر</li>
                  <li>زنگ هشدار</li>
                  <li>ترمزهای ضد قفل</li>
                </div>
                <div className="text-sm text-gray-200">
                  <li>کمک ترمز</li>
                  <li>هشدار خروج از خط</li>
                  <li>چراغهای مه</li>
                  <li>قفل درهای برقی</li>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg">توضیحات فروشنده</h3>
            <p className="text-sm text-gray-200">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>
      </div>
    </section>
  );
};

export default CarDetails;
