"use client";

import CarTemplate from "@/components/Car/CarTemplate";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useSearchParams } from "next/navigation";
import React from "react";




const page = () => {
  const sraechParams = useSearchParams();
  console.log(sraechParams.get("q"));

  return (
    <>
      <Header />
      <div className="grid grid-cols-3 mt-4">
        <CarTemplate />
        <CarTemplate />
        <CarTemplate />
        <CarTemplate />
        <CarTemplate />
        <CarTemplate />
        <CarTemplate />
        <CarTemplate />
        <CarTemplate />
        <CarTemplate />
        <CarTemplate />
      </div>
      <Footer />
    </>
  );
};

export default page;
