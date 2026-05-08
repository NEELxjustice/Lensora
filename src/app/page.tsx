"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Camera, Sparkles, Trophy, Users, Maximize2, Crosshair, Aperture } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { InteractiveBackground } from "@/components/InteractiveBackground"
import { ThreeDLens } from "@/components/ThreeDLens"
import { TiltCard } from "@/components/TiltCard"

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const lensScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.5])
  const lensOpacity = useTransform(scrollYProgress, [0, 0.2], [0.3, 0])

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden noise-bg">
      <InteractiveBackground />
      
      {/* Cinematic Viewfinder Overlay (Fixed) */}
      <div className="fixed inset-0 pointer-events-none z-50 border-[20px] border-[#050505] opacity-20 hidden md:block">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-zinc-700/50" />
          <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-zinc-700/50" />
          <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-zinc-700/50" />
          <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-zinc-700/50" />
        </motion.div>
        
        {/* Exposure Scale Mock */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col items-end gap-1 text-[8px] text-zinc-800 font-mono">
          {[2, 1, 0, -1, -2].map(n => (
            <div key={n} className="flex items-center gap-2">
              <span>{n > 0 ? `+${n}` : n}</span>
              <div className={`h-px ${n === 0 ? "w-4 bg-zinc-600" : "w-2 bg-zinc-800"}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-[60] px-6 py-8">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-serif tracking-tighter flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full border-2 border-amber-500/50 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            Lensora
          </motion.div>
          
          <div className="hidden md:flex items-center gap-10 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            {["Gallery", "Intelligence", "Market", "Journal"].map((item) => (
              <Link key={item} href="#" className="hover:text-white transition-colors">
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button render={<Link href="/login" />} variant="ghost" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white">
              Sign In
            </Button>
            <Button render={<Link href="/login" />} className="bg-white text-black hover:bg-zinc-200 px-6 rounded-full text-xs uppercase tracking-widest font-bold">
              Join
            </Button>
          </div>
        </div>
      </nav>

      {/* Immersive Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/hero.png" 
            alt="Hero Cinematic" 
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* 3D Floating Lens Background Element */}
        <motion.div 
          style={{ scale: lensScale, opacity: lensOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
        >
          <ThreeDLens />
        </motion.div>
        
        <div className="relative z-20 text-center space-y-12 max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold">
              <Aperture className="w-3 h-3" />
              <span>Redefining Visual Storytelling</span>
            </div>
            <h1 className="text-7xl md:text-[10rem] font-serif leading-[0.85] tracking-tighter text-white">
              Lensora <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">Visuals</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto font-light leading-relaxed tracking-wide"
          >
            The ultimate ecosystem for the modern photographer. Analyze with AI. Showcase with prestige. Connect with the elite.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <Button render={<Link href="/login" />} size="lg" className="h-16 px-10 text-xs uppercase tracking-[0.2em] bg-amber-500 hover:bg-amber-600 text-black font-bold group rounded-full shadow-[0_0_30px_rgba(245,158,11,0.2)]">
              Enter Analyzer <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button render={<Link href="/marketplace" />} size="lg" variant="ghost" className="h-16 px-10 text-xs uppercase tracking-[0.2em] border border-white/10 hover:bg-white/5 text-white rounded-full">
              Explore Market
            </Button>
          </motion.div>
        </div>

        {/* Hero Metadata - Photographer Friendly */}
        <div className="absolute bottom-12 left-12 z-20 hidden lg:flex flex-col gap-4">
          <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            <div className="flex flex-col">
              <span className="text-zinc-700">Shutter</span>
              <span className="text-zinc-300">1/4000</span>
            </div>
            <div className="w-px h-8 bg-zinc-800" />
            <div className="flex flex-col">
              <span className="text-zinc-700">Aperture</span>
              <span className="text-zinc-300">f/1.8</span>
            </div>
            <div className="w-px h-8 bg-zinc-800" />
            <div className="flex flex-col">
              <span className="text-zinc-700">ISO</span>
              <span className="text-zinc-300">100</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - 3D Tilt Style */}
      <section id="intelligence" className="relative py-32 px-6">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900/50 border border-zinc-900 overflow-hidden">
          {[
            { 
              title: "Computer Vision", 
              desc: "Deep analysis of focal points, dynamic range, and tonal balance.",
              icon: Crosshair,
              color: "text-blue-500"
            },
            { 
              title: "Cinematic Showcase", 
              desc: "A portfolio experience that feels like an editorial magazine.",
              icon: Maximize2,
              color: "text-amber-500"
            },
            { 
              title: "Elite Network", 
              desc: "Direct pipeline to luxury brands and commercial opportunities.",
              icon: Users,
              color: "text-emerald-500"
            }
          ].map((feat, i) => (
            <TiltCard key={i} className="bg-[#050505]">
              <motion.div 
                whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                className="p-16 space-y-8 h-full transition-colors relative group"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <feat.icon className={`w-8 h-8 ${feat.color}`} style={{ transform: "translateZ(30px)" }} />
                <div className="space-y-4" style={{ transform: "translateZ(20px)" }}>
                  <h3 className="text-3xl font-serif tracking-tight">{feat.title}</h3>
                  <p className="text-zinc-500 font-light leading-relaxed text-lg">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-zinc-900">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-3xl font-serif tracking-tighter text-white">Lensora.</div>
          <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold">
            <Link href="#" className="hover:text-white transition-colors">Legal</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-700 font-mono">
            EST. 2024 / WORLDWIDE
          </div>
        </div>
      </footer>
    </div>
  )
}
