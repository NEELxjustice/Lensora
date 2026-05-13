import { Sidebar } from "@/components/layout/sidebar"
import { PageTransition } from "@/components/ui/PageTransition"
import { ReactNode } from "react"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-[#0a0a0a] text-zinc-100 overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
    </div>
  )
}
