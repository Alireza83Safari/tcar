import CarDetails from "@/components/Car/CarDetails";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <div className="xl:container mx-auto px-4 ">
        <CarDetails />
      </div>
      <Footer />
    </>
  );
};

export default page;
