import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "../components/Menu";
import { Car } from "../components/mycar/Car";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getUserCars } from "@/app/actions/profile";

export default async function page() {
  const session = await getServerSession(authOptions);
  const cars = await getUserCars(session?.id);
  console.log(session);

  return (
    <>
      <Header />
      <main className="grid grid-cols-12 mt-12">
        <Menu />
        <Car cars={cars} />
      </main>
      <Footer />
    </>
  );
}
