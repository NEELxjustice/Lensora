import { auth } from "@/auth"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, TrendingUp, Users, ExternalLink, ShieldCheck, Mail, Wallet, Settings } from "lucide-react"

export default async function ProDashboard() {
  const session = await auth()
  const firstName = session?.user?.name?.split(" ")[0] || "Professional"

  return (
    <div className="max-w-[1600px] mx-auto p-6 space-y-6">
      {/* Top Header Strip */}
      <div className="flex items-center justify-between bg-[#0d0d0d] border border-zinc-800 rounded-2xl p-4 px-8">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/50">
            <ShieldCheck className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <h2 className="text-lg font-medium text-white">{firstName}'s Command Center</h2>
            <p className="text-xs text-zinc-500 italic">Verified Photographer</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
           <Button render={<Link href={`/photographers/${session?.user?.id}`} />} variant="outline" className="border-zinc-800 text-zinc-400 hover:text-white">
            <ExternalLink className="w-4 h-4 mr-2" />
            Public View
          </Button>
          <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
            Manage Portfolio
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column: Stats & Performance */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Profile Reach", val: "12.4k", icon: Users, color: "blue" },
              { label: "Active Leads", val: "24", icon: Mail, color: "amber" },
              { label: "Revenue", val: "$4,200", icon: Wallet, color: "green" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#0d0d0d] border border-zinc-800 p-8 rounded-3xl space-y-4">
                <div className={`w-12 h-12 rounded-xl bg-${stat.color}-500/10 flex items-center justify-center`}>
                   <stat.icon className={`w-6 h-6 text-${stat.color}-500`} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">{stat.label}</p>
                  <p className="text-3xl font-serif text-white">{stat.val}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Inquiries Table style */}
          <div className="bg-[#0d0d0d] border border-zinc-800 rounded-3xl overflow-hidden">
            <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
              <h3 className="text-xl font-serif text-white">Recent Inquiries</h3>
              <Button variant="ghost" className="text-amber-500 hover:text-amber-400">View All</Button>
            </div>
            <div className="p-10 text-center space-y-4 bg-zinc-900/10">
              <div className="w-16 h-16 rounded-full bg-zinc-800/50 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-zinc-600" />
              </div>
              <p className="text-zinc-500 font-light max-w-sm mx-auto">
                No active inquiries. Try updating your tags to get discovered by more clients.
              </p>
              <Button render={<Link href="/dashboard/pro/profile" />} variant="outline" className="border-zinc-800">
                Optimization Tips
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Actions & Meta */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-gradient-to-br from-amber-600 to-amber-900 rounded-3xl p-8 space-y-6 text-white shadow-2xl">
            <div className="space-y-2">
              <h3 className="text-2xl font-medium">Upgrade to Elite</h3>
              <p className="text-amber-100 font-light">Unlimited storage, 4K uploads, and priority marketplace ranking.</p>
            </div>
            <Button className="w-full bg-white text-amber-900 hover:bg-zinc-100 py-6 rounded-2xl font-bold">
              Upgrade Now
            </Button>
          </div>

          <div className="bg-[#0d0d0d] border border-zinc-800 rounded-3xl p-8 space-y-6">
             <h3 className="text-lg font-medium text-white flex items-center">
               <Settings className="w-4 h-4 mr-2 text-zinc-500" />
               Quick Actions
             </h3>
             <div className="grid grid-cols-1 gap-3">
               {["Edit Pricing", "Update Schedule", "Download Reports", "Email Clients"].map((act) => (
                 <button key={act} className="w-full text-left px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all text-zinc-400 text-sm">
                   {act}
                 </button>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}


