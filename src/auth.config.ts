import type { NextAuthConfig } from 'next-auth';
import Google from "next-auth/providers/google"

export const authConfig = {
  providers: [Google()],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        // @ts-ignore
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        // @ts-ignore
        session.user.role = token.role as string
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
    newUser: '/onboarding',
  },
} satisfies NextAuthConfig;
