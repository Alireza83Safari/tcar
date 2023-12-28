import React from "react";
import { getCars } from "@/actions/car";
import Slider from "./Slider";

export const revalidate = 60 * 60;

export default async function Newest() {
  const cars = await getCars("");
  return (
    <section className="md:px-8 px-3 xl:container m-auto my-32">
      <Slider cars={cars} />
    </section>
  );
}
