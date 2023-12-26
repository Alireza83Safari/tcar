"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className=" bg-[#0C111D] fixed top-0 px-4 z-10 min-w-full my-auto">
      <div className="flex items-center justify-between min-h-[4rem]">
        <div className="flex items-center">
          <Image
            width={40}
            height={40}
            alt="user"
            src="/img/car-finder/about/01.jpg"
            className="rounded-full sm:flex hidden object-contain w-[3.3rem] h-[3.3rem]"
          />
          <p className="sm:mr-4 md:text-base text-xs">
            {(session as any)?.email}
          </p>
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
