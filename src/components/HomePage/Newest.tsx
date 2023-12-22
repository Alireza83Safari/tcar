import React from "react";
import CarTemplate from "../Car/CarTemplate";
import { getCars } from "@/app/actions/car";

export const revalidate = 60 * 60;

export default async function Newest() {
  const cars = await getCars("");
  return (
    <section className="md:px-8 px-3 xl:container m-auto my-32">
      <div className="grid md:grid-cols-3">
        {cars?.slice(0, 3)?.map((car: any) => (
          <CarTemplate {...car} />
        ))}
      </div>
    </section>
  );
}
