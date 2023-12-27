import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Menu from "./components/Menu";

export default async function page() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-12 mt-12">
        <Menu />
      </main>
      <Footer />
    </>
  );
}
