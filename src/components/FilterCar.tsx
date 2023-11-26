"use client";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const FilterCar = () => {
  const [showCompany, setShowCompany] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [showCarBody, setShowCarBody] = useState(false);
  return (
    <div className="mb-32 px-5 xl:container m-auto">
      <div>
        <button>جدید</button>
        <button>دست دوم</button>
      </div>
      <div className="grid grid-cols-6 border border-gray-100 rounded-lg py-2">
        <div className="my-auto min-w full border-l px-5">
          <button className="flex items-center">
            <CiSearch className="text-2xl ml-3" />
            <p className="">نام خودرو</p>
          </button>
        </div>

        <div className="relative my-auto min-w full border-l px-5">
          <button
            className="flex items-center"
            onClick={() => setShowCompany(!showCompany)}
          >
            <CiSearch className="text-2xl ml-3" />
            <p className="">سازنده</p>
          </button>
          <ul className={showCompany ? `block absolute` : `hidden`}>
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
            <li>test4</li>
          </ul>
        </div>

        <div className="relative my-auto min-w full border-l px-5">
          <button
            className="flex items-center pl-5"
            onClick={() => setShowModel(!showModel)}
          >
            <CiSearch className="text-2xl ml-3" />
            <p className="">مدل</p>
          </button>
          <ul className={showModel ? `block absolute` : `hidden`}>
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
            <li>test4</li>
          </ul>
        </div>

        <div className="relative my-auto min-w full border-l px-5">
          <button
            className="flex items-center pl-5"
            onClick={() => setShowBrand(!showBrand)}
          >
            <CiSearch className="text-2xl ml-3" />
            <p className="">برند</p>
          </button>
          <ul className={showBrand ? `block absolute` : `hidden`}>
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
            <li>test4</li>
          </ul>
        </div>

        <div className="relative my-auto min-w full px-5">
          <button
            className="flex items-center"
            onClick={() => setShowCarBody(!showCarBody)}
          >
            <CiSearch className="text-2xl ml-3" />
            <p className="">نوع بدنه</p>
          </button>
          <ul className={showCarBody ? `block absolute` : `hidden`}>
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
            <li>test4</li>
          </ul>
        </div>

        <div>
          <button className="bg-orange py-2 min-w-[92%] rounded-lg mx-2">
            جستجو
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterCar;
