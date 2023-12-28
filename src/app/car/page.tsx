import Cars from "@/app/car/components/CarsContent";
import { apiUrl } from "@/services/apiUrl";

export const dynamic = "force-dynamic";

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

  const res = await fetch(`${apiUrl}/api/${APIURL}`);
  const cars = await res.json();

  return cars;
}

export default async function page({ searchParams }: any) {
  const cars = await getCarss(searchParams);

  return <Cars cars={cars} />;
}
