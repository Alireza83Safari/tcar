"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCar } from "react-icons/fa6";
import { VscSymbolColor } from "react-icons/vsc";
import { GiFlatPlatform } from "react-icons/gi";
import { TbBrandIntercom } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";

const Menu = () => {
  const menuItem = [
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
    <div className="w-[12vw] min-h-screen fixed top-0 right-0 bg-[#0C111D]">
      <ul className=" block">
        {menuItem.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className={`px-8 py-3 flex items-center ${
              item.href === path ? ` bg-[#1F2432]` : ``
            }`}
          >
            {item.icon}
            <p className="mr-2">{item.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
