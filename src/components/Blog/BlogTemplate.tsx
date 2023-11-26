import Image from "next/image";
import React from "react";
import { RiGasStationFill } from "react-icons/ri";
import { TbManualGearbox } from "react-icons/tb";
import { AiOutlineDashboard } from "react-icons/ai";

const BlogTemplate = () => {
  return (
    <div className="bg-black-100 mx-4 rounded-lg">
      <div>
        <Image
          src={"/img/car-finder/blog/05.jpg"}
          width={700}
          height={700}
          alt="car"
        />
      </div>
      <div className="px-7 py-4">
        <p className="text-orange text-sm font-semibold my-2">رویداد ها</p>
        <p className="text-sm text-gray-200 my-2">
          10 رویداد برتر خودروهای کلاسیک
        </p>
      </div>
    </div>
  );
};

export default BlogTemplate;
