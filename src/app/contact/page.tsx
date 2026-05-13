"use client"

import { PageHeader } from "@/components/ui/PageHeader"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Globe } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-8 py-32 min-h-screen">
      <PageHeader 
        title="Get in Touch" 
        subtitle="Have questions about our ecosystem? We're here to help you navigate the future of creativity."
      />
      
      <div className="grid md:grid-cols-3 gap-8 mt-20">
        {[
          { icon: Mail, label: "Email Us", val: "concierge@lensora.ai" },
          { icon: MessageSquare, label: "Support", val: "Chat with an Agent" },
          { icon: Globe, label: "Location", val: "Worldwide / Remote" }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-10 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 space-y-6 group hover:border-amber-500/30 transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center text-amber-500 shadow-sm group-hover:scale-110 transition-transform">
              <item.icon size={20} />
            </div>
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">{item.label}</p>
              <p className="text-xl font-serif text-zinc-900 dark:text-zinc-100">{item.val}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto mt-32 text-center space-y-10">
        <h3 className="text-3xl font-serif text-zinc-900 dark:text-zinc-100">Send us a Message</h3>
        <div className="grid gap-6">
          <input className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 rounded-2xl p-4 focus:outline-none focus:border-amber-500/50 transition-colors" placeholder="Name" />
          <input className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 rounded-2xl p-4 focus:outline-none focus:border-amber-500/50 transition-colors" placeholder="Email" />
          <textarea rows={4} className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 rounded-2xl p-4 focus:outline-none focus:border-amber-500/50 transition-colors" placeholder="Message" />
        </div>
        <Button className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 h-16 px-12 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-xl">
          Send Inquiry
        </Button>
      </div>
    </div>
  )
}
