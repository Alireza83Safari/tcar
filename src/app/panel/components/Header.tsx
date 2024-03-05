"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const params = usePathname();
  const urlParts = params.split("/");
  const pathname = urlParts[urlParts.indexOf("panel") + 1];

  return (
    <div className=" bg-[#F2F3F5] fixed top-0 px-4 z-10 lg:mr-[9rem] md:mr-[8rem] xs:mr-[5rem] mr-[4rem] left-0 right-0 my-auto">
      <div className="flex items-center justify-between min-h-[4rem] text-black-500 font-semibold">
        <p className="text-xl text-purple">{pathname}</p>
        <Link href="/panel/dashboard" className="font-black text-purple text-3xl">
          Tcar
        </Link>
      </div>
    </div>
  );
};

export default Header;
