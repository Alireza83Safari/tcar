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
    { id: 2, title: "بنر ها", href: "/panel/banner", icon: <GiKnightBanner /> },
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
    <div className="lg:w-[9rem] md:w-[8rem] xs:w-[5rem] w-[4rem] min-h-full fixed top-0 right-0 bottom-0 bg-[#181D19] text-white z-10">
      <p className="md:text-xl text-center xs:my-6 my-3 font-bold">Tcar Panel</p>
      <ul className="block">
        {menuItem.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className={`px-2 py-4 flex items-center md:justify-start justify-center md:text-base text-sm 2xl:text-xl md:pr-6 ${
              item.href === path ? `bg-lightPurple text-purple` : ``
            }`}
          >
            <button className="md:text-base text-xl">{item.icon}</button>
            <p className="mr-2 md:block hidden">{item.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
