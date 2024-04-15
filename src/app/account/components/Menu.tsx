"use client";
import Link from "next/link";
import { FaMailBulk } from "react-icons/fa";
import { FaCar, FaOutdent, FaPlus, FaUser } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { User } from "@/types/user";
import React from "react";

type MenuProps = {
  user: User;
};

const Menu: React.FC<MenuProps> = ({ user }) => {
  const menuItem = [
    {
      id: 1,
      name: " اطلاعات فردی",
      href: "/account/userinfo",
      icon: <FaUser className="ml-2" />,
    },
    {
      id: 2,
      name: "خودروهای من",
      href: "/account/mycar",
      icon: <FaCar className="ml-2" />,
    },
  ];

  const params = usePathname();

  return (
    <div className="md:col-span-4 bg-lightPurple rounded-lg md:px-6 px-3 py-4 md:mb-0 mb-12">
      <div className="flex items-center">
        <Image
          width={100}
          height={100}
          alt=""
          src="/img/car-finder/about/01.jpg"
          className="w-10 h-10 rounded-full"
        />
        <p className="mr-5 text-lg">
          {user?.firstname} {user?.lastname}
        </p>
      </div>
      <div className="mr-14 my-4">
        <div className="text-sm my-1 flex items-center ">
          <FaMailBulk className="ml-1" />
          <p>{(user as any)?.username}</p>
        </div>
      </div>
      <Link
        href="/addcar"
        className=" w-[96%] py-3 rounded-lg mx-4 bg-purple hover:bg-boldPurple duration-300 text-white my-4 flex items-center justify-center"
      >
        <FaPlus className="ml-1" />
        <p> ثبت خودرو </p>
      </Link>

      <ul>
        {menuItem?.map((menu) => (
          <Link
            href={menu?.href}
            className={`flex items-center border-b border-borderColor py-5 ${
              menu.href?.includes(params) ? `text-purple` : `text-gray-200`
            }`}
          >
            {menu?.icon}
            <p>{menu?.name}</p>
          </Link>
        ))}
        <button
          className="flex items-center border-b border-purple py-5 min-w-full"
          onClick={() => signOut()}
        >
          <FaOutdent className="ml-2" />
          <p>خروج</p>
        </button>
      </ul>
    </div>
  );
};

export default Menu;
