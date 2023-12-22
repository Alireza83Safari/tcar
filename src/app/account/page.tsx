import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Account from "./components/userinfo/UserInfo";
import { getUser } from "../actions/user";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function page() {
  const session = await getServerSession(authOptions);
  const user = await getUser((session as any)?.email);

  return (
    <>
      <Header />
      <Account user={user} session={session} />
      <Footer />
    </>
  );
}
