import Application from "@/components/Application";
import Banner from "@/components/Banner";
import LastBlogs from "@/components/Blog/LastBlogs";
import Brands from "@/components/Brands";
import ChoiceCar from "@/components/Car/ChoiceCar";
import FilterCar from "@/components/FilterCar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Newest from "@/components/Newest";
import Options from "@/components/Options";
import Suggestion from "@/components/Suggestion";
import Trait from "@/components/Trait";
import { useSession } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <>
        <Header />
        <Banner />
        <FilterCar />
        <Suggestion />
        <Newest />
        <Brands />
        <Trait />
        <ChoiceCar />
        <Options />
        <Application />
        <LastBlogs />
        <Footer />
      </>
    </div>
  );
}
