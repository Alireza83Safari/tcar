import { getServerSession } from "next-auth";
import { getUserCars } from "@/actions/car";
import { authOptions } from "@/utils/authOptions";
import { getUser } from "@/actions/user";
import { redirect } from "next/navigation";
import { Footer, Header } from "@/components";
import Menu from "../components/Menu";
import Car from "../components/mycar/Car";

export default async function page() {
  const session = await getServerSession(authOptions);
  const cars = await getUserCars((session as any)?.id);
  const user = await getUser((session as any)?.id);

  if (!(session as any)?.id) {
    redirect("/");
  }
  return (
    <>
      <Header />
      <main className="grid md:grid-cols-12 grid-cols-1 sm:mt-12 mt-4 xl:container mx-auto md:px-8 relative">
        <Menu user={user} />
        <Car cars={cars} />
      </main>
      <Footer />
    </>
  );
}
