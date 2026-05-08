import prisma from "@/lib/prisma"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, MapPin, Briefcase } from "lucide-react"

export default async function MarketplacePage() {
  const pros = await prisma.user.findMany({
    where: { role: "PRO", profile: { isNot: null } },
    include: { profile: true }
  })

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      {/* Top Navbar Placeholder */}
      <header className="border-b border-zinc-800 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif">Lensora</Link>
          <div className="flex items-center gap-4">
            <Link href="/dashboard/client" className="text-sm font-medium text-zinc-400 hover:text-white">Dashboard</Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-serif">Find your perfect photographer</h1>
          <p className="text-lg text-zinc-400">
            Browse portfolios, compare pricing, and hire top-tier creative talent for your next project.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="p-4 rounded-2xl bg-[#111111] border border-zinc-800 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-zinc-500" />
            <input 
              type="text" 
              placeholder="Search by name or style..." 
              className="w-full bg-transparent border-none pl-10 pr-4 py-2 text-zinc-100 focus:outline-none"
            />
          </div>
          <div className="w-px bg-zinc-800 hidden md:block"></div>
          <div className="flex-1 relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-zinc-500" />
            <input 
              type="text" 
              placeholder="Location" 
              className="w-full bg-transparent border-none pl-10 pr-4 py-2 text-zinc-100 focus:outline-none"
            />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            Search
          </Button>
        </div>

        {/* Pro Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pros.map((pro) => (
            <Link key={pro.id} href={`/photographers/${pro.id}`}>
              <div className="group rounded-2xl border border-zinc-800 bg-[#111111] overflow-hidden hover:border-zinc-500 transition-colors cursor-pointer flex flex-col h-full">
                <div className="aspect-video bg-zinc-800 relative overflow-hidden">
                  {/* Portfolio cover placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
                    <Briefcase className="w-8 h-8 opacity-50" />
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-serif text-white group-hover:text-amber-400 transition-colors">
                      {pro.name || "Unknown Photographer"}
                    </h3>
                    <p className="text-sm text-zinc-300">{pro.profile?.niche}</p>
                  </div>
                </div>
                
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <MapPin className="w-4 h-4" />
                      {pro.profile?.city}
                    </div>
                    <p className="text-sm text-zinc-500 line-clamp-2">
                      {pro.profile?.bio}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-zinc-500">Starting at</p>
                      <p className="text-lg font-medium text-zinc-100">${pro.profile?.startingPrice}</p>
                    </div>
                    <Button variant="outline" className="border-zinc-700 text-zinc-300 group-hover:bg-zinc-800">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {pros.length === 0 && (
            <div className="col-span-full py-24 text-center border-2 border-dashed border-zinc-800 rounded-2xl">
              <p className="text-zinc-500">No photographers found.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
