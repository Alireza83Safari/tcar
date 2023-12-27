import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectToDB from "./database";
import User from "@/models/user";
import bcrypt from 'bcryptjs';
import { randomBytes, randomUUID } from "crypto";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Invalid Credentials");
          }

          await connectToDB();
          const user = await User.findOne({ email: credentials?.email });

          if (!user) {
            throw new Error("Invalid Credentials");
          }

          const passwordsMatch = await bcrypt.compare(
            credentials?.password,
            user.password
          );

          if (!passwordsMatch) {
            throw new Error("Invalid Credentials");
          }

          return user;
        } catch (error: any) {
          console.log("Error: ", error);
          throw new Error("Invalid Credentials");
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, session, trigger }) {
      if (trigger === "update") {
        return { ...token, ...session };
      }
      if (user) {
        return {
          ...token,
          id: user?.id,
          email: user?.email,
          accessToken: token.accessToken,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        id: token?.id,
        email: token?.email,
        accessToken: token.accessToken,
      };
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,

    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex");
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
