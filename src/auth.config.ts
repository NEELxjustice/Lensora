import type { NextAuthConfig } from 'next-auth';
import Google from "next-auth/providers/google"

export const authConfig = {
  providers: [Google()],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id
        // @ts-ignore
        token.role = user.role
        // @ts-ignore
        token.onboardingCompleted = user.onboardingCompleted
      }
      // Handle session updates (e.g. after onboarding)
      if (trigger === "update" && session) {
        token.role = session.role
        token.onboardingCompleted = session.onboardingCompleted
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        // @ts-ignore
        session.user.role = token.role as string
        // @ts-ignore
        session.user.onboardingCompleted = token.onboardingCompleted as boolean
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
    newUser: '/onboarding',
  },
} satisfies NextAuthConfig;
