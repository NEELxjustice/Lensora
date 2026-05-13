"use client"

import { PageHeader } from "@/components/ui/PageHeader"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-8 py-32 min-h-screen">
      <PageHeader 
        title="Our Vision" 
        subtitle="Lensora is the intersection of high-end photography and advanced artificial intelligence."
      />
      
      <div className="grid md:grid-cols-2 gap-20 items-center mt-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-serif text-zinc-900 dark:text-zinc-100">Redefining the Creative Process</h3>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
            Founded by a collective of photographers and AI researchers, Lensora was born from a simple question: How can technology amplify human creativity without replacing it?
          </p>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
            We believe the future of photography isn't just about megapixels—it's about intelligence. Our platform provides the data-driven insights creators need to refine their craft and reach new heights.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="aspect-square bg-zinc-100 dark:bg-zinc-900 rounded-[3rem] overflow-hidden relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <img 
            src="https://images.unsplash.com/photo-1452723312111-3a7d0db0e024?auto=format&fit=crop&q=80&w=800" 
            alt="Photography" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
          />
        </motion.div>
      </div>
    </div>
  )
}
