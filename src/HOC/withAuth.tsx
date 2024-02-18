import { authOptions } from "@/utils/authOptions";
import { getServerSession, Session } from "next-auth";
import { redirect } from "next/navigation";

interface WithAuthProps {}

export function withAuth(Component: React.ComponentType) {
  return async function withAuth(props: WithAuthProps) {
    const session: Session | null = await getServerSession(authOptions);
    var isAuthenticated: boolean = (session as any)?.id ? true : false;

    if (!isAuthenticated) {
      redirect("/login");
    }

    return <Component {...props} />;
  };
}
