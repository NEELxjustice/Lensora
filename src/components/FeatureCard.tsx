"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`group p-8 rounded-[2.5rem] bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md border border-white/60 dark:border-white/10 hover:bg-white/80 dark:hover:bg-zinc-900/60 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] ${className}`}
    >
      <div className="space-y-6">
        <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-serif text-zinc-900 dark:text-zinc-100 tracking-tight">{title}</h3>
          <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed text-sm">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
