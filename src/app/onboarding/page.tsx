"use client"

import React, { useRef } from "react"
import { selectUserRole } from "./actions"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { 
  Camera, 
  Briefcase, 
  Users, 
  Sparkles, 
  Zap, 
  Target, 
  Trophy,
  ArrowRight,
  Search,
  CheckCircle2,
  BarChart3
} from "lucide-react"

// --- Helper Components ---

const TiltCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative transition-all duration-500 ease-out ${className}`}
    >
      {children}
    </motion.div>
  )
}

const FloatingElement = ({ children, delay = 0, duration = 4 }: { children: React.ReactNode, delay?: number, duration?: number }) => (
  <motion.div
    animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
  >
    {children}
  </motion.div>
)

// --- Card Components ---

const OnboardingCard = ({ 
  role, 
  title, 
  description, 
  icon: Icon, 
  accent, 
  features, 
  visuals,
  buttonClass,
  index 
}: any) => {
  return (
    <TiltCard className="group h-full">
      <motion.button
        type="submit"
        name="role"
        value={role}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 + (index * 0.2), ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full text-left p-12 rounded-[2.5rem] bg-[#0d0d0d] border border-white/5 overflow-hidden flex flex-col justify-between min-h-[600px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] group-hover:border-white/10 transition-all duration-700"
      >
        {/* Glow Effects */}
        <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition-all duration-1000 blur-[100px] -z-10`} />
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${accent} opacity-0 group-hover:opacity-100 transition-all duration-700`} />

        {/* Cinematic Visual Elements Area */}
        <div className="absolute top-0 right-0 w-full h-1/2 pointer-events-none overflow-hidden opacity-30 group-hover:opacity-60 transition-opacity duration-1000">
           {visuals}
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-12">
          {/* Icon Header */}
          <div className="flex items-center justify-between">
            <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-all duration-500`}>
              <Icon size={28} className="text-zinc-400 group-hover:text-white" />
            </div>
            <div className="h-px flex-1 mx-6 bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-serif tracking-tight text-white">{title}</h2>
            <p className="text-zinc-500 font-light leading-relaxed max-w-[280px] group-hover:text-zinc-300 transition-colors">
              {description}
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-4 pt-6">
            {features.map((f: string, i: number) => (
              <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-600 group-hover:text-zinc-400 transition-colors">
                <CheckCircle2 size={14} className="text-white/20 group-hover:text-amber-500/50" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Action */}
        <div className="relative z-10 pt-12">
          <div className={`inline-flex items-center justify-center gap-3 w-full h-16 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-500 ${buttonClass}`}>
            Get Started <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Subtle Ambient Refractions */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 blur-[120px] rounded-full group-hover:bg-white/10 transition-all duration-1000" />
      </motion.button>
    </TiltCard>
  )
}

import { useState, useTransition } from "react"
import { AnimatePresence } from "framer-motion"

export default function OnboardingPage() {
  const [isPending, startTransition] = useTransition()
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role)
    const formData = new FormData()
    formData.append("role", role)
    
    startTransition(async () => {
      await selectUserRole(formData)
    })
  }

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 p-8 flex flex-col items-center justify-center relative overflow-hidden noise-bg">
      {/* 1. Cinematic Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-indigo-500/5 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-amber-500/5 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_100%)]" />
      </div>

      {/* 2. Header */}
      <div className="relative z-20 text-center space-y-8 mb-24 max-w-4xl pt-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <h1 className="text-7xl md:text-8xl font-serif tracking-tight leading-tight">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-700 drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]">Lensora</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light tracking-[0.1em] max-w-2xl mx-auto">
            Choose your path. We’ll tailor the platform to your creative journey.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="h-px w-24 bg-amber-500/50 mx-auto"
        />
      </div>

      {/* 3. Grid Container */}
      <div className="relative z-20 w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
        {[
          {
            role: "BEGINNER",
            title: "Aspiring Creator",
            desc: "I want to upload photos, get AI critiques, and improve my photography skills.",
            icon: Sparkles,
            accent: "from-violet-600/20 via-blue-600/10 to-transparent",
            features: ["AI Photo Analysis", "Learning Paths", "Skill Challenges"],
            btn: "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-blue-600/20",
            visuals: (
              <div className="relative h-full w-full">
                <div className="absolute top-10 right-10 flex gap-4">
                   {[1, 2, 3].map(i => (
                     <FloatingElement key={i} delay={i * 0.5}>
                        <div className="w-20 h-24 bg-zinc-800 rounded-xl border border-white/10 overflow-hidden transform -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                           <div className="h-full w-full bg-gradient-to-br from-white/5 to-white/0" />
                        </div>
                     </FloatingElement>
                   ))}
                </div>
              </div>
            )
          },
          {
            role: "PRO",
            title: "Professional",
            desc: "I want to build a premium profile, showcase my portfolio, and attract clients.",
            icon: Camera,
            accent: "from-amber-600/20 via-orange-600/10 to-transparent",
            features: ["Premium Portfolio", "Client Inquiries", "Analytics Suite", "Booking Tools"],
            btn: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-amber-500 hover:text-black group-hover:border-amber-500/50",
            visuals: (
              <div className="relative h-full w-full">
                <FloatingElement delay={1}>
                  <div className="absolute top-10 right-10 w-48 h-48 rounded-full border-[12px] border-zinc-900 shadow-2xl flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full border border-white/5 bg-zinc-950 flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-tr from-amber-500/10 to-transparent" />
                    </div>
                  </div>
                </FloatingElement>
              </div>
            )
          },
          {
            role: "CLIENT",
            title: "Client / Brand",
            desc: "I want to discover, hire, and manage top-tier photography talent.",
            icon: Users,
            accent: "from-cyan-600/20 via-blue-600/10 to-transparent",
            features: ["Discover Talent", "Advanced Search", "Project Management", "Secure Hiring"],
            btn: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-cyan-500 hover:text-black group-hover:border-cyan-500/50",
            visuals: (
              <div className="relative h-full w-full">
                <div className="absolute top-10 right-10 grid grid-cols-2 gap-3">
                   {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden" />
                   ))}
                </div>
              </div>
            )
          }
        ].map((roleData, i) => (
          <div key={roleData.role} onClick={() => handleRoleSelect(roleData.role)}>
            <OnboardingCard 
              index={i}
              role={roleData.role}
              title={roleData.title}
              description={roleData.desc}
              icon={roleData.icon}
              accent={roleData.accent}
              features={roleData.features}
              buttonClass={roleData.btn}
              visuals={roleData.visuals}
            />
          </div>
        ))}
      </div>

      {/* 4. PREPARING WORKSPACE OVERLAY */}
      <AnimatePresence>
        {isPending && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#050505]/90 backdrop-blur-2xl flex flex-col items-center justify-center space-y-12"
          >
            <div className="relative">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 rounded-full border-2 border-white/5 border-t-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.2)]"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Sparkles className="text-amber-500 w-8 h-8" />
              </motion.div>
            </div>
            
            <div className="text-center space-y-4">
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-serif text-white italic"
              >
                Preparing your creative workspace...
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-zinc-500 text-sm uppercase tracking-[0.3em] font-bold"
              >
                Configuring platform for <span className="text-amber-500">{selectedRole}</span> protocol
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] grain-overlay" />
    </div>
  )
}
