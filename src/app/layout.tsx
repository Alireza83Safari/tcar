import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./AuthProvider";
import { Toaster } from "react-hot-toast";
import "aos/dist/aos.css";
const vazir = Vazirmatn({ subsets: ["latin", "arabic"] });

export const metadata: Metadata = {
  title: "مرکز فروش خودرو tcar",
  description:
    "باخودروی شما، جستجو کنید و انواع خودروها را مقایسه کنید. پیدا کردن خودروی ایده‌آل برای شما به همراه ما ساده‌تر است.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body className={vazir.className}>
        <AuthProvider>{children}</AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
