import Image from "next/image";
import React from "react";
import { RiGasStationFill } from "react-icons/ri";
import { TbManualGearbox } from "react-icons/tb";
import { AiOutlineDashboard } from "react-icons/ai";
import Link from "next/link";

const CarTemplate = () => {
  return (
    <Link href="car/id" className="bg-black-100 m-4 rounded-lg">
      <div>
        <Image
          src={"/img/car-finder/single/gallery/01.jpg"}
          width={700}
          height={700}
          alt="car"
        />
      </div>
      <div className="px-7 py-4">
        <p className="font-semibold">سال ساخت 1376</p>
        <p className="text-sm text-gray-200 my-2">مرسدس بنز کانورتیبل کوپه</p>
        <p className="text-orange text-sm font-semibold my-2">258000 تومان</p>
        <p className="text-sm text-gray-200 my-2">نیویورک</p>
      </div>
      <div className="grid grid-cols-3 gap-x-4 px-3 border-t border-borderColor pt-4 mb-4">
        <div className="bg-black-500 w-full text-center py-4 rounded-lg">
          <div className="flex justify-center">
            <RiGasStationFill className="text-2xl" />
          </div>
          <p>بنزین</p>
        </div>
        <div className="bg-black-500 w-full text-center py-4 rounded-lg">
          <div className="flex justify-center">
            <TbManualGearbox className="text-2xl" />
          </div>
          <p>بنزین</p>
        </div>
        <div className="bg-black-500 w-full text-center py-4 rounded-lg">
          <div className="flex justify-center">
            <AiOutlineDashboard className="text-2xl" />
          </div>
          <p>بنزین</p>
        </div>
      </div>
    </Link>
  );
};

export default CarTemplate;
