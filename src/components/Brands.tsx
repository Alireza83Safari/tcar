import React from "react";
import Image from "next/image";

const Brands = () => {
  const brandsData = [
    { name: "mitsubishi", img: "/img/car-finder/brands/mitsubishi.svg" },
    { name: "infiniti", img: "/img/car-finder/brands/infiniti.svg" },
    { name: "renault", img: "/img/car-finder/brands/renault.svg" },
    { name: "honda", img: "/img/car-finder/brands/honda.svg" },
    { name: "lexus", img: "/img/car-finder/brands/lexus.svg" },
    { name: "hyundai", img: "/img/car-finder/brands/hyundai.svg" },
    { name: "nissan", img: "/img/car-finder/brands/nissan.svg" },
    { name: "mazda", img: "/img/car-finder/brands/mazda.svg" },
    { name: "toyota", img: "/img/car-finder/brands/toyota.svg" },
    { name: "mercedes", img: "/img/car-finder/brands/mercedes.svg" },
    { name: "audi", img: "/img/car-finder/brands/audi.svg" },
    { name: "opel", img: "/img/car-finder/brands/opel.svg" },
  ];
  return (
    <nav className="grid grid-cols-12 px-8 xl:container m-auto">
      {brandsData.map((brand) => (
        <React.Fragment key={brand.name}>
          <Image src={brand.img} width={80} height={80} alt={brand.name} />
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Brands;
