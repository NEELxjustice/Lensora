"use client"

import { motion } from "framer-motion"

interface StatsCardProps {
  title: string
  value: string
  suffix?: string
  trend?: "up" | "down"
  className?: string
}

export const StatsCard = ({ title, value, suffix, className }: StatsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/50 dark:border-white/10 p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] w-56 ${className}`}
    >
      <div className="space-y-4">
        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 font-bold">
          {title}
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-serif text-zinc-900 dark:text-zinc-100">{value}</span>
          {suffix && <span className="text-sm text-zinc-400">{suffix}</span>}
        </div>
        
        {/* Simple Sparkline SVG */}
        <div className="h-12 w-full pt-2">
          <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
            <motion.path
              d="M 0 35 Q 10 25, 20 30 T 40 15 T 60 25 T 80 10 T 100 20"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </motion.div>
  )
}
