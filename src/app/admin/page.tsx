import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function AdminDashboard() {
  const session = await auth()

  if (session?.user?.role !== "ADMIN") {
    redirect("/")
  }

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-zinc-100 overflow-hidden">
      <div className="w-64 h-full border-r border-zinc-800 p-6 flex flex-col">
        <h2 className="text-2xl font-serif text-zinc-100">Lensora Admin</h2>
        <nav className="flex-1 mt-8 space-y-4">
          <a href="/admin" className="block text-zinc-400 hover:text-white">Overview</a>
          <a href="/admin/users" className="block text-zinc-400 hover:text-white">Users</a>
        </nav>
      </div>
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-serif">Admin Overview</h1>
        <p className="text-zinc-400 mt-2">Platform health and metrics.</p>
      </main>
    </div>
  )
}
