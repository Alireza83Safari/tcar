import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-[#1F2432] px-4 min-w-full">
      <div className="flex items-center justify-between">
        <div>
          <Image
            width={50}
            height={50}
            alt="user"
            src="/img/car-finder/about/01.jpg"
            className="rounded-full object-contain w-[4rem] h-[4rem]"
          />
        </div>
        <Link href="/">
          <Image
            src="/img/logo/logo-light.svg"
            alt="logo"
            width={120}
            height={10}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
