import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectToDB from "@/utils/database";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { randomBytes, randomUUID } from "crypto";
import { NextApiHandler } from "next";
import NextAuth from "next-auth/next";
import { authOptions } from "@/utils/authOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
