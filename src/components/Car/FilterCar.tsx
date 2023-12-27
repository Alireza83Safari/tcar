import { useEffect, useState } from "react";
import useSWR from "swr";
import { yearsItem } from "@/services/apiRequest/apiRequest";
import { getPlatformType } from "@/types/platform";
import { useRouter, useSearchParams } from "next/navigation";
import { fetcher } from "@/app/actions/fetcher";
import Spinner from "../Spinner/Spinner";

const FilterCar = ({ showFilterMenu }: { showFilterMenu: boolean }) => {
  const [carStatus, setCarStatus] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<any>();
  const [selectedYears, setSelectedYears] = useState<any>(null);
  const [query, setQuery] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();

  const { data: platforms, isLoading: platformLoading } = useSWR(
    "platform",
    fetcher
  );
  const { data: brands, isLoading: brandLoading } = useSWR("brand", fetcher);
  const { data: colors, isLoading: colorLoading } = useSWR("color", fetcher);

  const brandParams = searchParams.get("brand");
  const colorParams = searchParams.get("color");
  const platformParams = searchParams.get("platform");
  const yearsParams = searchParams.get("years");
  const queryParams = searchParams.get("q");

  const handleButtonClick = (status: string) => {
    setCarStatus(status);
  };

  useEffect(() => {
    if (brandParams) setSelectedCompany(brandParams);
    if (colorParams) setSelectedColor([colorParams]);
    if (platformParams) setSelectedPlatform([platformParams]);
    if (yearsParams) setSelectedYears(yearsParams);
    if (queryParams) setQuery(queryParams);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();

    if (carStatus !== null) params.set("carStatus", carStatus?.toString());
    if (selectedPlatform.length > 0)
      params.set("platform", selectedPlatform.join(","));
    if (selectedColor.length > 0) params.set("color", selectedColor.join(","));
    if (selectedCompany) params.set("brand", selectedCompany);
    if (selectedYears) params.set("years", selectedYears);
    if (query) params.set("q", query);

    router.push(`?${params.toString()}`);
  }, [
    carStatus,
    selectedPlatform,
    selectedColor,
    selectedCompany,
    selectedYears,
    query,
  ]);

  return (
    <div
      className={`border border-borderColor px-4 md:rounded-lg md:block overflow-auto bg-black-100 ${
        showFilterMenu ? `fixed right-0 top-0 z-10 sm:w-1/4 block` : `hidden`
      }`}
    >
      <div className="border-b border-borderColor py-5">
        <button
          className={`px-5 py-2 rounded-md bg-black-100 ml-5 border border-borderColor ${
            carStatus === "1" ? "bg-white text-black-200" : ""
          }`}
          onClick={() => handleButtonClick("1")}
        >
          نو
        </button>
        <button
          className={`px-5 py-2 rounded-md bg-black-100 border border-borderColor ${
            carStatus === "0" ? "bg-white text-black-200" : ""
          }`}
          onClick={() => handleButtonClick("0")}
        >
          دست دوم
        </button>
      </div>

      <div className="border-b border-borderColor py-5">
        <h3 className="mb-2">نوع بدنه</h3>
        {platformLoading ? (
          <Spinner />
        ) : platforms?.length ? (
          platforms?.map((platform: getPlatformType) => (
            <div key={platform?._id} className="py-1">
              <input
                type="checkbox"
                value={platform._id}
                name="platform"
                checked={selectedPlatform?.includes(platform._id)}
                onChange={() => {
                  if (selectedPlatform.includes(platform._id)) {
                    setSelectedPlatform(
                      selectedPlatform.filter(
                        (code: string) => code !== platform._id
                      )
                    );
                  } else {
                    setSelectedPlatform([...selectedPlatform, platform._id]);
                  }
                }}
                className="mr-1 h-3 w-3 border-orange rounded"
              />
              <label htmlFor={platform.name} className="mr-2">
                {platform.name}
              </label>
            </div>
          ))
        ) : (
          <p>پلتفرمی وجود ندارد</p>
        )}
      </div>

      <div className="pt-5 mb-4">
        <select
          className="bg-black-100 px-4 py-3 rounded-md w-full border border-borderColor"
          value={selectedYears}
          onChange={(e) => setSelectedYears(e.target.value)}
        >
          <option value="">مدل</option>
          {yearsItem.map((year) => (
            <option value={year.value} key={year.name} defaultValue={"مدل"}>
              {year.name}
            </option>
          ))}
        </select>
      </div>

      <div className="border-b border-borderColor pb-5">
        <select
          className="bg-black-100 px-4 py-3 rounded-md w-full border border-borderColor"
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          <option value="">برند</option>
          {brandLoading ? (
            <Spinner />
          ) : brands?.lngth ? (
            brands?.map((item: any) => (
              <option value={item._id} key={item._id}>
                {item.name}
              </option>
            ))
          ) : (
            <p>پلتفرمی وجود ندارد</p>
          )}
        </select>
      </div>

      <div className="py-5">
        <h3>رنگ</h3>
        {colorLoading ? (
          <Spinner />
        ) : colors?.length ? (
          colors?.map((color: any) => (
            <div className="py-1" key={color?._id}>
              <input
                type="checkbox"
                name="color"
                value={color?._id}
                checked={selectedColor?.includes(color._id)}
                onChange={() => {
                  if (selectedColor?.includes(color._id)) {
                    setSelectedColor(
                      selectedColor.filter((code: string) => color._id !== code)
                    );
                  } else {
                    setSelectedColor([...selectedColor, color._id]);
                  }
                }}
                className="mr-1 h-3 w-3 border-orange rounded"
              />
              <label htmlFor={color.name} className="mr-2">
                {color.name}
              </label>
            </div>
          ))
        ) : (
          <p>رنگی وجود ندارد</p>
        )}
      </div>
    </div>
  );
};

export default FilterCar;
