import Link from "next/link";
import React from "react";
interface buttonPropsType {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href: string;
}

const Button = ({ children, onClick, className, href }: buttonPropsType) => {
  return (
    <button>
      <Link
        href={href}
        className={` bg-purple text-white hover:bg-boldPurple duration-300 rounded-lg my-8 flex items-center ${
          className ? className : `py-3 px-8`
        }`}
        onClick={onClick}
      >
        {children}
      </Link>
    </button>
  );
};

export default Button;
