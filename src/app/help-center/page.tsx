import { Footer, Header } from "@/components";
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
