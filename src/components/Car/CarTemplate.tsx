import React from "react";
import Link from "next/link";
import { CarType } from "@/types/car.type";
import { CldImage } from "next-cloudinary";

const CarTemplate = ({
  image,
  _id,
  title,
  price,
  carStatus,
  gearbox,
}: CarType) => {
  return (
    <div className="shadow-md sm:w-auto">
      <Link href={`car/${_id}`} key={_id}>
        <div className="bg-black-100 m-3 rounded-lg hover:opacity-70 duration-300">
          <div className="py-7 flex justify-center items-center h-[15rem]">
            <CldImage
              width="1000"
              height="1000"
              src={String(image)}
              className="object-contain w-auto"
              alt="Description of my image"
            />
          </div>

          <div className="p-3 grid grid-cols-2">
            <p className="font-semibold text-center text-ellipsis 2xl:text-lg col-span-2 whitespace-nowrap">
              {title}
            </p>
            <div className="flex items-center text-sm my-4">
              <p className="text-gray-200 my-2 ml-2">وضعیت:</p>
              <p className="text-white">{carStatus === 0 ? "نو" : "دست دوم"}</p>
            </div>
            <div className="flex items-center text-sm my-4">
              <p className="text-sm text-gray-200 my-2 ml-2">گیربکس:</p>
              <p className="text-white">{gearbox === 0 ? "دستی" : "اتومات"}</p>
            </div>

            <p className="text-orange text-center 2xl:text-base text-sm font-semibold col-span-2">
              {price?.toLocaleString()} تومان
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CarTemplate;
