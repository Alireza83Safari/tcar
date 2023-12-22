import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/About";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function page() {

  return (
    <>
      <Header />
      <About />
      <Footer />
    </>
  );
}

export default page;
