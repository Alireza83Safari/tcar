"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import useSWR from "swr";
import { FaCarSide, FaMoneyBill1Wave, FaPhone } from "react-icons/fa6";
import { LiaInfoSolid } from "react-icons/lia";
import { Input, Select } from "@/components";
import { createCarErrorType } from "@/types/error.type";
import { initialState } from "./AddCar";
import { useSession } from "next-auth/react";
import { fetcher } from "@/actions/fetcher";
import { revalidateWithTag } from "@/actions/revalidateWithTag";
import {
  carFuelItem,
  carGearboxItem,
  yearsItem,
  carStatusItem,
} from "../../../data/data";
import carSchema from "@/validator/client/car";
import toast from "react-hot-toast";

const AddCarForm = ({
  setCreateCarInfos,
  createCarInfos,
  setCarId,
  setShowImage,
}: any) => {
  const { data: colors } = useSWR("color", fetcher);
  const { data: companies } = useSWR("company", fetcher);
  const { data: platform } = useSWR("platform", fetcher);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      setCreateCarInfos({
        ...createCarInfos,
        userId: (session as any)?.id,
      });
    }
  }, [session]);

  const [errors, setErrors] = useState<createCarErrorType>();
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name, type } = e.target;

    setCreateCarInfos({
      ...createCarInfos,
      [name]:
        type === "number" ||
        name == "carStatus" ||
        name == "gearbox" ||
        name == "fuel"
          ? +value
          : value,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [errors]);

  const createCarHandler = async () => {
    try {
      const isValid = await carSchema.validate(createCarInfos, {
        abortEarly: false,
      });

      if (isValid) {
        const res = await fetch(`/api/car`, {
          method: "POST",
          body: JSON.stringify(createCarInfos),
        });
        const data = await res.json();

        if (res.status === 201) {
          setShowImage(true);
          setCreateCarInfos(initialState);
          setCarId(data?._id);
          toast.success("آگهی با موفقیت اضافه شد!");
          revalidateWithTag("cars");
          revalidateWithTag("userCar");
        } else {
          toast.error("خطا!!");
        }
      }
    } catch (error: any) {
      let errors = error?.inner?.reduce(
        (acc: any, error: any) => ({
          ...acc,
          [error.path]: error.message,
        }),
        {}
      );
      setErrors(errors);
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="md:col-span-2 col-span-3 md:order-1 order-2"
    >
      <div className="bg-black-100 sm:p-6 p-3 rounded-xl">
        <div className="flex mb-5">
          <LiaInfoSolid className="text-purple items-center text-xl" />
          <h2 className="text-lg">اطلاعات پایه</h2>
        </div>

        <div>
          <Input
            label="عنوان"
            name="title"
            placeholder="عنوان را وارد کنید"
            onChange={handleInputChange}
            value={createCarInfos.title}
            error={errors?.title}
            onfocus={() => setErrors("" as any)}
          />
        </div>

        <div className="mt-5">
          <Select
            label="وضعیت خودرو"
            name="carStatus"
            options={carStatusItem}
            onChange={handleInputChange}
            value={createCarInfos.carStatus}
            error={errors?.carStatus}
          />
        </div>
      </div>

      <div className="bg-black-100 sm:p-6 p-3 mt-7 rounded-xl">
        <div className="flex items-center mb-5">
          <FaMoneyBill1Wave className="text-purple text-xl ml-3" />
          <h2 className="text-lg">قیمت</h2>
        </div>
        <div>
          <Input
            type="number"
            label="قیمت"
            name="price"
            placeholder="قیمت را وارد کنید"
            onChange={handleInputChange}
            value={createCarInfos.price}
            error={errors?.price}
          />
        </div>
      </div>

      <div className="bg-black-100 sm:p-6 p-3 mt-7 rounded-xl">
        <div className="flex mb-5">
          <FaCarSide className="text-purple items-center text-xl ml-3" />
          <h2 className="text-lg">مشخصات خودرو</h2>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="md:ml-2 md:mt-1 mt-3">
            <Select
              label="سازنده"
              name="company"
              options={companies}
              onChange={handleInputChange}
              value={createCarInfos.company}
              error={errors?.company}
            />
          </div>

          <div className="md:mr-2 md:mt-1 mt-3">
            <Select
              label="سال"
              name="years"
              options={yearsItem}
              onChange={handleInputChange}
              value={createCarInfos.years}
              error={errors?.years}
            />
          </div>

          <div className="md:ml-2 md:mt-1 mt-3">
            <Input
              label="مدل"
              name="model"
              placeholder="مدل"
              onChange={handleInputChange}
              value={createCarInfos.model}
              error={errors?.model}
            />
          </div>

          <div className="md:mr-2 md:mt-1 mt-3">
            <Input
              type="number"
              label="کارکرد"
              name="work"
              placeholder="کارکرد"
              onChange={handleInputChange}
              value={createCarInfos.work}
              error={errors?.work}
            />
          </div>
        </div>
      </div>

      <div className="bg-black-100 sm:p-6 p-3 mt-7 rounded-xl">
        <div className="flex mb-5">
          <FaCarSide className="text-purple items-center text-xl ml-3" />
          <h2 className="text-lg">اطلاعات خودرو</h2>
        </div>
        <div className="mt-5">
          <Select
            label="نوع بدنه"
            name="platform"
            options={platform}
            onChange={handleInputChange}
            value={createCarInfos.platform}
            error={errors?.platform}
          />
        </div>

        <div className="mt-5">
          <Select
            label=" نوع سوخت"
            name="fuel"
            options={carFuelItem}
            onChange={handleInputChange}
            value={createCarInfos.fuel}
            error={errors?.fuel}
          />
        </div>

        <div className="mt-5">
          <Select
            label="گیربکس"
            name="gearbox"
            options={carGearboxItem}
            onChange={handleInputChange}
            value={createCarInfos.gearbox}
            error={errors?.gearbox}
          />
        </div>

        <div className="mt-3">
          <Select
            label="رنگ"
            name="color"
            onChange={handleInputChange}
            value={createCarInfos.color}
            error={errors?.color}
            options={colors}
          />
        </div>

        <div className="mt-3">
          <label htmlFor="" className="bolck text-sm mb-2 px-1">
            توضیحات
          </label>

          <textarea
            id="textarea"
            className="w-full py-2 bg-black-100 border border-borderColor rounded-lg px-3"
            name="description"
            rows={4}
            cols={50}
            onChange={handleInputChange}
            value={createCarInfos.description}
          ></textarea>

          <p className="text-red">{errors?.description}</p>
        </div>
      </div>

      <div className="bg-black-100 sm:p-6 p-3 mt-7 rounded-xl">
        <div className="flex items-center mb-5">
          <FaPhone className="text-purple text-xl ml-3" />
          <h2 className="text-lg">تماس با ما</h2>
        </div>
        <div className="mt-4">
          <Input
            label="نام"
            placeholder="نام"
            value={createCarInfos.firstname}
            onChange={handleInputChange}
            name="firstname"
            error={errors?.firstname}
          />
        </div>

        <div className="mt-4">
          <Input
            label="نام خانوادگی"
            placeholder="نام خانوادگی"
            value={createCarInfos.lastname}
            onChange={handleInputChange}
            name="lastname"
            error={errors?.lastname}
          />
        </div>

        <div className="mt-4">
          <Input
            type="number"
            label="شماره تماس"
            placeholder="شماره تماس"
            value={createCarInfos.phone}
            onChange={handleInputChange}
            name="phone"
            error={errors?.phone}
          />
        </div>
      </div>

      <button
        className="w-full bg-purple py-2 rounded-lg mt-8"
        onClick={createCarHandler}
      >
        اضافه کردن آگهی
      </button>
    </form>
  );
};

export default AddCarForm;
