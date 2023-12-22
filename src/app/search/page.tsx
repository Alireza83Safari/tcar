"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const searchParams = useSearchParams();
  console.log(searchParams.toString());

  return (
    <main>
      <Header />

      <Footer />
    </main>
  );
};

export default page;
