import { NextApiHandler } from "next";
import bcrypt from "bcryptjs";
import connectToDB from "@/utils/database";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { randomBytes, randomUUID } from "crypto";
import { AuthOptions } from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"; // Adjusted import statement
import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

const adapter = MongoDBAdapter({ db: (await clientPromise).db() });

export const authOptions: AuthOptions = {
  adapter, // Setting the adapter properly
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
    async jwt({ token, user, session }) {
      if (user) {
        return {
          ...token,
          id: user?.id,
          email: user?.email,
        };
      }
      return token;
    },
    async session({ session, token, user }) {
      return {
        ...session,
        id: token?.id,
        email: token?.email,
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

const handler: NextApiHandler = NextAuth(authOptions);

export { handler as GET, handler as POST };
