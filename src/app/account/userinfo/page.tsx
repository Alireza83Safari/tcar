import { Footer, Header } from "@/components";
import { getServerToken } from "@/actions/getServerToken";
import { getUser } from "@/actions/user";
import UserInfo from "../components/UserInfo";
import Menu from "../components/Menu";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await getServerToken();
  if (!(session as any)?.id) {
    redirect("/home");
  }
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
