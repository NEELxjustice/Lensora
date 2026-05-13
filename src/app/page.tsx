"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Camera, Sparkles, Trophy, Users, Maximize2, Crosshair, Aperture, CheckCircle2, Search, ArrowUpRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { InteractiveBackground } from "@/components/InteractiveBackground"
import { StatsCard } from "@/components/StatsCard"
import { FeatureCard } from "@/components/FeatureCard"
import { ThemeToggle } from "@/components/ThemeToggle"

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={containerRef} className="min-h-screen bg-[#fafaf9] dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 selection:bg-amber-500/30 selection:text-amber-900 overflow-x-hidden noise-bg font-sans transition-colors duration-700">
      <InteractiveBackground />
      
      {/* Navigation */}
      <nav className="fixed w-full z-[100] px-8 py-8 transition-all duration-500">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="text-2xl font-serif tracking-tighter flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full border-2 border-amber-500/50 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              </div>
              <span className="font-bold">Lensora</span>
            </Link>
            
            <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              {[
                { name: "Features", href: "/features" },
                { name: "Analyzer", href: "/dashboard/beginner/analyzer" },
                { name: "Marketplace", href: "/marketplace" },
                { name: "Creators", href: "/creators" },
                { name: "Resources", href: "/resources" }
              ].map((item) => (
                <Link key={item.name} href={item.href} className="hover:text-amber-600 transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <ThemeToggle />
            <Link href="/login" className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Sign In
            </Link>
            <Button render={<Link href="/login" />} className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 px-8 h-12 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-black/10 transition-colors duration-500">
              Join Lensora
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[110vh] pt-32 flex flex-col items-center">
        <div className="max-w-[1400px] mx-auto w-full px-8 relative z-20 pb-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-10 max-w-xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-amber-50 border border-amber-100/50 text-[10px] uppercase tracking-[0.25em] text-amber-600 font-bold"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI-Powered Ecosystem for Photographers</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-7xl md:text-8xl font-serif leading-[1.05] tracking-tight text-zinc-900"
              >
                Where Photography Meets <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Intelligence.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-xl text-zinc-500 font-light leading-relaxed tracking-wide"
              >
                Analyze your work. Elevate your portfolio. Connect with clients. Grow your creative career in one intelligent ecosystem.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <Button render={<Link href="/login" />} className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 h-16 px-10 rounded-full text-xs font-bold uppercase tracking-[0.2em] group shadow-xl shadow-black/10 w-full sm:w-auto transition-colors duration-500">
                  Analyze My Portfolio <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button render={<Link href="/marketplace" />} variant="ghost" className="h-16 px-10 rounded-full text-xs font-bold uppercase tracking-[0.2em] border border-zinc-200 dark:border-white/10 bg-white dark:bg-transparent hover:bg-zinc-50 dark:hover:bg-white/5 text-zinc-600 dark:text-zinc-400 w-full sm:w-auto transition-all">
                  Explore Creators
                </Button>
              </motion.div>
            </div>

            {/* Right Content - Visuals */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="relative z-10"
              >
                <div className="relative aspect-square max-w-[600px] ml-auto">
                  <img 
                    src="/hero-lens.png" 
                    alt="Leica Lens" 
                    className="w-full h-full object-contain drop-shadow-[0_50px_100px_rgba(0,0,0,0.15)]"
                  />
                  
                  {/* Floating Stats Cards */}
                  <StatsCard 
                    title="AI Composition Score" 
                    value="92" 
                    suffix="/100" 
                    className="absolute -top-10 -right-4 z-20 hidden md:block" 
                  />
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute bottom-20 -left-12 z-20 hidden md:block"
                  >
                    <div className="bg-zinc-900 text-white p-6 rounded-3xl shadow-2xl space-y-3 w-64">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Storytelling Impact</div>
                      <div className="text-2xl font-serif text-emerald-400">Excellent</div>
                      <div className="h-8 w-full">
                        <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                          <path d="M 0 15 Q 25 5, 50 15 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Decorative Background Glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-200/20 blur-[150px] -z-10 rounded-full" />
            </div>
          </div>
        </div>

        {/* Feature Grid Section */}
        <div className="w-full max-w-[1400px] mx-auto px-8 -mt-32 pb-32 relative z-30">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Camera className="w-6 h-6" />}
              title="AI Portfolio Analysis"
              description="Get detailed feedback on composition, lighting, and storytelling patterns."
            />
            <FeatureCard 
              icon={<Sparkles className="w-6 h-6" />}
              title="Smart Recommendations"
              description="Personalized tips to improve your craft based on your unique style."
            />
            <FeatureCard 
              icon={<Trophy className="w-6 h-6" />}
              title="Creator Marketplace"
              description="Connect with premium brands and high-end commercial clients."
            />
            <FeatureCard 
              icon={<Users className="w-6 h-6" />}
              title="Growth & Insights"
              description="Track your progress, visibility, and audience engagement metrics."
            />
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-40 bg-[#fafaf9] dark:bg-[#050505] overflow-hidden transition-colors duration-700">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-end">
            <div className="lg:w-1/3 space-y-8">
              <div className="inline-flex items-center gap-3 text-amber-600 font-bold text-[10px] uppercase tracking-widest">
                <div className="w-8 h-px bg-amber-500" />
                How It Works
              </div>
              <h2 className="text-6xl font-serif tracking-tight leading-tight text-zinc-900 dark:text-zinc-100">
                Your Creative Journey, <br />
                <span className="text-zinc-400 dark:text-zinc-500">Supercharged by AI.</span>
              </h2>
            </div>
            
            <div className="lg:w-2/3 grid md:grid-cols-3 gap-12">
              {[
                { 
                  num: "01", 
                  title: "Upload Your Work", 
                  desc: "Upload your photos and build your high-end digital portfolio.",
                  href: "/portfolio"
                },
                { 
                  num: "02", 
                  title: "Get AI Feedback", 
                  desc: "Receive in-depth AI analysis and actionable insights on every shot.",
                  href: "/dashboard/beginner/analyzer"
                },
                { 
                  num: "03", 
                  title: "Grow & Connect", 
                  desc: "Improve, get discovered, and connect with elite global clients.",
                  href: "/marketplace"
                }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="space-y-6 relative group"
                >
                  <div className="text-8xl font-serif text-zinc-50 dark:text-zinc-900/50 absolute -top-12 -left-4 group-hover:text-amber-50 dark:group-hover:text-amber-900/10 transition-colors duration-500 -z-10 select-none">
                    {step.num}
                  </div>
                  <h4 className="text-2xl font-serif text-zinc-900 dark:text-zinc-100 pt-8">{step.title}</h4>
                  <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                    {step.desc}
                  </p>
                  <Link href={step.href} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-amber-600 hover:text-amber-700">
                    Learn More <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-8 bg-[#fafaf9] dark:bg-[#050505] transition-colors duration-700 relative overflow-hidden">
        {/* Large Background Logo */}
        <div className="absolute -bottom-20 -left-20 text-[20vw] font-serif font-bold text-zinc-900/[0.02] dark:text-white/[0.01] pointer-events-none select-none">
          Lensora.
        </div>

        <div className="max-w-[1400px] mx-auto space-y-20 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-20">
            <div className="space-y-8 max-w-sm">
              <div className="text-3xl font-serif tracking-tighter font-bold text-zinc-900 dark:text-zinc-100">Lensora.</div>
              <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                Empowering the next generation of visual storytellers through advanced technology and exclusive opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
              <div className="space-y-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-900 dark:text-zinc-100">Platform</div>
                <div className="flex flex-col gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                  <Link href="/portfolio" className="hover:text-amber-600 transition-colors">Portfolio</Link>
                  <Link href="/dashboard/beginner/analyzer" className="hover:text-amber-600 transition-colors">Analyzer</Link>
                  <Link href="/marketplace" className="hover:text-amber-600 transition-colors">Marketplace</Link>
                </div>
              </div>
              <div className="space-y-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-900 dark:text-zinc-100">Company</div>
                <div className="flex flex-col gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                  <Link href="/about" className="hover:text-amber-600 transition-colors">About Us</Link>
                  <Link href="/journal" className="hover:text-amber-600 transition-colors">Journal</Link>
                  <Link href="/contact" className="hover:text-amber-600 transition-colors">Contact</Link>
                </div>
              </div>
              <div className="space-y-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-900 dark:text-zinc-100">Follow</div>
                <div className="flex flex-col gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors">Instagram</a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors">Twitter</a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-20 border-t border-zinc-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
            <div>&copy; 2024 Lensora. All rights reserved.</div>
            <div className="flex gap-8">
              <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Terms of Service</Link>
            </div>
            <div className="text-zinc-300 dark:text-zinc-700">EST. 2024 / WORLDWIDE</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
