import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import { dbConnect } from "./lib/dbConnect";
import { User } from "./models/User";

const privateRoutes = [
  "/dashboard",
  "/settings",
  "/profile",
  "/challenges",
  "/leaderboard",
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Github],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      if (!isLoggedIn && privateRoutes.includes(nextUrl.pathname)) {
        return Response.redirect(new URL("/login", nextUrl));
      }
      if (isLoggedIn && nextUrl.pathname === "/login") {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },

    signIn: async ({ user, account }) => {
      await dbConnect();
      const existingUser = await User.findOne({
        email: user.email,
        provider: account?.provider,
        providerAccountId: account?.providerAccountId,
      });
      if (!existingUser) {
        await User.create({
          username: user.name,
          email: user.email,
          provider: account?.provider,
          providerAccountId: account?.providerAccountId,
          profilePicture: user.image,
        });
      }

      return true;
    },
  },
});
