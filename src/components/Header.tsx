"use client";
import Image from "next/image";
import { CiUser } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { FaAngleDown, FaBurger } from "react-icons/fa6";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const router = useRouter();
  const [searchQuery, setsearchQuery] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showBuy, setShowBuy] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  const searchHandler = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${searchQuery}`);
    }
  };
  return (
    <header className="xl:container mx-auto px-8">
      <div className="flex justify-between items-center h-[4rem]">
        <div className="lg:flex hidden items-center gap-x-8 ">
          <div>
            <Image
              src={"/img/logo/logo-light.svg"}
              alt="logo"
              width={120}
              height={10}
            />
          </div>

          <div className="relaitve group">
            <button className="flex items-center">
              <FaAngleDown className="font-bold ml-1 text-sm" />
              <p className="">خرید خودرو</p>
            </button>
            <ul className="hidden group-hover:block absolute">
              <li>tst1</li>
              <li>tst2</li>
              <li>tst3</li>
              <li>tst4</li>
            </ul>
          </div>

          <div className="relaitve group">
            <button className="flex items-center">
              <FaAngleDown className="font-bold ml-1 text-sm" />
              <p className="">اکانت</p>
            </button>
            <ul className="hidden group-hover:block absolute">
              <li>tst1</li>
              <li>tst2</li>
              <li>tst3</li>
              <li>tst4</li>
            </ul>
          </div>
          <div>درباره ما</div>
        </div>

        {showMenu && (
          <div className="lg:hidden block min-w-[10rem] min-h-full pt-2 absolute bg-black-100 border-r border-borderColor z-10 items-center gap-x-8 left-0 top-0 ">
            <div className="py-2 border-b border-borderColor relative">
              <button
                className="flex items-center justify-center m-auto"
                onClick={() => setShowBuy(!showBuy)}
              >
                <FaAngleDown className="font-bold ml-1 text-sm" />
                <p className="">خرید خودرو</p>
              </button>
              <ul className="block">
                {showBuy && (
                  <>
                    <li className="border-b border-borderColor text-center my-1">
                      tst1
                    </li>
                    <li className="border-b border-borderColor text-center my-1">
                      tst2
                    </li>
                    <li className="border-b border-borderColor text-center my-1">
                      tst3
                    </li>
                    <li className="border-b border-borderColor text-center my-1">
                      tst4
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className="relaitve group py-2 border-b border-borderColor">
              <button
                className="flex items-center justify-center m-auto"
                onClick={() => setShowAccount(!showAccount)}
              >
                <FaAngleDown className="font-bold ml-1 text-sm" />
                <p className="">اکانت</p>
              </button>
              <ul className="block">
                {showAccount && (
                  <>
                    <li className="border-b border-borderColor text-center my-1">
                      tst1
                    </li>
                    <li className="border-b border-borderColor text-center my-1">
                      tst2
                    </li>
                    <li className="border-b border-borderColor text-center my-1">
                      tst3
                    </li>
                    <li className="border-b border-borderColor text-center my-1">
                      tst4
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="text-center py-2 border-b border-borderColor">
              درباره ما
            </div>
          </div>
        )}

        <div className="flex">
          <button
            className="lg:hidden block ml-5 text-2xl"
            onClick={() => setShowMenu(!showMenu)}
          >
            <GiHamburgerMenu />
          </button>

          <div className="relative">
            <input
              type="text"
              className="bg-black-100 border border-borderColor rounded-lg py-1"
              onChange={(e) => setsearchQuery(e.target.value)}
            />
            <button
              className="absolute top-2 left-2 border-r pr-1"
              onClick={searchHandler}
            >
              <FaSearch className="text-orange text-xl" />
            </button>
          </div>
        </div>

        <div className="flex gap-x-4">
          <div className="flex items-center">
            <CiUser className="text-3xl" />
            {/* <MdOutlineLogin className="text-2xl" /> */}
          </div>
          <Link
            href="addcar"
            className="bg-orange flex items-center py-2 px-3 rounded-lg"
          >
            <FiPlus className="" />
            <p className="mr-2 font-semibold">ثبت خودرو</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
