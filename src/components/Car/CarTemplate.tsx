import React from "react";
import Link from "next/link";
import { CarType } from "@/types/car.type";

const CarTemplate = ({
  image,
  _id,
  title,
  price,
  carStatus,
  gearbox,
}: CarType) => {
  return (
    <div>
      <Link
        href={`car/${_id}`}
        className="grid grid-cols-3 bg-black-100 m-3 h-[10rem]"
        key={_id}
      >
        <div className="max-h-[10rem] col-span-2">
          <div className="px-7 py-4">
            <p className="font-semibold">{title}</p>
            <div className="flex items-center">
              <p className="text-gray-200 my-2">وضعیت:</p>
              <p className="text-white">{carStatus === 0 ? "نو" : "دست دوم"}</p>
            </div>
            <p className="text-orange text-sm font-semibold my-2">
              {price?.toLocaleString()} تومان
            </p>
            <div className="flex items-center">
              <p className="text-sm text-gray-200 my-2">گیربکس:</p>
              <p className="text-white">{gearbox === 0 ? "دستی" : "اتومات"}</p>
            </div>
          </div>
        </div>

        <img
          src={`/uploads/${image}`}
          className="col-span-1 object-contain h-[10rem]"
          alt="car"
        />
      </Link>
    </div>
  );
};

export default CarTemplate;
