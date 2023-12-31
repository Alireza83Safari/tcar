import Banner from "./components/Banner";
import ChoiceCar from "./components/ChoiceCar";
import Footer from "@/components/Footer";
import Newest from "./components/Newest";
import Platforms from "./components/Platforms";
import Trait from "./components/Trait";
import Options from "./components/Options";
import Application from "./components/Application";
import Blog from "./components/Blog/Blog";
import Header from "@/components/Header";
import FilterCar from "./components/FilterCar";
import Company from "./components/Company";
import { getAppPics } from "@/actions/appPic";

export default async function Home() {
  const banners = await getAppPics();

  return (
    <div>
      <Header />
      <Banner banners={banners} />
      <FilterCar />
      <Platforms />
      <Newest />
      <Company />
      <Trait />
      <ChoiceCar />
      <Options />
      <Application />
      <Blog />
      <Footer />
    </div>
  );
}
