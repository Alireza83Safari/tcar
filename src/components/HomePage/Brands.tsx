"use client";
import React from "react";
import useSWR from "swr";
import { fetcher } from "@/app/actions/fetcher";
import { companyType } from "@/types/company.type";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

const Brands = () => {
  const { data: brands } = useSWR("company", fetcher);

  return (
    <nav className="grid md:grid-cols-10 sm:grid-cols-6 grid-cols-4 md:px-8 px-3 xl:container m-auto gap-y-10">
      {brands?.length &&
        brands?.map((brand: companyType) => (
          <Link href={`/car?company=${brand?._id}`} key={brand.name}>
            <CldImage
              width="60"
              height="60"
              src={String(brand?.image)}
              sizes="100vw"
              alt="Description of my image"
            />
          </Link>
        ))}
    </nav>
  );
};

export default Brands;
