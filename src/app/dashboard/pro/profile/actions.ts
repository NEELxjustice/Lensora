"use server"

import { auth } from "@/auth"
import prisma from "@/lib/prisma"
import { z } from "zod"
import { revalidatePath } from "next/cache"

const profileSchema = z.object({
  niche: z.string().min(2),
  city: z.string().min(2),
  experienceLevel: z.string().min(2),
  startingPrice: z.number().min(0),
  bio: z.string().min(10)
})

export async function updateProProfileAction(formData: FormData) {
  const session = await auth()
  if (!session?.user?.id || session.user.role !== "PRO") {
    throw new Error("Unauthorized")
  }

  const parsed = profileSchema.safeParse({
    niche: formData.get("niche"),
    city: formData.get("city"),
    experienceLevel: formData.get("experienceLevel"),
    startingPrice: parseInt(formData.get("startingPrice") as string) || 0,
    bio: formData.get("bio"),
  })

  if (!parsed.success) {
    throw new Error("Invalid form data")
  }

  await prisma.profile.upsert({
    where: { userId: session.user.id },
    update: parsed.data,
    create: {
      userId: session.user.id,
      ...parsed.data
    }
  })

  revalidatePath("/dashboard/pro/profile")
  revalidatePath("/marketplace")
}
