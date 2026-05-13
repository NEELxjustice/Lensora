"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="w-14 h-7" />

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-between w-14 h-7 px-1 rounded-full bg-white/10 dark:bg-zinc-800/30 backdrop-blur-md border border-white/20 dark:border-white/10 hover:border-amber-500/30 shadow-lg cursor-pointer transition-all duration-500 overflow-hidden group"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Indicator/Toggle Knob */}
      <motion.div
        className="absolute left-1 w-5 h-5 rounded-full bg-white dark:bg-amber-500 shadow-md flex items-center justify-center z-10"
        initial={false}
        animate={{
          x: isDark ? 28 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <Moon className="w-3 h-3 text-zinc-900" strokeWidth={2.5} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <Sun className="w-3 h-3 text-amber-600" strokeWidth={2.5} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Background Icons (Subtle) */}
      <div className="flex w-full justify-around items-center opacity-30 px-1">
        <Sun className="w-3 h-3 text-amber-600" />
        <Moon className="w-3 h-3 text-white" />
      </div>

      {/* Light Sweep Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
        animate={{
          translateX: ["-100%", "200%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 2
        }}
      />
    </button>
  )
}
