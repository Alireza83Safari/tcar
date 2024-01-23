import Header from "@/app/panel/components/Header";
import Menu from "@/app/panel/components/Menu";
import Chart from "./components/Chart";
import { getPlatforms } from "@/actions/platform";
import { InfoBar } from "./components/InfoBar";
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

  const totalItems =
    companies?.length + colors?.length + platforms?.length + cars?.length;

  const data: DataItem[] = [
    { name: "کمپانی", value: companies?.length },
    { name: "رنگ", value: colors?.length },
    { name: "پلتفرم", value: platforms?.length },
    { name: "خودرو", value: cars?.length },
  ];

  const percentages: Record<string, number> = {};
  data?.forEach((category) => {
    percentages[category?.name] = (category?.value / totalItems) * 100;
  });

  return (
    <div>
      <Header />
      <Menu />
      <div className="md:w-[84vw] w-[84vw] bg-[#F2F3F5] min-h-screen absolute left-0 px-4 mt-10 grid md:grid-cols-4">
        <InfoBar
          cars={cars.length}
          colors={colors.length}
          platforms={platforms.length}
          companies={companies.length}
          users={users.length}
        />
        <div className="gap-x-10 mb-7 md:col-span-3">
          <Chart data={percentages} />
          <UsersTable users={users} />
        </div>
      </div>
    </div>
  );
}
