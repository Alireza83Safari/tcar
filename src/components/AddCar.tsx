"use client";

import { createCarType } from "@/types/createCar";
import React, { useState } from "react";
import { FaCarSide, FaMoneyBill1Wave, FaPhone } from "react-icons/fa6";
import { LiaInfoSolid } from "react-icons/lia";
import Input from "./Form/Input";
import Select from "./Form/Select";

const AddCar = () => {
  const [createCarInfos, setCreateCarInfos] = useState<createCarType>({
    title: "",
    carStatus: "",
    price: null,
    company: "",
    model: "",
    years: null,
    work: null,
    platform: "",
    fuel: "",
    gearbox: "",
    color: "",
    description: "",
    firstname: "",
    lastname: "",
    phone: null,
  });

  const setInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, type } = e.target;

    setCreateCarInfos({
      ...createCarInfos,
      [name]: type === "number" ? +value : value,
    });
  };

  const optionss = [
    { name: "test", value: "test" },
    { name: "test", value: "test" },
    { name: "test", value: "test" },
    { name: "test", value: "test" },
  ];
  return (
    <main className="xl:container mx-auto my-20 px-4 grid grid-cols-3">
      <div className="col-span-2">
        <div className="bg-black-500 p-6 rounded-xl">
          <div className="flex mb-5">
            <LiaInfoSolid className="text-orange items-center text-xl" />
            <h2 className="text-lg">اطلاعات پایه</h2>
          </div>

          <div>
            <Input
              label="عنوان"
              name="title"
              placeholder="عنوان را وارد کنید"
              onChange={setInputValue}
              value={createCarInfos.title}
            />
          </div>

          <div className="mt-5">
            <Select
              label="وضعیت خودرو"
              name="carStatus"
              options={optionss}
              onChange={setInputValue}
              value={createCarInfos.carStatus}
            />
          </div>
        </div>

        <div className="bg-black-500 p-6 mt-7 rounded-xl">
          <div className="flex items-center mb-5">
            <FaMoneyBill1Wave className="text-orange text-xl ml-3" />
            <h2 className="text-lg">قیمت</h2>
          </div>
          <div>
            <Input
              label="قیمت"
              name="price"
              placeholder="قیمت را وارد کنید"
              onChange={setInputValue}
              value={createCarInfos.price}
            />
          </div>
        </div>

        <div className="bg-black-500 p-6 mt-7 rounded-xl">
          <div className="flex mb-5">
            <FaCarSide className="text-orange items-center text-xl ml-3" />
            <h2 className="text-lg">مشخصات خودرو</h2>
          </div>
          <div className="grid grid-cols-2">
            <div className="ml-2">
              <Select
                label="سازنده"
                name="company"
                options={optionss}
                onChange={setInputValue}
                value={createCarInfos.company}
              />
            </div>
            <div className="mr-2">
              <Select
                label="مدل"
                name="carStatus"
                options={optionss}
                onChange={setInputValue}
                value={createCarInfos.carStatus}
              />
            </div>

            <div className="ml-2 mt-3">
              <Select
                label="سال"
                name="years"
                options={optionss}
                onChange={setInputValue}
                value={createCarInfos.years}
              />
            </div>

            <div className="mr-2 mt-3">
              <Input
                label="کارکرد"
                name="work"
                placeholder="کارکرد"
                onChange={setInputValue}
                value={createCarInfos.work}
              />
            </div>
          </div>
        </div>

        <div className="bg-black-500 p-6 mt-7 rounded-xl">
          <div className="mt-5">
            <Select
              label="نوع بدنه"
              name="platform"
              options={optionss}
              onChange={setInputValue}
              value={createCarInfos.platform}
            />
          </div>

          <div className="mt-5">
            <Select
              label=" نوع سوخت"
              name="fuel"
              options={optionss}
              onChange={setInputValue}
              value={createCarInfos.fuel}
            />
          </div>

          <div className="mt-5">
            <Select
              label="گیربکس"
              name="gearbox"
              options={optionss}
              onChange={setInputValue}
              value={createCarInfos.gearbox}
            />
          </div>

          <div className="mt-3">
            <Input
              label="رنگ"
              name="color"
              placeholder="رنگ"
              onChange={setInputValue}
              value={createCarInfos.color}
            />
          </div>

          <div className="mt-3">
            <label htmlFor="" className="bolck text-sm mb-2 px-1">
              توضیحات
            </label>

            <textarea
              id="textarea"
              className="w-full py-2 bg-black-100 border border-borderColor rounded-lg px-3"
              name="textarea"
              rows={4}
              cols={50}
              onChange={setInputValue}
              name="description"
              value={createCarInfos.description}
            ></textarea>
          </div>
        </div>

        <div className="bg-black-500 p-6 mt-7 rounded-xl">
          <div className="flex items-center mb-5">
            <FaPhone className="text-orange text-xl ml-3" />
            <h2 className="text-lg">تماس با ما</h2>
          </div>
          <div className="mt-4">
            <label htmlFor="" className="bolck text-sm mb-2 px-1">
              نام
            </label>
            <input
              type="text"
              className="w-full py-2 bg-black-100 border border-borderColor rounded-lg px-3"
              placeholder="نام"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="" className="bolck text-sm mb-2 px-1">
              نام خانوادگی
            </label>
            <input
              type="text"
              className="w-full py-2 bg-black-100 border border-borderColor rounded-lg px-3"
              placeholder="نام خانوادگی"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="" className="bolck text-sm mb-2 px-1">
              شماره تماس
            </label>
            <input
              type="text"
              className="w-full py-2 bg-black-100 border border-borderColor rounded-lg px-3"
              placeholder="شماره تماس"
            />
          </div>
        </div>

        <button className="w-full bg-orange py-2 rounded-lg mt-8">
          اضافه کردن آگهی
        </button>
      </div>
    </main>
  );
};

export default AddCar;
