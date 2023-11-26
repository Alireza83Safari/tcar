import Image from "next/image";
import React from "react";
import CarTemplate from "./Car/CarTemplate";

const Newest = () => {
  return (
    <section className="px-8 xl:container m-auto my-32">
      <div className="grid grid-cols-3">
        <CarTemplate />
        <CarTemplate />
        <CarTemplate />
      </div>
    </section>
  );
};

export default Newest;
