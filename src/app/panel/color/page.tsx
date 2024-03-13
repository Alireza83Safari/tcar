import AddColor from "./components/AddColor";
import ColorTable from "./components/ColorTable";
import { getColors } from "@/actions/color";

async function page() {
  const colors = await getColors();

  return (
    <>
      <AddColor />
      <ColorTable colors={colors} />
    </>
  );
}

export default page;
