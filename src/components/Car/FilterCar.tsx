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

  const searchParams = useSearchParams();
  const router = useRouter();

  const { data: platforms, isLoading: platformLoading } = useSWR("platform",fetcher);
  const { data: company, isLoading: companyLoading } = useSWR("company", fetcher);
  const { data: colors, isLoading: colorLoading } = useSWR("color", fetcher);

  const companyParams = searchParams.get("company");
  const colorParams = searchParams.get("color");
  const platformParams = searchParams.get("platform");

  const handleButtonClick = (status: string) => {
    setCarStatus(status);
  };

  useEffect(() => {
    if (companyParams) setSelectedCompany(companyParams);
    if (colorParams) setSelectedColor([colorParams]);
    if (platformParams) setSelectedPlatform([platformParams]);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    
    if (carStatus !== null) params.set("carStatus", carStatus?.toString());
    if (selectedPlatform.length > 0)
      params.set("platform", selectedPlatform.join(","));
    if (selectedColor.length > 0) params.set("color", selectedColor.join(","));
    if (selectedCompany) params.set("company", selectedCompany);

    router.push(`?${params.toString()}`);
  }, [carStatus, selectedPlatform, selectedColor, selectedCompany]);

  return (
    <div
      className={`border border-borderColor px-4 md:rounded-lg md:block overflow-auto ${
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
        ) : (
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
        )}
      </div>

      <div className="pt-5 mb-4">
        <select className="bg-black-100 px-4 py-3 rounded-md w-full border border-borderColor">
          {yearsItem.map((year) => (
            <option value={year.value} key={year.name}>
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
          {companyLoading ? (
            <Spinner />
          ) : (
            company?.map((item: any) => (
              <option value={item._id} key={item._id}>
                {item.name}
              </option>
            ))
          )}
        </select>
      </div>

      <div className="py-5">
        <h3>رنگ</h3>
        {colorLoading ? (
          <Spinner />
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default FilterCar;
