import prisma from "@/lib/prisma"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Calendar, ArrowLeft } from "lucide-react"

export default async function PhotographerProfilePage({ params }: { params: { id: string } }) {
  const pro = await prisma.user.findUnique({
    where: { id: params.id, role: "PRO" },
    include: { profile: true, portfolioItems: true }
  })

  if (!pro || !pro.profile) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 pb-24">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/marketplace" className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white">
            <ArrowLeft className="w-4 h-4" />
            Back to Marketplace
          </Link>
          <Link href="/" className="text-2xl font-serif">Lensora</Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Profile Hero */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl font-serif">{pro.name}</h1>
              <p className="text-xl text-amber-500 font-medium">{pro.profile.niche} Photographer</p>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {pro.profile.city}
              </div>
              <div className="flex items-center gap-2">
                <BriefcaseIcon className="w-4 h-4" />
                {pro.profile.experienceLevel}
              </div>
            </div>

            <div className="prose prose-invert max-w-none pt-4">
              <p className="text-zinc-300 leading-relaxed text-lg">{pro.profile.bio}</p>
            </div>
          </div>

          {/* Hire Card */}
          <div className="w-full md:w-80 p-6 rounded-2xl bg-[#111111] border border-zinc-800 space-y-6 shrink-0 sticky top-24 shadow-2xl">
            <div className="space-y-2">
              <p className="text-sm text-zinc-400 uppercase tracking-widest">Starting at</p>
              <p className="text-4xl font-serif">${pro.profile.startingPrice}</p>
            </div>
            <div className="space-y-3">
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black h-12 text-lg">
                <Mail className="w-5 h-5 mr-2" />
                Send Inquiry
              </Button>
              <Button variant="outline" className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 h-12">
                <Calendar className="w-5 h-5 mr-2" />
                Check Availability
              </Button>
            </div>
            <div className="pt-4 border-t border-zinc-800 text-center">
              <p className="text-xs text-zinc-500">Typically responds within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-serif">Selected Works</h2>
          {pro.portfolioItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pro.portfolioItems.map(item => (
                <div key={item.id} className="aspect-[4/5] bg-zinc-900 rounded-xl overflow-hidden relative group">
                  <img src={item.storageUrl} alt={item.caption || "Portfolio item"} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white text-sm">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center border-2 border-dashed border-zinc-800 rounded-2xl">
              <p className="text-zinc-500">No portfolio items uploaded yet.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

function BriefcaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}
