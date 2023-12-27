import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/app/about/components/About";

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
