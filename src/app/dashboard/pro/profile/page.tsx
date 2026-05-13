"use client"

import { PageHeader } from "@/components/ui/PageHeader"
import { motion } from "framer-motion"
import { User, ShieldCheck, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProProfilePage() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        <PageHeader 
          title="Professional Identity" 
          subtitle="Manage how you appear to elite brands and clients in the Lensora ecosystem."
        />
        <Button className="bg-amber-500 hover:bg-amber-600 text-white h-12 px-8 rounded-full text-xs font-bold uppercase tracking-widest mb-12">
          Edit Profile
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1 p-8 rounded-[2.5rem] bg-zinc-900 text-white space-y-8"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-32 h-32 rounded-full bg-zinc-800 border-4 border-zinc-700 flex items-center justify-center relative">
              <User size={48} className="text-zinc-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-amber-500 rounded-full border-4 border-zinc-900 flex items-center justify-center">
                <ShieldCheck size={14} className="text-white" />
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-serif">Pro Creator</h3>
              <p className="text-[10px] uppercase tracking-widest text-amber-500 font-bold">Verified Professional</p>
            </div>
          </div>

          <div className="space-y-4 pt-8 border-t border-zinc-800">
            <div className="flex items-center gap-3 text-zinc-400 text-sm">
              <MapPin size={16} /> <span>New York, USA</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-400 text-sm">
              <ExternalLink size={16} /> <span>portfolio.lensora.ai</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 p-10 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 space-y-10"
        >
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Portfolio Preview</h4>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square bg-zinc-50 dark:bg-zinc-800 rounded-2xl animate-pulse" />
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-10 border-t border-zinc-100 dark:border-white/5">
            <h4 className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Creative Bio</h4>
            <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed italic">
              "No bio added yet. Tell the world about your unique creative perspective and technical mastery."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
