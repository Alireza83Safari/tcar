import Image from "next/image";
import React from "react";
import { IoMdMail, IoMdSend } from "react-icons/io";
import { GoDeviceMobile } from "react-icons/go";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="xl:container m-auto md:px-8 px-3 mt-16 border-t border-purple">
      <div className="lg:flex lg:justify-between grid sm:grid-cols-3 grid-cols-2 py-12">
        <div className="max-w-[12rem]">
          <Link href="/" className="font-black text-purple text-3xl">
            Tcar
          </Link>

          <p className="text-gray-200 mt-5">
            پیشنهادات خوب ما را از دست ندهید!
          </p>

          <div className="relative mt-5">
            <input
              type="text"
              placeholder="ایمیل شما"
              className="py-3 rounded-md bg-black-100 w-[15rem] px-4 border border-purple"
            />
            <button className="absolute -left-10 top-2 bg-purple p-2 rounded-md">
              <IoMdSend className="text-xl text-white" />
            </button>
          </div>
        </div>

        <ul className="lg:order-2 order-4 lg:mt-0 mt-12">
          <h3 className="text-white font-black mb-3">خرید و فروش ماشین</h3>
          <ul className="text-gray-200">
            <li className="my- hover:text-purple hover:cursor-pointer">جستجو خودرو</li>
            <li className="my-2 hover:text-purple hover:cursor-pointer">فروش خودرو</li>
            <li className="my-2 hover:text-purple hover:cursor-pointer">ارزیابی آنلاین خودرو</li>
            <li className="my-2 hover:text-purple hover:cursor-pointer">معاملات ماشین</li>
          </ul>
        </ul>

        <ul className="lg:order-3 order-5 lg:mt-0 mt-12">
          <h3 className="text-white font-black mb-3">لینک های سریع</h3>
          <ul className="text-gray-200">
            <li className="my-2 hover:text-purple hover:cursor-pointer">درباره ما</li>
            <li className="my-2 hover:text-purple hover:cursor-pointer">تماس با ما</li>
            <li className="my-2 hover:text-purple hover:cursor-pointer">سوالات متداول</li>
            <li className="my-2 hover:text-purple hover:cursor-pointer">دانلود اپلیکیشن</li>
            <li className="my-2 hover:text-purple hover:cursor-pointer">مقالات</li>
          </ul>
        </ul>

        <ul className="lg:order-4 order-3 sm:mt-0 mt-12">
          <h3 className="text-white font-black mb-3">حساب کاربری</h3>
          <ul className="text-gray-200">
            <li className="my-2 hover:text-purple hover:cursor-pointer">اکانت من</li>
            <li className="my-2 hover:text-purple hover:cursor-pointer">لیست موردعلاقه ها</li>
            <li className="my-2 hover:text-purple hover:cursor-pointer">لیست آگهی های من</li>
            <li className="my-2 hover:text-purple hover:cursor-pointer">ثبت آگهی</li>
          </ul>
        </ul>

        <div className="">
          <div className="flex items-center">
            <GoDeviceMobile className="text-purple" />
            <p>09122222222</p>
          </div>
          <div className="flex items-center my-4">
            <IoMdMail className="text-purple" />
            <p>example@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
