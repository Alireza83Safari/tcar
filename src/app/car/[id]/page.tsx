import { getCar, getCars } from "@/actions/car";
import CarDetails from "@/components/Car/CarDetails";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CarType } from "@/types/car.type";
import { Metadata } from "next";

export async function generateStaticParams() {
  const cars = await getCars("");

  return cars?.map((car: CarType) => ({
    id: car?._id,
  }));
}

type Props = {
  params: { id: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  try {
    const car = await getCar(params.id);

    return {
      title: `${car?.title} مدل ${car?.years}`,
      description: `جزئیات ${car?.company?.name} ${car?.years} را کشف کنید. ویژگی‌ها، مشخصات و موارد دیگر آن را بررسی کنید. ماشین ایده‌آل ${car?.company?.name} ${car?.years} را در نمایندگی خود پیدا کنید.`,
    };
  } catch (error) {
    return {
      title: "صفحه خودرو",
    };
  }
};

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
