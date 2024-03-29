import React from "react";
import { IoMdMail, IoMdSend } from "react-icons/io";
import { GoDeviceMobile } from "react-icons/go";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="xl:container m-auto md:px-8 px-3 sm:mt-16 border-t border-purple">
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
              className="py-3 rounded-md bg-black-100 w-[15rem] px-4 border border-purple outline-none"
            />
            <button className="absolute -left-10 top-2 bg-purple p-2 rounded-md">
              <IoMdSend className="text-xl text-white" />
            </button>
          </div>
        </div>

        <ul className="lg:order-2 order-4 lg:mt-0 mt-12">
          <h3 className="font-black mb-3">خرید و فروش ماشین</h3>
          <ul className="text-gray-200">
            <li className="my- hover:text-purple hover:cursor-pointer">
              جستجو خودرو
            </li>
            <li className="my-2 hover:text-purple hover:cursor-pointer">
              <Link href="/addcar">فروش خودرو</Link>
            </li>
            <li className="my-2 hover:text-purple hover:cursor-pointer">
              ارزیابی آنلاین خودرو
            </li>
            <li className="my-2 hover:text-purple hover:cursor-pointer">
              <Link href="/car">معاملات ماشین</Link>
            </li>
          </ul>
        </ul>

        <ul className="lg:order-3 order-5 lg:mt-0 mt-12">
          <h3 className="font-black mb-3">لینک های سریع</h3>
          <ul className="text-gray-200">
            <li className="my-2 hover:text-purple hover:cursor-pointer">
              <Link href="/about">درباره ما</Link>
            </li>
            <li className="my-2 hover:text-purple hover:cursor-pointer">
              <Link href="/help-center">تماس با ما</Link>
            </li>
            <li className="my-2 hover:text-purple hover:cursor-pointer">
              <Link href="/about">سوالات متداول</Link>
            </li>
            <li className="my-2 hover:text-purple hover:cursor-pointer">
              دانلود اپلیکیشن
            </li>
            <li className="my-2 hover:text-purple hover:cursor-pointer">
              مقالات
            </li>
          </ul>
        </ul>

        <ul className="lg:order-4 order-3 sm:mt-0 mt-12">
          <h3 className="font-black mb-3">حساب کاربری</h3>
          <ul className="text-gray-200">
            <li className="my-2 hover:text-purple hover:cursor-pointer">
              <Link href="/account/userinfo">اکانت من</Link>
            </li>
            <li className="my-2 hover:text-purple hover:cursor-pointer">
              <Link href="/account/mycar">لیست آگهی های من</Link>
            </li>
            <li className="my-2 hover:text-purple hover:cursor-pointer">
              <Link href="/addcar">ثبت آگهی</Link>
            </li>
          </ul>
        </ul>

        <div className="sm:text-base text-sm">
          <div className="flex items-center">
            <GoDeviceMobile className="text-purple" />
            <p>09102711361</p>
          </div>
          <div className="flex items-center my-4">
            <IoMdMail className="text-purple" />
            <p>alireza83safarii@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
