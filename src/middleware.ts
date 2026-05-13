import NextAuth from "next-auth"
import { authConfig } from "./auth.config"

const { auth } = NextAuth(authConfig)
import { NextResponse } from "next/server"

// Define protected routes and their allowed roles
const roleRoutes = {
  "/dashboard/beginner": "BEGINNER",
  "/dashboard/pro": "PRO",
  "/dashboard/client": "CLIENT",
  "/admin": "ADMIN",
}

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth
  const user = req.auth?.user
  // @ts-ignore
  const onboardingCompleted = user?.onboardingCompleted as boolean | undefined
  const userRole = user?.role as string | undefined

  const isProtectedRoute = nextUrl.pathname.startsWith("/dashboard") || nextUrl.pathname.startsWith("/admin")
  const isOnboardingRoute = nextUrl.pathname === "/onboarding"
  const isAuthRoute = nextUrl.pathname === "/login" || nextUrl.pathname === "/register"

  // 1. Handle Protected Routes
  if (isProtectedRoute) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/login", nextUrl))
    }

    if (!onboardingCompleted) {
      return NextResponse.redirect(new URL("/onboarding", nextUrl))
    }

    // Role-based access control
    let requiredRole = null
    for (const [route, role] of Object.entries(roleRoutes)) {
      if (nextUrl.pathname.startsWith(role === "BEGINNER" ? "/dashboard/beginner" : route)) {
        requiredRole = role
        break
      }
    }

    if (requiredRole && userRole !== requiredRole) {
      const correctDashboard = Object.entries(roleRoutes).find(([_, r]) => r === userRole)?.[0]
      if (correctDashboard) {
        return NextResponse.redirect(new URL(correctDashboard, nextUrl))
      }
    }
  }

  // 2. Handle Onboarding Route
  if (isOnboardingRoute) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/login", nextUrl))
    }

    if (onboardingCompleted) {
      const correctDashboard = Object.entries(roleRoutes).find(([_, r]) => r === userRole)?.[0] || "/dashboard/beginner"
      return NextResponse.redirect(new URL(correctDashboard, nextUrl))
    }
  }

  // 3. Handle Auth Routes (prevent logged in users from seeing login)
  if (isAuthRoute && isLoggedIn) {
    if (onboardingCompleted) {
      const correctDashboard = Object.entries(roleRoutes).find(([_, r]) => r === userRole)?.[0] || "/dashboard/beginner"
      return NextResponse.redirect(new URL(correctDashboard, nextUrl))
    } else {
      return NextResponse.redirect(new URL("/onboarding", nextUrl))
    }
  }

  return NextResponse.next()
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
