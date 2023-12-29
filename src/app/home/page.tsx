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

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
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
