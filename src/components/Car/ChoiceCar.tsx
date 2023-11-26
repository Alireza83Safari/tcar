import React from "react";
import CarTemplate from "./CarTemplate";
import { FaArrowLeft } from "react-icons/fa6";

const ChoiceCar = () => {
  return (
    <nav className="px-8 xl:container m-auto">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl my-7 font-semibold">آگهی های برگزیده اخیر</h3>
        <div className="flex items-center text-gray-200">
          <p>مشاهده همه</p>
          <FaArrowLeft className="mr-2" />
        </div>
      </div>
      <div className="grid grid-cols-3">
        <CarTemplate />
        <CarTemplate />
        <CarTemplate />
      </div>
    </nav>
  );
};

export default ChoiceCar;
