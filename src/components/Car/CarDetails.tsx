"use client";

import Image from "next/image";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import { CarType } from "../../types/car.type";
import Accordion from "../Accordion";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { apiUrl } from "@/services/apiUrl";

const CarDetails = ({ car }: { car: CarType }) => {
  const { data: session } = useSession();

  const addFavorite = async () => {
    if (session) {
      const data = {
        carId: car._id,
        user: (session as any)?.id,
      };

      try {
        if (!apiUrl) {
          return null;
        }
        const res = await fetch(`${apiUrl}/api/favorite`, {
          method: "POST",
          body: JSON.stringify(data),
        });
        if (res.status === 201) {
          toast.success("با موفقیت اضاقه شد");
        }
      } catch (error) {
        console.log(error);

        toast.error(String(error));
      }
    } else {
      toast.error("لطفا وارد حساب شوید");
    }
  };

  return (
    <section className="px-4 mt-10">
      <div className="flex justify-between pb-5">
        <p className="text-3xl">{car?.title}</p>
        <div className="flex">
          <FaHeart className="text-xl mx-3" onClick={addFavorite} />
          lkj
          <FaShareAlt className="text-xl mx-3" />
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div className="col-span-2 flex justify-center items-center">
          <Image
            src={car?.image ? `/uploads/${car?.image}` : "/img/no-image.png"}
            alt="car"
            className="min-w-ful rounded-lg"
            width={300}
            height={300}
          />
        </div>

        <div className="col-span-2 grid grid-cols-2 px-7">
          <div className="mb-5">
            {car?.carStatus === 0 ? (
              <button className="px-8 rounded-lg bg-green mx-1">نو</button>
            ) : (
              <button className="px-8 rounded-lg bg-blue mx-1">کارکرده</button>
            )}
          </div>
          <span className="text-xl mb-4">
            قیمت:{car?.price?.toLocaleString()}
          </span>
          <span className="text-xl mb-4">رنگ: {(car?.color as any)?.name}</span>
          <span className="pl-3 mb-4">کارکرد: {car?.work} کیلومتر</span>
          <span className="pl-3 mb-4">
            گیربکس:
            {car?.gearbox === 0 ? "دستی" : "اتومات"}
          </span>

          <span className="pl-3 mb-4">
            سوخت:
            {+car?.fuel == 0 ? "بنزینی" : "برقی"}
          </span>

          <span className="pl-3 mb-4">
            پلتفرم:
            {(car?.platform as any)?.name}
          </span>

          <div className="bg-black-100 p-4 rounded-lg mt-8 col-span-2">
            <p className="mb-4">مشخصات فروشنده</p>
            <div className="mb-4 flex items-center">
              <p>نام:</p>
              <p>
                {car?.firstname} {car?.lastname}
              </p>
            </div>
            <div className="mb-4 flex items-center">
              <p className="ml-4">شماره تماس:</p>
              <p className="border border-orange px-4 rounded-lg py-1">
                {car?.phone}
              </p>
            </div>
            <div className="flex items-center">
              <p className="ml-4">آدرس:</p>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="rounded-lg border-x border-t border-borderColor mt-5">
          <div className="border-b border-borderColor">
            <Accordion title="تکنولوژی">
              <div className="grid grid-cols-2">
                <div className="text-sm text-gray-200">
                  <li>کنترل آب و هوا</li>
                  <li>سیستم ناوبری</li>
                  <li>بلوتوث</li>
                  <li>مدیریت از راه دور</li>
                </div>
                <div className="text-sm text-gray-200">
                  <li>کنترل آب و هوا</li>
                  <li>سیستم ناوبری</li>
                  <li>بلوتوث</li>
                  <li>مدیریت از راه دور</li>
                </div>
              </div>
            </Accordion>

            <Accordion title="امنیت">
              <div className="grid grid-cols-2">
                <div className="text-sm text-gray-200">
                  <li>کیسه هوا: راننده</li>
                  <li>کیسه هوا: مسافر</li>
                  <li>زنگ هشدار</li>
                  <li>ترمزهای ضد قفل</li>
                </div>
                <div className="text-sm text-gray-200">
                  <li>کمک ترمز</li>
                  <li>هشدار خروج از خط</li>
                  <li>چراغهای مه</li>
                  <li>قفل درهای برقی</li>
                </div>
              </div>
            </Accordion>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg">توضیحات فروشنده</h3>
          <p className="text-sm text-gray-200">{car?.description}</p>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
