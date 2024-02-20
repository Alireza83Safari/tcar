import Cars from "@/app/car/components/CarsContent";
import Car from "@/models/car";
import { apiUrl } from "@/services/apiUrl";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

async function getCarss(searchParams: any) {
  const { platform, color, company, years, q, order, page } = searchParams;

  let countQuery: any = {};

  if (platform) countQuery.platform = platform;
  if (color) countQuery.color = color;
  if (company) countQuery.company = company;
  if (years) countQuery.years = years;
  if (q) countQuery.q = q;

  const totalCount = await Car.countDocuments(countQuery);

  let APIURL = `car?`;
  if (platform) APIURL += `platform=${platform}&`;
  if (color) APIURL += `color=${color}&`;
  if (company) APIURL += `company=${company}&`;
  if (years) APIURL += `years=${years}&`;
  if (q) APIURL += `q=${q}&`;
  if (order) APIURL += `order=${order}&`;
  if (page) APIURL += `page=${page}&limit=6`;

  const res = await fetch(`${apiUrl}/api/${APIURL}`, { cache: "no-store" });
  const cars = await res.json();

  return { cars, total: totalCount };
}

export const metadata: Metadata = {
  title: "جستحو در مجموعه ماشین‌های متنوع | نمایندگی خودروی شما",
  description:
    "در میان ماشین‌های متنوع ما راه بیافرینید. از سدان‌های شیک تا اس‌یوی‌های پرقدرت، خودروی ایده‌آل برای نیازهای شما در انتظار است. در نمایندگی خودروی شما کیفیت و تنوع را کشف کنید.",
};

export default async function page({ searchParams }: any) {
  const cars = await getCarss(searchParams);
  return <Cars {...cars} />;
}
