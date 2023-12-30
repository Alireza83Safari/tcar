import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import UserInfo from "../components/userinfo/UserInfo";
import { getServerToken } from "@/actions/getServerToken";
import { getUser } from "@/actions/user";
import Menu from "../components/Menu";

export default async function page() {
  const session = await getServerToken();
  const user = await getUser((session as any)?.id);

  return (
    <>
      <Header />
      <main className="grid md:grid-cols-12 grid-cols-1 mt-12 xl:container mx-auto z-10">
        <Menu user={user} />
        <UserInfo user={user} />
      </main>

      <Footer />
    </>
  );
}
