"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const params = usePathname();
  const urlParts = params.split("/");
  const pathname = urlParts[urlParts.indexOf("panel") + 1];

  return (
    <div className=" bg-[#F2F3F5] fixed top-0 px-4 z-10 w-[84vw] left-0 my-auto">
      <div className="flex items-center justify-between min-h-[4rem] text-black-500 font-semibold">
        <p className="text-xl">{pathname}</p>

        <Link href="/panel/dashboard">
          <Image
            src="https://res.cloudinary.com/dmywzd0yw/image/upload/v1703877265/ngn412xz0jqd8ia315ei.svg"
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
