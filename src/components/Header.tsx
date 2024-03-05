"use client";
import Link from "next/link";
import { FiPlus, FiUser } from "react-icons/fi";
import { FaAngleDown, FaX } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
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

  const [accountMenu, setAccountMenu] = useState<accountMenuType[]>([]);
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

  useEffect(() => {
    menuItemHandler();
  }, [session]);

  const router = useRouter();
  const [searchQuery, setsearchQuery] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showBuy, setShowBuy] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  const searchHandler = () => {
    if (searchQuery.trim()) {
      router.push(`/car?q=${searchQuery}`);
    }
  };

  const logoutHanlder = () => {
    signOut();
    router.push("/");
  };

  const UserInfos = useMemo(
    () =>
      session ? (
        <Link
          replace={true}
          href="/account"
          className="flex items-center hover:text-purple duration-300"
        >
          <FiUser className="text-3xl" />
          <p className="text-sm mr-1 sm:block hidden">{(session as any)?.username}</p>
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
      ),
    [session]
  );

  return (
    <header className="xl:container mx-auto md:px-8 px-2 sticky top-0 z-10 bg-white shadow-lg">
      <div className="flex justify-between items-center h-[4rem]">
        <div className="lg:flex hidden items-center xl:gap-x-6 gap-x-4 xl:text-base text-sm">
          <Link href="/" className="font-black text-purple text-3xl">
            Tcar
          </Link>

          <Link replace={true} href="/car" className="flex items-center">
            <p className="hover:text-purple duration-300">خرید خودرو</p>
          </Link>

          <div className="relaitve group z-20">
            <button className="flex items-center">
              <FaAngleDown className="font-bold ml-1 text-sm" />
              <p className="hover:text-purple duration-300">اکانت</p>
            </button>
            <ul className="hidden group-hover:block shadow-2xl absolute bg-white z-20 px-4 py-2 rounded-xl">
              {accountMenu.map((menu, index) => (
                <li className="my-2 block" key={index}>
                  <Link
                    replace={true}
                    href={menu.href}
                    className="hover:text-purple duration-300"
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
          <Link
            replace={true}
            href="/about"
            className="hover:text-purple duration-300"
          >
            درباره ما
          </Link>
          <Link
            replace={true}
            href="/help-center"
            className="hover:text-purple duration-300"
          >
            ارتباط با ما
          </Link>
          <Link
            replace={true}
            href="/contact"
            className="hover:text-purple duration-300"
          >
            تماس با ما
          </Link>
          {session && (
            <Link
              replace={true}
              href="/panel"
              className="hover:text-purple duration-300"
            >
              پنل
            </Link>
          )}
        </div>

        {showMenu && (
          <div className="lg:hidden bg-white block min-w-[10rem] min-h-screen pt-2 absolute bg-black-100 border-l border-lightPurple z-10 items-center gap-x-8 right-0 top-0 ">
            <button
              className=" absolute top-2 left-2"
              onClick={() => setShowMenu(false)}
            >
              <FaX />
            </button>
            <div className="py-2 border-b border-lightPurple text-center hover:text-purple duration-300">
              <Link
                replace={true}
                href="car"
                onClick={() => setShowBuy(!showBuy)}
              >
                خرید خودرو
              </Link>
            </div>

            <div className="py-2 border-b border-lightPurple text-center hover:text-purple duration-300">
              <Link replace={true} href="/contact">
                تماس با ما
              </Link>
            </div>

            <div className="relaitve group py-2 border-b border-lightPurple">
              <button
                className="flex items-center justify-center m-auto"
                onClick={() => setShowAccount(!showAccount)}
              >
                <FaAngleDown className="font-bold ml-1 text-sm" />
                <p>اکانت</p>
              </button>
              <ul className="block">
                {showAccount && (
                  <>
                    {accountMenu.map((menu, index) => (
                      <li className=" text-center py-2 border-b border-lightPurple">
                        <Link replace={true} href={menu.href} key={index}>
                          {menu.title}
                        </Link>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>
            <Link
              replace={true}
              href="/about"
              className="text-center py-2 border-b border-lightPurple block hover:text-purple duration-300"
            >
              درباره ما
            </Link>
            <Link
              replace={true}
              href="/panel"
              className="text-center py-2 border-b border-lightPurple block hover:text-purple duration-300"
            >
              پنل
            </Link>
            <Link
              replace={true}
              href="/addcar"
              className="text-center py-2 border-b border-lightPurple block hover:text-purple duration-300"
            >
              ثبت خودرو
            </Link>
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
              className="bg-black-100 border border-purple outline-none rounded-lg py-1 md:w-auto w-[10rem] placeholder:text-xs pr-8"
              placeholder="جستجو"
              onChange={(e) => setsearchQuery(e.target.value)}
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
          <div className="flex items-center">{UserInfos}</div>
          <Button
            href="addcar"
            className="sm:py-2 py-1 sm:px-4 px-2 sm:text-base test-sm"
          >
            <FiPlus className="sm:block hidden text-white" />
            <p className="sm:mr-2 font-semibold text-white">ثبت خودرو</p>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
