"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBlog, FaCar, FaChartSimple } from "react-icons/fa6";
import { VscSymbolColor } from "react-icons/vsc";
import { GiFlatPlatform, GiKnightBanner } from "react-icons/gi";
import { TbBrandIntercom } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";

const Menu = () => {
  const menuItem = [
    {
      id: 0,
      title: "داشبورد",
      href: "/panel/dashboard",
      icon: <FaChartSimple />,
    },
    { id: 1, title: "خودرو ها", href: "/panel/car", icon: <FaCar /> },
    { id: 2, title: "رنگ ها", href: "/panel/color", icon: <VscSymbolColor /> },
    { id: 2, title: "بنر ها", href: "/panel/appPic", icon: <GiKnightBanner /> },
    { id: 2, title: "بلاگ ها", href: "/panel/blog", icon: <FaBlog /> },
    {
      id: 3,
      title: "پلتفرم ها",
      href: "/panel/platform",
      icon: <GiFlatPlatform />,
    },
    {
      id: 4,
      title: "کمپانی ها",
      href: "/panel/company",
      icon: <TbBrandIntercom />,
    },
    { id: 5, title: "کاربران", href: "/panel/user", icon: <FiUsers /> },
  ];

  const path = usePathname();

  return (
    <div className="w-[16vw] min-h-full fixed top-0 right-0 bg-[#181D19] text-white -z-10">
      <p className="sm:text-xl text-center my-6 font-bold">Tcar Panel</p>
      <ul className="block">
        {menuItem.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className={`px-2 py-4 flex items-center sm:justify-start justify-center sm:text-base text-sm 2xl:text-xl md:pr-6 ${
              item.href === path ? `bg-lightPurple text-purple` : ``
            }`}
          >
            <button className="sm:text-base text-xl">{item.icon}</button>
            <p className="mr-2 sm:block hidden">{item.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
