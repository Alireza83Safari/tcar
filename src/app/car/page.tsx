import Cars from "@/app/car/components/CarsContent";
import { getCars } from "../actions/car";

async function getCarss(searchParams: any) {
  const { platform, color, company, carStatus } = searchParams;

  let apiUrl = "/car";
  if (platform) {
    apiUrl += `?platform=${platform}`;
  }
  if (color) {
    apiUrl += `?color=${color}`;
  }
  if (company) {
    apiUrl += `?company=${company}`;
  }
  if (carStatus) {
    apiUrl += `?carStatus=${carStatus}`;
  }

  const cars = await getCars(apiUrl);

  return cars;
}

export const revalidate = 60;

export default async function page({ searchParams }: any) {
  const cars = await getCarss(searchParams);

  return (
    <>
      <Cars cars={cars} />
    </>
  );
}
