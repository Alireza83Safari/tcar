import Link from "next/link";
import React from "react";
import { FaMailBulk } from "react-icons/fa";
import { TbCameraPlus } from "react-icons/tb";
import {
  FaCar,
  FaComment,
  FaHeart,
  FaOutdent,
  FaPhone,
  FaPlus,
  FaUser,
} from "react-icons/fa6";

const Menu = () => {
  return (
    <div className="col-span-4 bg-black-500 rounded-lg px-6 py-4">
      <div className="flex items-center">
        <img
          src="/img/car-finder/about/01.jpg"
          className="w-10 h-10 rounded-full"
        />
        <p className="mr-5 text-lg">رابرت فاکس</p>
      </div>
      <div className="mr-14 my-4">
        <div className="text-sm my-1 flex items-center ">
          <FaPhone className="ml-1" /> <p>(302) 555-0107</p>
        </div>
        <div className="text-sm my-1 flex items-center ">
          <FaMailBulk className="ml-1" />
          <p>robert_fox@email.com</p>
        </div>
      </div>
      <Link
        href="/addcar"
        className=" w-[96%] py-3 rounded-lg mx-4 bg-orange my-4 flex items-center justify-center"
      >
        <FaPlus className="ml-1" />
        <p> ثبت خودرو </p>
      </Link>

      <ul className=" text-gray-200">
        <Link
          href="/account/userinfo"
          className="flex items-center border-b border-borderColor py-5"
        >
          <FaUser className="ml-2" />
          <p>اطلاعات فردی</p>
        </Link>
        <Link
          href="/account/mycar"
          className="flex items-center border-b border-borderColor py-5"
        >
          <FaCar className="ml-2" />
          <p>خودروهای من</p>
        </Link>
        <li className="flex items-center border-b border-borderColor py-5">
          <FaHeart className="ml-2" />
          <p>موردعلاقه های من</p>
        </li>
        <li className="flex items-center border-b border-borderColor py-5">
          <FaComment className="ml-2" />
          <p>لیست نظرات من</p>
        </li>
        <li className="flex items-center border-b border-borderColor py-5">
          <FaOutdent className="ml-2" />
          <p>خروج</p>
        </li>

        <li></li>
      </ul>
    </div>
  );
};

export default Menu;
