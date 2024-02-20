import { Metadata } from "next";
import { Footer, Header } from "@/components";
import Contact from "./components/Contact";

export const metadata: Metadata = {
  title: "تماس با ما |  tcar",
  description:
    "فرم تماس با ما را پر کنید و تیم ما در اسرع وقت با شما تماس خواهد گرفت. سوالات عمومی، پشتیبانی تلفنی و آدرس ما در اینجا موجود است.",
};

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
