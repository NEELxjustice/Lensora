"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export function PageHeader({ title, subtitle, centered = false }: PageHeaderProps) {
  return (
    <div className={`space-y-4 mb-12 ${centered ? "text-center" : ""}`}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl font-serif text-zinc-900 dark:text-zinc-100 tracking-tight"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-zinc-500 dark:text-zinc-400 font-light max-w-2xl"
          style={{ margin: centered ? "1rem auto 0" : "1rem 0 0" }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: 60 }}
        className={`h-0.5 bg-amber-500/50 mt-6 ${centered ? "mx-auto" : ""}`}
      />
    </div>
  )
}
