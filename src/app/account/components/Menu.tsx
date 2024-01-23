"use client";
import Link from "next/link";
import { FaMailBulk } from "react-icons/fa";
import { FaCar, FaOutdent, FaPhone, FaPlus, FaUser } from "react-icons/fa6";
import { getUserType } from "@/types/user.type";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const Menu = ({ user }: { user: getUserType }) => {
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
    /*     {
      id: 3,
      name: "موردعلاقه های من",
      href: "/account/favorite",
      icon: <FaHeart className="ml-2" />,
    }, */
    //{ id: 4, name: "خروج", href: "", icon: <FaOutdent className="ml-2" /> },
  ];

  const params = usePathname();

  return (
    <div className="md:col-span-4 bg-black-500 rounded-lg md:px-6 px-3 py-4 md:mb-0 mb-12">
      <div className="flex items-center">
        <img
          src="/img/car-finder/about/01.jpg"
          className="w-10 h-10 rounded-full"
        />
        <p className="mr-5 text-lg">
          {user?.firstname} {user?.lastname}
        </p>
      </div>
      <div className="mr-14 my-4">
        <div className="text-sm my-1 flex items-center ">
          <FaPhone className="ml-1" />
          <p>{user?.phone?.valueOf() ? user?.phone : "ثبت نشده"}</p>
        </div>
        <div className="text-sm my-1 flex items-center ">
          <FaMailBulk className="ml-1" />
          <p>{user?.email}</p>
        </div>
      </div>
      <Link
        href="/addcar"
        className=" w-[96%] py-3 rounded-lg mx-4 bg-orange my-4 flex items-center justify-center"
      >
        <FaPlus className="ml-1" />
        <p> ثبت خودرو </p>
      </Link>

      <ul>
        {menuItem?.map((menu) => (
          <Link
            href={menu?.href}
            className={`flex items-center border-b border-borderColor py-5 ${
              menu.href?.includes(params) ? `text-orange` : `text-gray-200`
            }`}
          >
            {menu?.icon}
            <p>{menu?.name}</p>
          </Link>
        ))}
        <button
          className="flex items-center border-b border-borderColor py-5"
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
