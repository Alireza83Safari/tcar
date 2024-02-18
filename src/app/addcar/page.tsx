import { withAuth } from "@/HOC/withAuth";
import AddCar from "@/app/addcar/components/AddCar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

async function page() {
  return (
    <>
      <Header />
      <AddCar />
      <Footer />
    </>
  );
}

export default withAuth(page);
