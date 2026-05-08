"use client"

import { selectUserRole } from "./actions"
import { motion } from "framer-motion"
import { Camera, Briefcase, Users, ArrowRight } from "lucide-react"

const roles = [
  {
    id: "BEGINNER",
    title: "Aspiring Creator",
    description: "I want to upload photos, get AI critiques, and learn how to improve my photography skills.",
    icon: Camera,
    color: "indigo",
    gradient: "from-indigo-500/20 to-purple-500/20",
    border: "group-hover:border-indigo-500/50",
    accent: "bg-indigo-500",
  },
  {
    id: "PRO",
    title: "Professional",
    description: "I want to build a premium profile, showcase my portfolio, and receive client inquiries.",
    icon: Briefcase,
    color: "amber",
    gradient: "from-amber-500/20 to-orange-500/20",
    border: "group-hover:border-amber-500/50",
    accent: "bg-amber-500",
  },
  {
    id: "CLIENT",
    title: "Client / Brand",
    description: "I am looking to discover, hire, and manage top-tier photography talent for my projects.",
    icon: Users,
    color: "blue",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50",
    accent: "bg-blue-500",
  },
]

export default function OnboardingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] text-zinc-100 p-6 overflow-hidden relative">
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-500/10 blur-[120px] rounded-full" />

      <div className="w-full max-w-6xl p-8 space-y-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
            Welcome to Lensora
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light tracking-wide">
            Choose your path. We'll tailor the entire platform to your creative journey.
          </p>
        </motion.div>

        <form action={selectUserRole} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <motion.button
              key={role.id}
              type="submit"
              name="role"
              value={role.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative text-left p-10 rounded-3xl bg-[#0d0d0d] border border-zinc-800/50 ${role.border} transition-all cursor-pointer shadow-2xl overflow-hidden flex flex-col justify-between min-h-[320px]`}
            >
              {/* Card Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 space-y-6">
                <div className={`w-14 h-14 rounded-2xl ${role.accent}/10 flex items-center justify-center border border-${role.color}-500/20 group-hover:border-${role.color}-500/50 transition-colors`}>
                  <role.icon className={`w-7 h-7 text-${role.color}-400`} />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-medium tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-zinc-400 font-light leading-relaxed group-hover:text-zinc-300 transition-colors">
                    {role.description}
                  </p>
                </div>
              </div>

              <div className="relative z-10 pt-8 flex items-center text-sm font-medium text-zinc-500 group-hover:text-white transition-colors">
                <span>Get Started</span>
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Decorative scale effect */}
              <div className={`absolute -bottom-12 -right-12 w-32 h-32 ${role.accent}/5 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700`} />
            </motion.button>
          ))}
        </form>
      </div>
    </div>
  )
}

