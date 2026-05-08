import { auth } from "@/auth"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, MapPin, Star, Heart, Filter } from "lucide-react"

export default async function ClientDashboard() {
  const session = await auth()
  const firstName = session?.user?.name?.split(" ")[0] || "Client"

  return (
    <div className="max-w-[1400px] mx-auto py-10 px-6 space-y-12">
      {/* Search & Filter Header - Floating Style */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-4xl font-serif text-white">Find Talent</h1>
            <p className="text-zinc-500 font-light">Explore the world's most talented visual creators.</p>
          </div>
          <div className="flex items-center space-x-3">
             <Button variant="outline" className="border-zinc-800 rounded-xl px-4 py-6">
                <Filter className="w-4 h-4 mr-2" />
                Filters
             </Button>
             <div className="h-10 w-px bg-zinc-800 mx-2 hidden md:block" />
             <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input 
                  type="text" 
                  placeholder="Style, location..."
                  className="bg-[#0d0d0d] border border-zinc-800 rounded-xl py-3 pl-12 pr-4 text-sm w-64 focus:outline-none focus:border-blue-500/50 transition-all"
                />
             </div>
          </div>
        </div>
      </div>

      {/* Discovery Grid - Masonry style feel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="group relative rounded-[2rem] overflow-hidden bg-[#0d0d0d] border border-zinc-800 transition-all hover:border-blue-500/30">
            {/* Mock Image Placeholder */}
            <div className={`aspect-[4/5] bg-gradient-to-br ${
              i % 3 === 0 ? "from-zinc-800 to-zinc-900" : 
              i % 2 === 0 ? "from-blue-900/20 to-zinc-900" : 
              "from-indigo-900/20 to-zinc-900"
            } relative overflow-hidden`}>
              <div className="absolute top-4 right-4 z-10">
                <button className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Heart className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">Studio {i}</h3>
                  <p className="text-xs text-zinc-500 flex items-center mt-1">
                    <MapPin className="w-3 h-3 mr-1" />
                    London, UK
                  </p>
                </div>
                <div className="flex items-center text-blue-400 text-sm font-medium">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  4.9
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {["Editorial", "Portrait"].map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400 uppercase tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>
              
              <Button render={<Link href="/marketplace" />} variant="ghost" className="w-full justify-center border border-zinc-800 group-hover:border-blue-500/50 group-hover:bg-blue-500/5 py-5 rounded-xl text-zinc-400 group-hover:text-white transition-all text-xs">
                View Portfolio
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button for smaller screens or quick access */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button className="bg-blue-600 hover:bg-blue-500 text-white rounded-full h-14 px-8 shadow-2xl shadow-blue-600/30 flex items-center space-x-2">
          <Search className="w-5 h-5" />
          <span className="font-semibold">Explore Marketplace</span>
        </Button>
      </div>
    </div>
  )
}


