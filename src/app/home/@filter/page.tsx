"use client";
import React from "react";
import { Select } from "@/components/";
import { yearsItem } from "@/data/data";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { fetcher } from "@/actions/fetcher";

export default function page() {
  const { data: companies } = useSWR("company", fetcher);
  const { data: platforms } = useSWR("platform", fetcher);

  const router = useRouter();
  const [filterValue, setFilterValue] = React.useState({
    company: "",
    platform: "",
    year: "",
  });

  const setInputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setFilterValue({
      ...filterValue,
      [name]: value,
    });
  };

  const searchCarHandler = async () => {
    const searchParams = new URLSearchParams();

    if (filterValue.company) {
      searchParams.set("company", filterValue.company);
    }

    if (filterValue.platform) {
      searchParams.set("platform", filterValue.platform);
    }
    if (filterValue.year) {
      searchParams.set("years", filterValue.year);
    }

    router.push(`/car?${searchParams.toString()}`);
  };
  return (
    <div
      className="mb-32 sm:px-5 px-2 xl:container m-auto"
      data-aos="fade-up"
      data-aos-once="true"
    >
      <div className="grid sm:grid-cols-4 grid-cols-1 shadow-lg rounded-lg py-2">
        <div className="relative my-auto min-w full border-l px-5 sm:border-none border-b border-borerColor">
          <Select
            className="w-full py-2 rounded-lg px-3 border border-purple outline-none"
            name="year"
            value={filterValue.year}
            options={yearsItem}
            defaultValue="سال"
            onChange={setInputValueHandler}
          />
        </div>

        <div className="relative my-auto min-w full border-l px-5 sm:border-none border-b border-borderColor">
          <Select
            className="w-full py-2 rounded-lg px-3 border border-purple outline-none"
            name="company"
            value={filterValue.company}
            options={companies}
            defaultValue="برند"
            onChange={setInputValueHandler}
          />
        </div>

        <div className="relative my-auto min-w full px-5">
          <Select
            className="w-full py-2 rounded-lg px-3 border border-purple outline-none"
            name="platform"
            value={filterValue.platform}
            options={platforms}
            defaultValue="پلتفرم"
            onChange={setInputValueHandler}
          />
        </div>

        <button
          className="bg-purple py-2 min-w-[92%] rounded-lg sm:mx-2 mx-3 text-white"
          onClick={searchCarHandler}
        >
          جستجو
        </button>
      </div>
    </div>
  );
}
