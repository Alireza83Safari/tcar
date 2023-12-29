"use client";
import useSWR from "swr";
import Slider from "./Slider";
import { fetcher } from "@/actions/fetcher";

export default async function Blog() {
  const { data: blogs } = useSWR("blog", fetcher);

  return (
    <section className="md:px-8 px-3 xl:container m-auto my-12">
      <Slider blogs={blogs} />
    </section>
  );
}
