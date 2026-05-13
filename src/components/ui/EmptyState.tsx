"use client"

import { motion } from "framer-motion"
import { LucideIcon, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description: string
  actionText?: string
  actionHref?: string
}

export function EmptyState({ icon: Icon, title, description, actionText, actionHref }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-20 h-20 rounded-3xl bg-zinc-900/5 dark:bg-white/5 flex items-center justify-center mb-8 relative group"
      >
        <Icon className="w-10 h-10 text-zinc-400 dark:text-zinc-500 group-hover:text-amber-500 transition-colors duration-500" />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-2 -right-2"
        >
          <Sparkles className="w-5 h-5 text-amber-500/50" />
        </motion.div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl font-serif text-zinc-900 dark:text-zinc-100 mb-4"
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-zinc-500 dark:text-zinc-400 font-light max-w-md leading-relaxed mb-10"
      >
        {description}
      </motion.p>

      {actionText && actionHref && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button render={<Link href={actionHref} />} className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 h-14 px-8 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-all shadow-xl shadow-black/10">
            {actionText}
          </Button>
        </motion.div>
      )}
    </div>
  )
}
