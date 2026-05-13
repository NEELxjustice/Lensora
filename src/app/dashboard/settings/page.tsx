"use client"

import { PageHeader } from "@/components/ui/PageHeader"
import { motion } from "framer-motion"
import { Settings, User, Bell, Lock, Palette } from "lucide-react"

export default function SettingsPage() {
  const sections = [
    { label: "Account Details", icon: User, desc: "Personal information and identity" },
    { label: "Notifications", icon: Bell, desc: "Manage your alerts and updates" },
    { label: "Privacy & Security", icon: Lock, desc: "Data protection and login settings" },
    { label: "Appearance", icon: Palette, desc: "Interface preferences and themes" }
  ]

  return (
    <div className="space-y-12">
      <PageHeader 
        title="Settings" 
        subtitle="Configure your Lensora experience and management preferences."
      />

      <div className="grid gap-6 max-w-4xl">
        {sections.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 flex items-center justify-between group hover:border-amber-500/30 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-amber-500 transition-colors">
                <item.icon size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-serif text-zinc-900 dark:text-zinc-100">{item.label}</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light">{item.desc}</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-amber-500 transition-transform group-hover:translate-x-1">
              <Settings size={14} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
