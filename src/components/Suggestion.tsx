import React from "react";
import Image from "next/image";

const Suggestion = () => {
  const carsData = [
    { name: "کوپه", img: "/img/car-finder/icons/coupe.svg" },
    { name: "کراس", img: "/img/car-finder/icons/crossover.svg" },
    { name: "واگن", img: "/img/car-finder/icons/wagon.svg" },
    { name: "شاستی بلند", img: "/img/car-finder/icons/suv.svg" },
    { name: "سدان", img: "/img/car-finder/icons/sedan.svg" },
    { name: "استیشن", img: "/img/car-finder/icons/mpv.svg" },
    { name: "هاچ بک", img: "/img/car-finder/icons/convertible.svg" },
    { name: "کوپه", img: "/img/car-finder/icons/compact.svg" },
    { name: "لیموزین", img: "/img/car-finder/icons/sport.svg" },
    { name: "پیک آپ", img: "/img/car-finder/icons/pickup.svg" },
  ];
  return (
    <section className="px-8 xl:container m-auto">
      <p className="text-2xl">جستجو بر اساس بدنه</p>
      <div className="grid grid-cols-5 ">
        {carsData.map((car, index) => (
          <div className="text-center my-3 mx-auto" key={index}>
            <Image src={car.img} alt="car" width={180} height={180} />
            <p className="text-gray-200 my-2">{car.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Suggestion;
