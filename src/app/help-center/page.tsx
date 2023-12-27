import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HelpCenter from "@/app/help-center/components/HelpCenter";

async function page() {
  return (
    <>
      <Header />
      <HelpCenter />
      <Footer />
    </>
  );
}

export default page;
