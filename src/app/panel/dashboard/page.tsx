import Header from "@/app/panel/components/Header";
import Menu from "@/app/panel/components/Menu";
import { getPlatforms } from "@/actions/platform";
import { InfoBar } from "./components/InfoBar";
import Chart from "./components/Chart";
import { getCars } from "@/actions/car";
import { getColors } from "@/actions/color";
import { getCopmpanies } from "@/actions/company";
import { getUsers } from "@/actions/user";
import { UsersTable } from "./components/UsersTable";

export const revalidate = 60 * 60;

interface DataItem {
  name: string;
  value: number;
}

export default async function page() {
  const cars = await getCars("");
  const colors = await getColors();
  const platforms = await getPlatforms("");
  const companies = await getCopmpanies();
  const users = await getUsers();

  const data: DataItem[] = [
    { name: "کمپانی", value: companies?.length || 0 },
    { name: "رنگ", value: colors?.length || 0 },
    { name: "پلتفرم", value: platforms?.length || 0 },
    { name: "خودرو", value: cars?.length || 0 },
  ];

  return (
    <div>
      <Header />
      <Menu />
      <div className="md:w-[84vw] w-[84vw] bg-[#F2F3F5] min-h-screen absolute left-0 px-4 mt-10 grid md:grid-cols-4">
        <InfoBar
          cars={cars?.length || 0}
          colors={colors?.length || 0}
          platforms={platforms?.length || 0}
          companies={companies?.length || 0}
          users={users?.length || 0}
        />
        <div className="gap-x-10 mb-7 md:col-span-3">
          <Chart data={data} />
          <UsersTable users={users} />
        </div>
      </div>
    </div>
  );
}
