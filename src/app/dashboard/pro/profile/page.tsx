import { auth } from "@/auth"
import prisma from "@/lib/prisma"
import { updateProProfileAction } from "./actions"
import { Button } from "@/components/ui/button"

export default async function ProProfilePage() {
  const session = await auth()
  
  if (!session?.user?.id) return null

  const profile = await prisma.profile.findUnique({
    where: { userId: session.user.id }
  })

  return (
    <div className="space-y-8 max-w-3xl">
      <div className="space-y-2">
        <h1 className="text-3xl font-serif">Profile Builder</h1>
        <p className="text-zinc-400">Complete your profile to attract top clients in the marketplace.</p>
      </div>

      <div className="p-8 rounded-2xl bg-[#111111] border border-zinc-800">
        <form action={updateProProfileAction} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Niche</label>
              <input 
                name="niche"
                defaultValue={profile?.niche || ""}
                placeholder="e.g. Wedding, Fashion, Product"
                className="w-full bg-[#161616] border border-zinc-800 rounded-lg p-3 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">City</label>
              <input 
                name="city"
                defaultValue={profile?.city || ""}
                placeholder="e.g. New York, London"
                className="w-full bg-[#161616] border border-zinc-800 rounded-lg p-3 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Experience Level</label>
              <select 
                name="experienceLevel"
                defaultValue={profile?.experienceLevel || ""}
                className="w-full bg-[#161616] border border-zinc-800 rounded-lg p-3 text-zinc-100 focus:outline-none focus:border-zinc-500"
                required
              >
                <option value="" disabled>Select level...</option>
                <option value="Emerging">Emerging</option>
                <option value="Established">Established</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Starting Price ($)</label>
              <input 
                name="startingPrice"
                type="number"
                defaultValue={profile?.startingPrice || ""}
                placeholder="e.g. 500"
                className="w-full bg-[#161616] border border-zinc-800 rounded-lg p-3 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Bio</label>
            <textarea 
              name="bio"
              defaultValue={profile?.bio || ""}
              placeholder="Tell clients about your style, approach, and background..."
              rows={5}
              className="w-full bg-[#161616] border border-zinc-800 rounded-lg p-3 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500"
              required
            />
          </div>

          <div className="pt-4 flex justify-end">
            <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-black px-8">
              Save Profile
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
