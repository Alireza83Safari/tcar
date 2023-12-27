import Contact from "@/app/contact/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

async function page() {
  return (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  );
}

export default page;
