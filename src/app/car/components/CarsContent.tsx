"use client";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CarTemplate from "../../../components/Car/CarTemplate";
import FilterCar from "../../../components/Car/FilterCar";
import { useState } from "react";

const Cars = ({ cars }: any) => {
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  return (
    <>
      <Header />
      <main className="sm:mt-12 mt-4 xl:container mx-auto md:px-8 relative">
        <div className="grid grid-cols-4 mt-4">
          <div className="md:col-span-1">
            <FilterCar showFilterMenu={showFilterMenu} />
            <button
              className="fixed bottom-0 w-full bg-orange py-2 md:hidden block"
              onClick={() => setShowFilterMenu(!showFilterMenu)}
            >
              فیلتر
            </button>
          </div>

          <div className="md:col-span-3 col-span-4">
            <div className="grid sm:grid-cols-2 ">
              {cars?.length ? (
                cars?.map((car: any) => <CarTemplate {...car} />)
              ) : (
                <p className="text-2xl text-center col-span-2 mt-32">
                  نتیجه ای یافت نشد!
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cars;
