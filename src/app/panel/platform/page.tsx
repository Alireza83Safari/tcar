import { Table } from "./components/Table";
import AddPlatform from "./components/AddPlatform";
import { getPlatforms } from "@/actions/platform";

export const revalidate = 60 * 60;

async function page() {
  const platforms = await getPlatforms("");
  return (
    <>
      <AddPlatform />
      <Table platforms={platforms} />
    </>
  );
}

export default page;
