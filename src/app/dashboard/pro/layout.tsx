import { auth } from "@/auth"
import Link from "next/link"
import { 
  LayoutDashboard, 
  Image as ImageIcon, 
  Camera, 
  FolderKanban, 
  Users, 
  BarChart3, 
  Settings,
  Circle
} from "lucide-react"

export default async function ProLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  const name = session?.user?.name || "Creator"

  const navLinks = [
    { name: "Dashboard", href: "/dashboard/pro", icon: LayoutDashboard },
    { name: "Portfolio", href: "/dashboard/pro/portfolio", icon: ImageIcon },
    { name: "AI Analyzer", href: "/dashboard/pro/analyzer", icon: Camera },
    { name: "Projects", href: "/dashboard/pro/projects", icon: FolderKanban },
    { name: "Clients", href: "/dashboard/pro/clients", icon: Users },
    { name: "Progress", href: "/dashboard/pro/progress", icon: BarChart3 },
    { name: "Settings", href: "/dashboard/pro/settings", icon: Settings },
  ]

  return (
    <div className="flex h-screen bg-matte-black text-zinc-100 overflow-hidden font-sans">
      {/* MINIMAL LEFT SIDEBAR */}
      <aside className="w-20 lg:w-64 border-r border-zinc-800/50 bg-matte-black flex flex-col transition-all duration-500 ease-in-out">
        <div className="p-8">
          <Link href="/" className="text-2xl font-serif tracking-tight hover:opacity-70 transition-opacity">
            <span className="lg:hidden">L</span>
            <span className="hidden lg:inline">Lensora</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 mt-8 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-4 px-4 py-3 text-zinc-500 hover:text-zinc-100 hover:bg-white/5 rounded-xl transition-all group"
            >
              <link.icon size={20} className="group-hover:scale-110 transition-transform" />
              <span className="hidden lg:inline text-sm font-medium">{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* BOTTOM PROFILE SECTION */}
        <div className="p-4 border-t border-zinc-800/50 mb-4">
          <div className="flex items-center gap-4 px-3 py-2 rounded-2xl hover:bg-white/5 transition-all cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden border border-zinc-700">
                {session?.user?.image ? (
                  <img src={session.user.image} alt={name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-400 font-serif">
                    {name.charAt(0)}
                  </div>
                )}
              </div>
              <Circle className="absolute bottom-0 right-0 w-3 h-3 text-emerald-500 fill-emerald-500 border-2 border-matte-black" />
            </div>
            <div className="hidden lg:block overflow-hidden">
              <p className="text-sm font-medium text-zinc-200 truncate">{name}</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">Online</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 overflow-y-auto noise-bg scroll-smooth">
        {children}
      </main>
    </div>
  )
}
