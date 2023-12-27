import Cars from "@/app/car/components/CarsContent";
import { getCars } from "../actions/car";

async function getCarss(searchParams: any) {
  const { platform, color, company, carStatus, years, q } = searchParams;

  let APIURL = `car`;
  if (platform) {
    APIURL += `?platform=${platform}`;
  }
  if (color) {
    APIURL += `?color=${color}`;
  }
  if (company) {
    APIURL += `?company=${company}`;
  }
  if (carStatus) {
    APIURL += `?carStatus=${carStatus}`;
  }
  if (years) {
    APIURL += `?years=${years}`;
  }
  if (carStatus) {
    APIURL += `?carStatus=${carStatus}`;
  }
  if (q) {
    APIURL += `?q=${q}`;
  }

  const cars = await getCars(APIURL);

  return cars;
}

export const revalidate = 12;

export default async function page({ searchParams }: any) {
  const cars = await getCarss(searchParams);

  return (
    <>
      <Cars cars={cars} />
    </>
  );
}
