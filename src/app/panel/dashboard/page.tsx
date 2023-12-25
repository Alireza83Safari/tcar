import Header from "@/app/panel/components/Header";
import Menu from "@/app/panel/components/Menu";
import { getPlatforms } from "@/app/actions/platform";
import { InfoBar } from "./components/InfoBar";
import Chart from "./components/Chart";
import { getCars } from "@/app/actions/car";
import { getColors } from "@/app/actions/color";
import { getBrands } from "@/app/actions/brand";
import { getUsers } from "@/app/actions/user";
import { UsersTable } from "./components/UsersTable";

export const revalidate = 60 * 60;

interface DataItem {
  name: string;
  value: number;
}

async function page() {
  const cars = await getCars("");
  const colors = await getColors();
  const platforms = await getPlatforms("");
  const brands = await getBrands();
  const users = await getUsers();

  const data: DataItem[] = [
    { name: "برند", value: brands.length || 0 },
    { name: "رنگ", value: colors.length || 0 },
    { name: "پلتفرم", value: platforms.length || 0 },
    { name: "خودرو", value: cars.length || 0 },
  ];

  return (
    <div className="bg-[#1F2432]">
      <Header />
      <Menu />
      <div className="md:w-[88vw] w-[84vw] min-h-screen absolute left-0 bg-[#1F2432] px-4 mt-10 grid md:grid-cols-4">
        <InfoBar
          cars={cars}
          colors={colors}
          platforms={platforms}
          brands={brands}
          users={users}
        />
        <div className="gap-x-10 mb-7 md:col-span-3">
          <Chart data={data} />
          <UsersTable users={users} />
        </div>
      </div>
    </div>
  );
}

export default page;
