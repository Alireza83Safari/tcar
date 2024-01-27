import User from "@/models/user";
import { authOptions } from "@/utils/authOptions";
import { getServerSession, Session } from "next-auth";
import { redirect } from "next/navigation";

interface WithAuthPanelProps {}

export function withAuthPanel(Component: React.ComponentType) {
  return async function withAuthPanel(props: WithAuthPanelProps) {
    const session: Session | null = await getServerSession(authOptions);
    var isAuthenticated: boolean = false;

    if ((session as any)?.id) {
      const user = await User.findOne({ email: (session as any)?.email });
      isAuthenticated = user?.role === "ADMIN" ? true : false;
    }

    if (!isAuthenticated) {
      redirect("/login");
    }

    return <Component {...props} />;
  };
}
