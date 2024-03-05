import AddBanner from "./components/AddBanner";
import { Table } from "./components/Table";
import Banner from "@/models/banner";

async function page() {
  const banners = await Banner.find({});

  return (
    <>
      <AddBanner />
      <Table banners={banners} />
    </>
  );
}

export default page;
