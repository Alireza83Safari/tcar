import Contact from "@/app/contact/components/Contact";
import { Footer, Header } from "@/components";

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
