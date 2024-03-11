"use client";
import React from "react";
import useSWR from "swr";
import Select from "../Form/Select";
import { useRouter, useSearchParams } from "next/navigation";
import { fetcher } from "@/actions/fetcher";
import { yearsItem, ordersItem } from "../../data/data";

type FilterCarProps = {
  showFilterMenu: boolean;
  page: number;
};

const FilterCar: React.FC<FilterCarProps> = ({ showFilterMenu, page }) => {
  const [filterCarValue, setFilterCarValue] = React.useState({
    platform: "",
    color: "",
    company: "",
    years: "",
    query: "",
    order: "",
  });
  const { platform, color, company, years, query, order } = filterCarValue;

  const searchParams = useSearchParams();
  const router = useRouter();

  const { data: platforms } = useSWR("platform", fetcher);
  const { data: companies } = useSWR("company", fetcher);
  const { data: colors } = useSWR("color", fetcher);

  // Extract URL parameters for initial state
  const companyParams = searchParams.get("company");
  const colorParams = searchParams.get("color");
  const platformParams = searchParams.get("platform");
  const yearsParams = searchParams.get("years");
  const queryParams = searchParams.get("q");
  const orderParams = searchParams.get("order");

  // Effect to initialize state based on URL parameters
  React.useEffect(() => {
    const paramsToUpdate = {
      company: companyParams,
      color: colorParams,
      platform: platformParams,
      years: yearsParams,
      query: queryParams,
      order: orderParams,
    };

    const filteredParams = Object.fromEntries(
      Object.entries(paramsToUpdate).filter(([_, value]) => value !== undefined)
    );

    setFilterCarValue({ ...filterCarValue, ...filteredParams });
  }, [
    companyParams,
    colorParams,
    platformParams,
    yearsParams,
    queryParams,
    orderParams,
  ]);

  React.useEffect(() => {
    const params = new URLSearchParams();

    if (platform) params.set("platform", platform);
    if (color) params.set("color", color);
    if (company) params.set("company", company);
    if (years) params.set("years", years);
    if (query) params.set("q", query);
    if (order) params.set("order", order);
    if (page) params.set("page", String(page));

    router.push(`?${params.toString()}`);
  }, [filterCarValue, page]);

  return (
    <div
      className={` shadow-xl px-4 md:rounded-lg md:block overflow-auto bg-lightPurple md:sticky fixed top-0 bottom-0 md:top-20 py-5 ${
        showFilterMenu ? `fixed right-0 top-0 z-10 sm:w-1/4 block` : `hidden`
      }`}
    >
      <Select
        name="platform"
        defaultValue="پلتفرم"
        className="bg-black-100 px-4 py-3 rounded-md w-full border border-purple"
        value={platform}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilterCarValue({ ...filterCarValue, platform: e.target.value })
        }
        options={platforms}
      />

      <Select
        defaultValue="سال"
        name="years"
        className="bg-black-100 px-4 py-3 rounded-md w-full border border-purple mt-5"
        value={years}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilterCarValue({ ...filterCarValue, years: e.target.value })
        }
        options={yearsItem}
      />

      <Select
        defaultValue="رنگ"
        name="color"
        className="bg-black-100 px-4 py-3 rounded-md w-full border border-purple mt-5"
        value={color}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilterCarValue({ ...filterCarValue, color: e.target.value })
        }
        options={colors}
      />

      <Select
        defaultValue="برند"
        name="company"
        className="bg-black-100 px-4 py-3 rounded-md w-full border border-purple mt-5"
        value={company}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilterCarValue({ ...filterCarValue, company: e.target.value })
        }
        options={companies}
      />

      <Select
        defaultValue="براساس:"
        name="order"
        className="bg-black-100 px-4 py-3 rounded-md w-full border border-purple mt-5"
        value={order}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilterCarValue({ ...filterCarValue, order: e.target.value })
        }
        options={ordersItem}
      />
    </div>
  );
};

export default FilterCar;
