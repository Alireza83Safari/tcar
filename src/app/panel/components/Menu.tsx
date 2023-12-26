"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCar, FaTextSlash } from "react-icons/fa6";
import { VscSymbolColor } from "react-icons/vsc";
import { GiFlatPlatform } from "react-icons/gi";
import { TbBrandIntercom } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";

const Menu = () => {
  const menuItem = [
    {
      id: 0,
      title: "داشبورد",
      href: "/panel/dashboard",
      icon: <FaTextSlash />,
    },
    { id: 1, title: "خودرو ها", href: "/panel/car", icon: <FaCar /> },
    { id: 2, title: "رنگ ها", href: "/panel/color", icon: <VscSymbolColor /> },
    {
      id: 3,
      title: "بدنه ها",
      href: "/panel/platform",
      icon: <GiFlatPlatform />,
    },
    {
      id: 4,
      title: "برند ها",
      href: "/panel/brand",
      icon: <TbBrandIntercom />,
    },
    { id: 5, title: "کاربران", href: "/panel/user", icon: <FiUsers /> },
  ];

  const path = usePathname();

  return (
    <div className="md:w-[12vw] w-[16vw] min-h-full fixed top-0 right-0 bg-[#0C111D] -z-10">
      <ul className="block mt-16">
        {menuItem.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className={`px-2 py-5 flex items-center sm:justify-start justify-center sm:text-base text-sm 2xl:text-xl ${
              item.href === path ? ` bg-black-200 text-orange sm:mr-4` : ``
            }`}
          >
            <button className="sm:text-base text-xl">
              {item.icon}
            </button>
            <p className="mr-2 sm:block hidden">{item.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
