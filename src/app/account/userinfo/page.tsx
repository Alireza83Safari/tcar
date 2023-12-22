import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import UserInfo from "../components/userinfo/UserInfo";
import { getServerToken } from "@/app/actions/getServerToken";
import { getUser } from "@/app/actions/user";
import Menu from "../components/Menu";

export default async function page() {
  const session = await getServerToken();
  const user = await getUser((session as any)?.email);

  return (
    <>
      <Header />
      <main className="grid grid-cols-12 mt-12">
        <Menu />
        <UserInfo user={user} session={session} />
      </main>
      <Footer />
    </>
  );
}
