"use client";
import Link from "next/link";
import { FiPlus, FiUser } from "react-icons/fi";
import { FaAngleDown, FaX } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { signOut, useSession } from "next-auth/react";
import Button from "./Form/Button";

type accountMenuType = {
  title: String;
  href: string;
};

const accountMenuItem = [
  { title: "اطلاعات فردی", href: "/account/userinfo" },
  { title: "خودرو های من", href: "/account/mycar" },
  { title: "ثبت نام", href: "/register" },
  { title: "ورود", href: "/login" },
];

const Header = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [accountMenu, setAccountMenu] = useState<accountMenuType[]>([]);
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const menuItemHandler = () => {
    if (session) {
      let menus = accountMenuItem.filter(
        (menu) => menu.href !== "/register" && menu.href !== "/login"
      );
      setAccountMenu(menus);
    } else {
      let menus = accountMenuItem.filter((menu) => menu.title !== "/register");
      setAccountMenu(menus);
    }
  };

  const searchHandler = () => {
    if (searchInputRef?.current?.value?.trim()) {
      router.push(`/car?q=${searchInputRef?.current?.value}`);
    }
  };

  const logoutHanlder = () => {
    signOut();
    router.push("/");
  };

  const isActiveMenu = (href: string) => {
    if (pathname?.includes(href)) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        searchHandler();
      }
    };

    const searchInput = searchInputRef.current;

    if (searchInput) {
      searchInput.addEventListener("keypress", handleKeyPress);
    }

    return () => {
      if (searchInput) {
        searchInput.removeEventListener("keypress", handleKeyPress);
      }
    };
  }, [searchHandler]);

  useEffect(() => {
    menuItemHandler();
  }, [session]);

  return (
    <header className="sticky top-0 right-0 z-10 bg-white shadow-lg">
      <div className="xl:container mx-auto md:px-8 px-2 ">
        <div className="flex justify-between items-center h-[4rem] relative">
          <div
            className={` items-center xl:gap-x-6 gap-x-4 xl:text-base text-sm lg:w-auto w-[7.4rem] lg:relative fixed right-0 top-0 bottom-0 lg:bg-white bg-gray-100 z-50 lg:text-start text-center ${showMenu ? "lg:flex block" : "lg:flex hidden"}`}
          >
            <button
              className=" absolute right-24 text-red text-xl top-2 lg:hidden flex"
              onClick={() => setShowMenu(!showMenu)}
            >
              <FaX />
            </button>
            <Link
              href="/"
              className="font-black text-purple text-3xl text-center"
            >
              Tcar
            </Link>

            <Link
              replace={true}
              href="/car"
              className="flex items-center lg:justify-normal justify-center"
            >
              <p
                className={`hover:text-purple duration-300 lg:flex block lg:py-0 py-3 ${isActiveMenu("car") ? "text-purple" : ""}`}
              >
                خرید خودرو
              </p>
            </Link>

            <div className="relative group z-20 flex justify-center">
              <div>
                <button className="flex items-center lg:justify-normal justify-center">
                  <FaAngleDown className="font-bold ml-1 text-sm" />
                  <p
                    className={`hover:text-purple duration-300 flex justify-center items-center lg:py-0 py-3  ${isActiveMenu("account") ? "text-purple" : ""}`}
                  >
                    اکانت
                  </p>
                </button>
                <ul className="hidden group-hover:block shadow-2xl absolute top- w-[8rem] bg-white z-20 px-4 py-2 rounded-xl">
                  {accountMenu.map((menu, index) => (
                    <li className="my-2 block" key={index}>
                      <Link
                        replace={true}
                        href={menu.href}
                        className="hover:text-purple duration-300 lg:flex block lg:py-0 py-3 items-center justify-center"
                      >
                        {menu.title}
                      </Link>
                    </li>
                  ))}
                  <li className={`my-2 ${session ? `block` : `hidden`}`}>
                    <button
                      className="text-gray-200 hover:text-white duration-300"
                      onClick={() => logoutHanlder()}
                    >
                      خروج
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              replace={true}
              href="/about"
              className="hover:text-purple duration-300 lg:flex block lg:py-0 py-3"
            >
              درباره ما
            </Link>
            <Link
              replace={true}
              href="/help-center"
              className={`hover:text-purple duration-300 lg:flex block lg:py-0 py-3 ${isActiveMenu("help-center") ? "text-purple" : ""}`}
            >
              ارتباط با ما
            </Link>
            <Link
              replace={true}
              href="/contact"
              className={`hover:text-purple duration-300 lg:flex block lg:py-0 py-3 ${isActiveMenu("contact") ? "text-purple" : ""}`}
            >
              تماس با ما
            </Link>
            {session && (
              <Link
                replace={true}
                href="/panel"
                className={`hover:text-purple duration-300 lg:flex block lg:py-0 py-3 ${isActiveMenu("panel") ? "text-purple" : ""}`}
              >
                پنل
              </Link>
            )}
          </div>

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
                className="bg-black-100 border border-purple outline-none rounded-lg py-1 md:w-auto w-[10rem] placeholder:text-xs pr-8"
                placeholder="جستجو"
                ref={searchInputRef}
              />
              <button
                className="absolute top-2 right-2 pl-1"
                onClick={searchHandler}
              >
                <FaSearch className="text-purple text-lg" />
              </button>
            </div>
          </div>

          <div className="flex gap-x-4">
            <div className="flex items-center">
              {session ? (
                <Link
                  replace={true}
                  href="/account"
                  className="flex items-center hover:text-purple duration-300"
                >
                  <FiUser className="text-3xl" />
                  <p className="text-sm mr-1 sm:block hidden">
                    {(session as any)?.username}
                  </p>
                </Link>
              ) : (
                <Link
                  replace={true}
                  href="/login"
                  className="flex items-center hover:text-purple duration-300"
                >
                  <p className="sm:flex hidden xl:text-base text-sm">
                    ورود به حساب کاربری
                  </p>
                  <FiUser className="text-xl" />
                </Link>
              )}
            </div>
            <Button
              href="addcar"
              className="sm:py-2 py-1 sm:px-4 px-2 sm:text-base test-sm"
            >
              <FiPlus className="sm:block hidden text-white" />
              <p className="sm:mr-2 font-semibold text-white">ثبت خودرو</p>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
