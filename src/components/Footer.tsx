import Image from "next/image";
import React from "react";
import { IoMdMail, IoMdSend } from "react-icons/io";
import { GoDeviceMobile } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="xl:container m-auto px-10 mt-16 border-t border-borderColor">
      <div className="flex justify-between py-12">
        <div className="max-w-[12rem]">
          <Image
            src={"/img/logo/logo-light.svg"}
            alt="Portfolio Image"
            width={130}
            height={34}
          />
          <p className="text-gray-200 mt-5">
            پیشنهادات خوب ما را از دست ندهید!
          </p>

          <div className="relative mt-5">
            <input
              type="text"
              placeholder="ایمیل شما"
              className="py-3 rounded-md bg-black-100 w-[15rem] px-4 border border-borderColor"
            />
            <button className="absolute -left-10 top-2 bg-orange p-2 rounded-md">
              <IoMdSend className="text-xl" />
            </button>
          </div>
        </div>

        <ul className="">
          <h3 className="text-white font-black mb-3">خرید و فروش ماشین</h3>
          <ul className="text-gray-200">
            <li className="my-2">جستجو خودرو</li>
            <li className="my-2">فروش خودرو</li>
            <li className="my-2">ارزیابی آنلاین خودرو</li>
            <li className="my-2">معاملات ماشین</li>
          </ul>
        </ul>

        <ul className="">
          <h3 className="text-white font-black mb-3">لینک های سریع</h3>
          <ul className="text-gray-200">
            <li className="my-2">درباره ما</li>
            <li className="my-2">تماس با ما</li>
            <li className="my-2">سوالات متداول</li>
            <li className="my-2">دانلود اپلیکیشن</li>
            <li className="my-2">مقالات</li>
          </ul>
        </ul>

        <ul className="">
          <h3 className="text-white font-black mb-3">حساب کاربری</h3>
          <ul className="text-gray-200">
            <li className="my-2">اکانت من</li>
            <li className="my-2">لیست موردعلاقه ها</li>
            <li className="my-2">لیست آگهی های من</li>
            <li className="my-2">ثبت آگهی</li>
          </ul>
        </ul>

        <div>
          <div className="flex items-center">
            <GoDeviceMobile className="text-orange" />
            <p>09122222222</p>
          </div>
          <div className="flex items-center my-4">
            <IoMdMail className="text-orange" />
            <p>example@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
