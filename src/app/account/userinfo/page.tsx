import { Footer, Header, LoadingTemplate } from "@/components";
import { getServerToken } from "@/actions/getServerToken";
import { getUser } from "@/actions/user";
import UserInfo from "../components/UserInfo";
import Menu from "../components/Menu";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { withAuth } from "@/HOC/withAuth";

async function page() {
  const session = await getServerToken();
  if (!(session as any)?.id) {
    redirect("/home");
  }
  const user = await getUser((session as any)?.id);

  return (
    <>
      <Header />
      <main className="grid md:grid-cols-12 grid-cols-1 mt-12 xl:container mx-auto z-10">
        <Suspense fallback={<LoadingTemplate />}>
          <Menu user={user} />
          <UserInfo user={user} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default withAuth(page);
