"use client";
//import { FaHeart, FaShareAlt } from "react-icons/fa";
import { CarType } from "../../types/car.type";
import Accordion from "../Accordion";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { apiUrl } from "@/services/apiUrl";
import moment from "jalali-moment";
import { CldImage } from "next-cloudinary";

const CarDetails = ({ car }: { car: CarType }) => {
  const { data: session } = useSession();

  /*   const addFavorite = async () => {
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
        toast.error(String(error));
      }
    } else {
      toast.error("لطفا وارد حساب شوید");
    }
  }; */

  const persianDate = moment(car.createdAt).locale("fa").format("YYYY/MM/DD");

  return (
    <section className="sm:px-4 px-1 mt-10">
      <div className="flex justify-between pb-5">
        <p className="sm:text-3xl text-xl text-center">{car?.title}</p>
        {/*  <div className="flex">
          <FaHeart className="text-xl mx-3" onClick={addFavorite} />
          <FaShareAlt className="text-xl mx-3" />
        </div> */}
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="flex justify-center items-center md:my-0 my-10">
          <CldImage
            width="500"
            height="500"
            src={String(car?.image)}
            alt="Description of my image"
          />
        </div>

        <div className="grid grid-cols-2 md:px-7 ">
          <div className="mb-5">
            {car?.carStatus === 0 ? (
              <button className="px-8 rounded-lg bg-green mx-1">نو</button>
            ) : (
              <button className="px-8 rounded-lg bg-blue mx-1">کارکرده</button>
            )}
          </div>
          <div className="mb-4 flex sm:text-base text-sm">
            <p className="ml-2  text-gray-200">قیمت:</p>
            <p> {car?.price?.toLocaleString()}</p>
          </div>
          <div className="mb-4 flex sm:text-base text-sm">
            <p className="ml-2  text-gray-200">برند:</p>
            <p>{(car?.company as any)?.name}</p>
          </div>
          <div className="mb-4 flex sm:text-base text-sm">
            <p className="ml-2  text-gray-200">رنگ:</p>
            <p> {(car?.color as any)?.name}</p>
          </div>
          <div className="mb-4 flex sm:text-base text-sm">
            <p className="ml-2  text-gray-200">کیلومتر:</p>
            <p> {car?.work}</p>
          </div>
          <div className="mb-4 flex sm:text-base text-sm">
            <p className="ml-2  text-gray-200">گیربکس:</p>
            <p> {car?.gearbox === 0 ? "دستی" : "اتومات"}</p>
          </div>
          <div className="mb-4 flex sm:text-base text-sm">
            <p className="ml-2  text-gray-200">سوخت:</p>
            <p>{+car?.fuel == 0 ? "بنزینی" : "برقی"}</p>
          </div>
          <div className="mb-4 flex sm:text-base text-sm">
            <p className="ml-2  text-gray-200">پلتفرم:</p>
            <p>{(car?.platform as any)?.name}</p>
          </div>
          <div className="mb-4 flex sm:text-base text-sm">
            <p className="ml-2  text-gray-200">سال:</p>
            <p> {car?.years}</p>
          </div>
          <div className="mb-4 flex sm:text-base text-sm">
            <p className="ml-2  text-gray-200">تاریخ:</p>
            <p> {persianDate}</p>
          </div>

          <div className="bg-gradient-to-r from-neutral-800 to-slate-800 p-4 rounded-lg mt-8 col-span-2">
            <p className="mb-4 sm:text-base text-sm">مشخصات فروشنده</p>
            <div className="mb-4 flex items-center sm:text-base text-sm">
              <p className="ml-2">نام:</p>
              <p className="ml-2">{car?.firstname}</p>
            </div>
            <div className="mb-4 flex items-center sm:text-base text-sm">
              <p>نام خانوادگی:</p>
              <p>{car?.lastname}</p>
            </div>
            <div className="mb-4 flex items-center sm:text-base text-sm">
              <p className="ml-4">شماره تماس:</p>
              <p className="border border-orange px-4 rounded-lg py-1">
                {car?.phone}
              </p>
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
