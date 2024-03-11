import React, { Suspense } from "react";
import { getServerSession } from "next-auth";
import User from "@/models/user";
import { redirect } from "next/navigation";
import Menu from "./components/Menu";
import { authOptions } from "@/utils/authOptions";
import Header from "./components/Header";
import { LoadingTemplate } from "@/components";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  var isAuthenticated = false;

  if ((session as any)?.id) {
    const user = await User.findOne({ _id: (session as any)?.id });
    isAuthenticated = user?.role === "ADMIN" ? true : false;
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <Header />
          <Menu />
          <main className="lg:pr-[10rem] md:pr-[9rem] xs:pr-[6rem] pr-[4.6rem] bg-[#F2F3F5] min-h-screen pt-20 pl-3 min-w-full -z-10">
            <Suspense fallback={<LoadingTemplate />}>{children}</Suspense>
          </main>
        </>
      ) : (
        redirect("/login")
      )}
    </>
  );
}
