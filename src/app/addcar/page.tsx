import AddCar from "@/app/addcar/components/AddCar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function page() {
  return (
    <>
      <Header />
      <AddCar />
      <Footer />
    </>
  );
}
