"use client"

import { PageHeader } from "@/components/ui/PageHeader"
import { motion } from "framer-motion"
import { BarChart3, TrendingUp, Award, Clock } from "lucide-react"

export default function ProgressPage() {
  const stats = [
    { label: "AI Score Avg", val: "84", icon: BarChart3, color: "text-amber-500" },
    { label: "Growth Rate", val: "+12%", icon: TrendingUp, color: "text-emerald-500" },
    { label: "Mastery Level", val: "Level 4", icon: Award, color: "text-blue-500" },
    { label: "Analysis Hours", val: "24.5", icon: Clock, color: "text-purple-500" }
  ]

  return (
    <div className="space-y-12">
      <PageHeader 
        title="Learning Progress" 
        subtitle="Track your evolution as a visual storyteller through AI insights."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-3xl bg-zinc-900/5 dark:bg-white/5 border border-zinc-100 dark:border-white/5 space-y-4"
          >
            <div className={`w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center shadow-sm ${s.color}`}>
              <s.icon size={20} />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">{s.label}</p>
              <p className="text-3xl font-serif text-zinc-900 dark:text-zinc-100">{s.val}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-12 rounded-[2.5rem] bg-zinc-900 text-white overflow-hidden relative"
      >
        <div className="relative z-10 space-y-6">
          <h3 className="text-3xl font-serif">Growth Visualization</h3>
          <p className="text-zinc-400 font-light max-w-xl">
            Our advanced analytics engine is currently processing your last 50 uploads to generate a multi-dimensional growth map.
          </p>
          <div className="h-48 w-full bg-zinc-800/50 rounded-2xl animate-pulse flex items-center justify-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold">Rendering Analysis Engine...</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px]" />
      </motion.div>
    </div>
  )
}
