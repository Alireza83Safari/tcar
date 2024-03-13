import AddPlatform from "./components/AddPlatform";
import { getPlatforms } from "@/actions/platform";
import PlatformTable from "./components/PlatformTable";

export const revalidate = 60 * 60;

async function page() {
  const platforms = await getPlatforms("");
  return (
    <>
      <AddPlatform />
      <PlatformTable platforms={platforms} />
    </>
  );
}

export default page;
