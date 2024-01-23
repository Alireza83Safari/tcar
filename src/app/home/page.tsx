import Banner from "./components/Banner";
import ChoiceCar from "./components/ChoiceCar";
import { Footer, Header } from "@/components";
import Newest from "./components/Newest";
import Platforms from "./components/Platforms";
import Trait from "./components/Trait";
import Options from "./components/Options";
import Application from "./components/Application";
import Blog from "./components/Blog/Blog";
import FilterCar from "./components/FilterCar";
import Company from "./components/Company";
import { getAppPics } from "@/actions/appPic";
import { getPlatforms } from "@/actions/platform";
import { getCopmpanies } from "@/actions/company";
import { getCars } from "@/actions/car";
import { getBlogs } from "@/actions/blog";

export default async function Home() {
  const banners = await getAppPics();
  const platformsData = await getPlatforms("");
  const companies = await getCopmpanies();
  const cars = await getCars("");
  const blogs = await getBlogs();

  return (
    <div>
      <Header />
      <Banner banners={banners} />
      <FilterCar />
      <Platforms platforms={platformsData} />
      <Newest cars={cars} />
      <Company companies={companies} />
      <Trait />
      <ChoiceCar cars={cars} />
      <Options />
      <Application />
      <Blog blogs={blogs} />
      <Footer />
    </div>
  );
}
