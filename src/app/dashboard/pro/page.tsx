"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  BarChart3, 
  Camera, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  Globe, 
  Mail, 
  MessageSquare, 
  MoreHorizontal, 
  Search, 
  Sparkles, 
  Star, 
  TrendingUp, 
  Users,
  Zap,
  ArrowRight,
  Target,
  Trophy
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"

// --- Dashboard Components ---

const GlassCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className={`bg-[#141414]/50 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden group hover:border-amber-500/20 transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.3)] ${className}`}
  >
    {children}
  </motion.div>
)

const StatCard = ({ label, value, icon: Icon, trend, color }: any) => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <div className={`p-2 rounded-xl bg-white/5 ${color} border border-white/5`}>
        <Icon size={18} />
      </div>
      {trend && (
        <span className={`text-[10px] font-bold px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500`}>
          {trend}
        </span>
      )}
    </div>
    <div className="space-y-1">
      <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">{label}</p>
      <p className="text-3xl font-serif text-zinc-100">{value}</p>
    </div>
  </div>
)

export default function ProDashboardPage() {
  const { data: session } = useSession()
  const firstName = session?.user?.name?.split(" ")[0] || "Nilesh"

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-zinc-100 p-8 space-y-12 pb-32">
      {/* 1. ELITE HERO SECTION */}
      <section className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-amber-500/5 border border-amber-500/10 text-[10px] uppercase tracking-[0.25em] text-amber-500 font-bold"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Professional Creator Protocol</span>
          </motion.div>
          
          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-7xl font-serif tracking-tighter"
            >
              Welcome back, <span className="italic">{firstName}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl text-zinc-500 font-light"
            >
              Your visual business intelligence overview.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-16">
          {[
            { label: "Rev Growth", val: "+24%", icon: TrendingUp },
            { label: "Client Activity", val: "High", icon: Users },
            { label: "AI Ranking", val: "Top 2%", icon: Target },
            { label: "Portfolio Score", val: "94.2", icon: Trophy },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className="space-y-2"
            >
              <div className="flex items-center gap-2 text-zinc-600">
                <item.icon size={12} />
                <span className="text-[10px] uppercase tracking-widest font-bold">{item.label}</span>
              </div>
              <p className="text-2xl font-serif text-white">{item.val}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. BENTO COMMAND GRID */}
      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* SECTION 1 — PORTFOLIO INTELLIGENCE (LARGE 8x12) */}
        <GlassCard className="lg:col-span-8 p-10 flex flex-col justify-between min-h-[500px]" delay={0.2}>
          <div className="space-y-8">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif italic text-white">Portfolio Intelligence</h2>
                <p className="text-sm text-zinc-500 font-light">Comprehensive AI analysis of your visual language.</p>
              </div>
              <Button variant="ghost" className="text-[10px] uppercase tracking-widest font-bold text-amber-500 bg-amber-500/5 hover:bg-amber-500/10 h-10 px-6 rounded-full border border-amber-500/10">
                Full Report <ArrowRight className="ml-2 w-3 h-3" />
              </Button>
            </div>

            <div className="grid md:grid-cols-4 gap-12 mt-12">
              <div className="md:col-span-1 flex flex-col items-center justify-center space-y-4">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-zinc-800" />
                    <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="377" strokeDashoffset="377" strokeLinecap="round" className="text-amber-500 transition-all duration-1000" style={{ strokeDashoffset: 377 - (377 * 0.94) }} />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-serif text-white">94</span>
                    <span className="text-[8px] uppercase tracking-widest text-zinc-500 font-bold">Score</span>
                  </div>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Overall Quality</p>
              </div>

              <div className="md:col-span-3 grid grid-cols-2 gap-8">
                {[
                  { label: "Composition Quality", val: "Superior", pct: "92%" },
                  { label: "Storytelling Strength", val: "Exceptional", pct: "96%" },
                  { label: "Market Readiness", val: "High", pct: "89%" },
                  { label: "Color Science", val: "Signature", pct: "94%" },
                ].map((m) => (
                  <div key={m.label} className="space-y-3">
                    <div className="flex justify-between items-end">
                      <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{m.label}</p>
                      <span className="text-sm font-serif text-white">{m.val}</span>
                    </div>
                    <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: m.pct }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-amber-500/50" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 mt-12 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#141414] bg-zinc-800 animate-pulse" />
                ))}
              </div>
              <p className="text-xs text-zinc-500 font-light">AI compared your work against <span className="text-white font-medium">12k+ editorial standard shots</span>.</p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-emerald-500 text-[10px] font-bold uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> 
              Intelligence Sync Active
            </div>
          </div>
        </GlassCard>

        {/* SECTION 2 — CLIENT LEADS (4x12) */}
        <GlassCard className="lg:col-span-4 p-10 flex flex-col justify-between" delay={0.3}>
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-serif italic text-white">Client Leads</h2>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-500">
                <Mail size={14} />
              </div>
            </div>

            <div className="space-y-6">
              {[
                { name: "Vogue Italia", type: "Editorial Shoot", status: "New", time: "2h ago" },
                { name: "Luxe Media", type: "Commercial Campaign", status: "Pending", time: "5h ago" },
                { name: "Sotheby's", type: "Fine Art Inquiry", status: "Active", time: "1d ago" },
              ].map((lead, i) => (
                <div key={i} className="group/item flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-500 group-hover/item:text-amber-500 transition-colors">
                      {lead.name.charAt(0)}
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-white">{lead.name}</p>
                      <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">{lead.type}</p>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <span className={`text-[8px] uppercase tracking-widest font-black px-2 py-1 rounded-md ${
                      lead.status === 'New' ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-zinc-400'
                    }`}>{lead.status}</span>
                    <p className="text-[10px] text-zinc-700 font-medium">{lead.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button variant="ghost" className="w-full mt-8 h-12 rounded-2xl border border-white/5 text-zinc-500 hover:text-white hover:bg-white/5 text-[10px] uppercase tracking-widest font-bold">
            View All Inquiries
          </Button>
        </GlassCard>

        {/* SECTION 3 — MARKETPLACE PERFORMANCE (4x12) */}
        <GlassCard className="lg:col-span-4 p-10 space-y-8" delay={0.4}>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-serif italic text-white">Marketplace</h2>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-500">
              <Globe size={14} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <StatCard label="Visibility" value="Top 5%" icon={Search} color="text-amber-500" />
            <StatCard label="Impressions" value="12.4k" icon={Sparkles} color="text-indigo-500" />
            <StatCard label="Saves" value="482" icon={Star} color="text-rose-500" />
            <StatCard label="Conversion" value="3.2%" icon={CheckCircle2} color="text-emerald-500" />
          </div>

          <div className="pt-6 border-t border-white/5">
            <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-zinc-600">
              <span>Weekly Trend</span>
              <span className="text-emerald-500">+18%</span>
            </div>
            <div className="mt-4 h-16 flex items-end gap-1">
              {[40, 60, 45, 70, 55, 80, 95].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: 0.6 + (i * 0.05) }}
                  className="flex-1 bg-amber-500/20 rounded-t-sm hover:bg-amber-500/40 transition-colors"
                />
              ))}
            </div>
          </div>
        </GlassCard>

        {/* SECTION 4 — ACTIVE PROJECTS (8x12) */}
        <GlassCard className="lg:col-span-8 p-10 flex flex-col justify-between" delay={0.5}>
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-serif italic text-white">Active Projects</h2>
              <div className="flex gap-2">
                <button className="p-2 rounded-full border border-white/5 text-zinc-500 hover:text-white transition-colors">
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Velvet Hour Editorial", client: "Vogue Italia", due: "May 24", progress: 75, img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400" },
                { title: "Midnight Circuit", client: "Tesla Motors", due: "June 02", progress: 30, img: "https://images.unsplash.com/photo-1542204113-e9352628619f?auto=format&fit=crop&q=80&w=400" },
              ].map((proj, i) => (
                <div key={i} className="group/proj p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-amber-500/20 transition-all duration-500 space-y-6">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden grayscale group-hover/proj:grayscale-0 transition-all duration-700">
                      <img src={proj.img} alt={proj.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="text-[8px] uppercase tracking-widest text-amber-500 font-bold">{proj.client}</p>
                      <h3 className="text-lg font-serif text-white">{proj.title}</h3>
                      <div className="flex items-center gap-3 text-zinc-500">
                        <Clock size={10} />
                        <span className="text-[10px] font-medium tracking-widest">DUE {proj.due.toUpperCase()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[8px] uppercase tracking-widest font-black text-zinc-600">
                      <span>Delivery Status</span>
                      <span className="text-zinc-400">{proj.progress}%</span>
                    </div>
                    <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${proj.progress}%` }} transition={{ duration: 1.5, delay: 0.8 }} className="h-full bg-amber-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 mt-8 flex justify-between items-center">
            <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Total Projects: 12 Active</p>
            <Button variant="ghost" className="text-zinc-500 hover:text-white group text-[10px] uppercase tracking-widest font-bold">
              Full Project View <ChevronRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </GlassCard>

        {/* SECTION 5 — CREATOR ANALYTICS (FULL WIDTH 12x12) */}
        <GlassCard className="lg:col-span-12 p-12 space-y-12" delay={0.6}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-serif italic text-white">Creator Analytics</h2>
              <p className="text-sm text-zinc-500 font-light">Advanced performance mapping and audience engagement trends.</p>
            </div>
            <div className="flex items-center gap-4">
              {['7D', '30D', '90D', '1Y'].map(t => (
                <button key={t} className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/5 transition-all ${
                  t === '30D' ? 'bg-amber-500 text-black border-amber-500' : 'text-zinc-500 hover:text-zinc-300'
                }`}>{t}</button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 h-64 relative">
              {/* Complex SVG Graph (Decorative Placeholder) */}
              <svg className="w-full h-full text-amber-500/20" viewBox="0 0 1000 200" preserveAspectRatio="none">
                <path d="M0,150 C100,140 200,180 300,100 C400,20 500,120 600,80 C700,40 800,150 900,60 C950,20 1000,40 1000,40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="1000" strokeDashoffset="1000">
                  <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="2s" fill="freeze" />
                </path>
                <path d="M0,150 C100,140 200,180 300,100 C400,20 500,120 600,80 C700,40 800,150 900,60 C950,20 1000,40 1000,40 L1000,200 L0,200 Z" fill="currentColor" opacity="0.1" />
              </svg>
              
              {/* Overlay stats */}
              <div className="absolute inset-0 flex items-center justify-around pointer-events-none">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="h-full w-px bg-white/[0.03]" />
                ))}
              </div>
            </div>

            <div className="lg:col-span-1 space-y-8">
              <div className="p-6 rounded-[2rem] bg-amber-500/5 border border-amber-500/10 space-y-4">
                <div className="flex items-center gap-3 text-amber-500">
                  <Sparkles size={18} />
                  <p className="text-[10px] uppercase tracking-widest font-black">AI Recommendation</p>
                </div>
                <p className="text-sm font-serif text-zinc-100 leading-relaxed italic">
                  "Your urban street photography is trending. Increasing visibility in ‘Cyberpunk’ and ‘High-Contrast’ categories will boost impressions by 24%."
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-zinc-600">
                  <span>Audience Growth</span>
                  <span className="text-emerald-500">+4.2k</span>
                </div>
                <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "65%" }} transition={{ duration: 1.5, delay: 1 }} className="h-full bg-emerald-500/50" />
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* AMBIENT GLOWS */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] -z-10 rounded-full pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] -z-10 rounded-full pointer-events-none" />
    </div>
  )
}
