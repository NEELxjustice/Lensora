"use server"

import { auth } from "@/auth"
import prisma from "@/lib/prisma"
import { Role } from "@prisma/client"
import { redirect } from "next/navigation"

export async function selectUserRole(formData: FormData) {
  const session = await auth()
  
  if (!session?.user?.id) {
    throw new Error("Unauthorized")
  }

  const role = formData.get("role") as string

  if (!Object.values(Role).includes(role as Role)) {
    throw new Error("Invalid role")
  }

  // Update user in DB
  await prisma.user.update({
    where: { id: session.user.id },
    data: { 
      role: role as Role,
      onboardingCompleted: true
    }
  })

  // We should redirect to the appropriate dashboard
  let redirectPath = "/dashboard/beginner"
  
  switch (role as Role) {
    case Role.BEGINNER:
      redirectPath = "/dashboard/beginner"
      break
    case Role.PRO:
      redirectPath = "/dashboard/pro"
      break
    case Role.CLIENT:
      redirectPath = "/dashboard/client"
      break
  }

  redirect(redirectPath)
}
