import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "../components/Menu";
import { Car } from "../components/mycar/Car";
import { getServerSession } from "next-auth";
import { getUserCars } from "@/app/actions/car";
import { authOptions } from "@/utils/authOptions";

export default async function page() {
  const session = await getServerSession(authOptions);
  const cars = await getUserCars((session as any)?.id);

  return (
    <>
      <Header />
      <main className="grid grid-cols-12 sm:mt-12 mt-4 xl:container mx-auto md:px-8 relative">
        <Menu />
        <Car cars={cars} />
      </main>
      <Footer />
    </>
  );
}
