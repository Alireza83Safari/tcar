"use client";

import { useState } from "react";
import {
  Header,
  Footer,
  CarTemplate,
  FilterCar,
  Pagination,
} from "@/components";
import { CarType } from "@/types/car.type";
import Head from "next/head";

const Cars = (props: any) => {
  const { cars, total } = props;

  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const totalPage = Math.floor(total / 6);

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      <Head>
        <title>لیست خودرو ها</title>
      </Head>
      <main className="sm:mt-12 mt-4 xl:container mx-auto md:px-8 relative">
        <div className="grid grid-cols-4 mt-4">
          <div className="md:col-span-1">
            <FilterCar showFilterMenu={showFilterMenu} page={currentPage} />
            <button
              className="fixed bottom-0 w-full bg-purple py-2 md:hidden block"
              onClick={() => setShowFilterMenu(!showFilterMenu)}
            >
              فیلتر
            </button>
          </div>

          <div className="md:col-span-3 col-span-4">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2">
              {!!cars?.length ? (
                cars?.map((car: CarType) => (
                  <CarTemplate car={car} dataAos="fead-up" />
                ))
              ) : (
                <p className="text-2xl text-center col-span-2 mt-32">
                  نتیجه ای یافت نشد!
                </p>
              )}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cars;
