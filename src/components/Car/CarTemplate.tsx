import React from "react";
import Link from "next/link";
import { CarType } from "@/types/car.type";
import "./CarTemplate.css";
import Image from "next/image";
interface CarTemplateProps {
  car: CarType;
  dataAos?: string;
}
const CarTemplate: React.FC<CarTemplateProps> = ({ car, dataAos }) => {
  return (
    <div
      className="shadow-md sm:w-auto relative parent rounded-xl bg-black-100 m-3"
      data-aos={dataAos}
      data-aos-once="true"
    >
      <Link href={`car/${car?._id}`} key={car?._id}>
        <div className="rounded-full card-item">
          <div className="py-7 flex justify-center items-center h-[15rem]">
            <Image
              width="600"
              height="600"
              src={String(car?.image)}
              className="object-contain min-w-full"
              alt={car?.title}
            />
          </div>

          <div className="p-3 grid grid-cols-2">
            <p className="text-center text-ellipsis 2xl:text-lg font-bold col-span-2 whitespace-nowrap">
              {car?.title}
            </p>
            <div className="flex items-center text-sm my-4">
              <p className="text-gray-200 my-2 ml-2">وضعیت:</p>
              <p className="text-white">
                {car?.carStatus === 0 ? "نو" : "دست دوم"}
              </p>
            </div>
            <div className="flex items-center text-sm my-4">
              <p className="text-sm text-gray-200 my-2 ml-2">گیربکس:</p>
              <p className="text-white">
                {car?.gearbox === 0 ? "دستی" : "اتومات"}
              </p>
            </div>

            <p className="text-purple text-center 2xl:text-base text-sm font-semibold col-span-2">
              {car?.price?.toLocaleString()} تومان
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CarTemplate;
