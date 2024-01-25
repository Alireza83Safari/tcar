import { getCar, getCars } from "@/actions/car";
import CarDetails from "@/components/Car/CarDetails";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CarType } from "@/types/car.type";

export async function generateStaticParams() {
  const cars = await getCars("");

  return cars?.map((car: CarType) => ({
    id: car?._id,
  }));
}

export default async function page({ params }: { params: { id: string } }) {
  const car = await getCar(params?.id);

  return (
    <>
      <Header />
      <div className="xl:container mx-auto px-4 ">
        <CarDetails car={car} />
      </div>
      <Footer />
    </>
  );
}
