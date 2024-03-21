import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import google from "next-auth/providers/google";
import prisma from "./src/lib/prisma";

export const { handlers, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub || "";
      return session;
    },
  },
  providers: [google],
  pages: {
    signIn: "/login",
  },

  session: { strategy: "jwt" },
});
