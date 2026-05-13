import Link from "next/link"
import { auth } from "@/auth"
import { Role } from "@prisma/client"
import { Camera, LayoutDashboard, Settings, User, LogOut, CheckCircle, Users, BarChart } from "lucide-react"

export async function Sidebar() {
  const session = await auth()
  const role = session?.user?.role as Role

  let links = []

  switch (role) {
    case Role.BEGINNER:
      links = [
        { name: "Dashboard", href: "/dashboard/beginner", icon: LayoutDashboard },
        { name: "AI Analyzer", href: "/dashboard/beginner/analyzer", icon: Camera },
        { name: "Progress", href: "/dashboard/beginner/progress", icon: BarChart },
        { name: "Settings", href: "/dashboard/settings", icon: Settings },
      ]
      break
    case Role.PRO:
      links = [
        { name: "Dashboard", href: "/dashboard/pro", icon: LayoutDashboard },
        { name: "Portfolio Intelligence", href: "/dashboard/pro/profile", icon: Camera },
        { name: "Client Leads", href: "/dashboard/pro/inbox", icon: CheckCircle },
        { name: "Marketplace", href: "/marketplace", icon: Users },
        { name: "Analytics", href: "/dashboard/pro/analytics", icon: BarChart },
        { name: "Projects", href: "/dashboard/pro/projects", icon: LayoutDashboard },
        { name: "Messages", href: "/dashboard/pro/messages", icon: User },
        { name: "Settings", href: "/dashboard/settings", icon: Settings },
      ]
      break
    case Role.CLIENT:
      links = [
        { name: "Dashboard", href: "/dashboard/client", icon: LayoutDashboard },
        { name: "Marketplace", href: "/marketplace", icon: Users },
        { name: "Saved Pros", href: "/dashboard/client/saved", icon: CheckCircle },
        { name: "Settings", href: "/dashboard/settings", icon: Settings },
      ]
      break
    default:
      links = []
  }

  return (
    <div className="w-64 h-full border-r border-zinc-800 bg-[#0a0a0a] flex flex-col">
      <div className="p-6">
        <h2 className="text-2xl font-serif text-zinc-100">Lensora</h2>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 rounded-lg transition-colors"
            >
              <Icon size={18} />
              <span className="text-sm font-medium">{link.name}</span>
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-zinc-800">
        <div className="flex items-center gap-3 px-3 py-2 text-zinc-400">
          <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
            {session?.user?.name?.charAt(0) || "U"}
          </div>
          <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            {session?.user?.name}
          </div>
        </div>
      </div>
    </div>
  )
}
