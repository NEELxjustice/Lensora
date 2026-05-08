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
  const userRole = req.auth?.user?.role as string | undefined

  // Protect all /dashboard routes and /admin
  const isProtectedRoute = nextUrl.pathname.startsWith("/dashboard") || nextUrl.pathname.startsWith("/admin")
  const isOnboardingRoute = nextUrl.pathname === "/onboarding"

  if (isProtectedRoute) {
    if (!isLoggedIn) {
      // Redirect to login if not logged in
      return NextResponse.redirect(new URL("/api/auth/signin", nextUrl))
    }

    // Determine which dashboard they are trying to access
    let requiredRole = null
    for (const [route, role] of Object.entries(roleRoutes)) {
      if (nextUrl.pathname.startsWith(route)) {
        requiredRole = role
        break
      }
    }

    if (requiredRole && userRole !== requiredRole) {
      // User is trying to access a dashboard they don't have access to
      // Redirect them to their proper dashboard or onboarding
      if (!userRole) {
        return NextResponse.redirect(new URL("/onboarding", nextUrl))
      }
      
      const correctDashboard = Object.entries(roleRoutes).find(([_, r]) => r === userRole)?.[0]
      if (correctDashboard) {
        return NextResponse.redirect(new URL(correctDashboard, nextUrl))
      }
    }
  }

  // If they are on onboarding but already have a role (and maybe it's not the default BEGINNER role if they completed it)
  // Actually, we should probably check a flag or just let them be, but for MVP:
  if (isOnboardingRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/api/auth/signin", nextUrl))
  }

  return NextResponse.next()
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
