import Banner from "@/components/HomePage/Banner";
import LastBlogs from "@/components/Blog/LastBlogs";
import Company from "@/components/HomePage/Company";
import ChoiceCar from "@/components/HomePage/ChoiceCar/ChoiceCar";
import Footer from "@/components/Footer";
import Newest from "@/components/HomePage/Newest/Newest";
import Platforms from "@/components/HomePage/Platforms";
import FilterSkeleton from "@/components/Skeleton/FilterSkeleton";
import HeaderSkeleton from "@/components/Skeleton/HeaderSkeleton";
import Trait from "@/components/HomePage/Trait";
import { Suspense, lazy } from "react";
import Options from "@/components/HomePage/Options";
import Application from "@/components/Application";

const Header = lazy(() => import("@/components/Header"));
const FilterCar = lazy(() => import("@/components/HomePage/FilterCar"));

export default function Home() {
  return (
    <div>
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>
      <Banner />
      <Suspense fallback={<FilterSkeleton />}>
        <FilterCar />
      </Suspense>
      <Platforms />
      <Newest />
      <Company />
      <Trait />
      <ChoiceCar />
      <Options />
      <Application />
      <LastBlogs />
      <Footer />
    </div>
  );
}
