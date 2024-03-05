import AddColor from "./components/AddColor";
import { Table } from "./components/Table";
import { getColors } from "@/actions/color";

async function page() {
  const colors = await getColors();

  return (
    <>
      <AddColor />
      <Table colors={colors} />
    </>
  );
}

export default page;
