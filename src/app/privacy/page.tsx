"use client"

import { PageHeader } from "@/components/ui/PageHeader"

export default function PrivacyPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-8 py-32 min-h-screen">
      <PageHeader 
        title="Privacy Policy" 
        subtitle="How we handle your data and creative assets."
      />
      
      <div className="max-w-3xl space-y-12 mt-20 text-zinc-500 dark:text-zinc-400 font-light leading-relaxed text-lg">
        <section className="space-y-4">
          <h3 className="text-xl font-serif text-zinc-900 dark:text-zinc-100">1. Data Collection</h3>
          <p>
            We collect information you provide directly to us when you create an account, upload photos for analysis, or communicate with us. This includes your name, email address, and the metadata associated with your visual assets.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-serif text-zinc-900 dark:text-zinc-100">2. Asset Security</h3>
          <p>
            Your photos are yours. We use advanced encryption to protect your work and ensure that our AI analysis remains private and secure. We do not sell your creative data to third parties.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-serif text-zinc-900 dark:text-zinc-100">3. AI Training</h3>
          <p>
            We only use anonymized, aggregated data to improve our analysis models. Your specific creative choices and private works are never used for training without your explicit consent.
          </p>
        </section>

        <div className="pt-20 border-t border-zinc-100 dark:border-white/5 text-sm uppercase tracking-widest font-bold">
          Last Updated: May 2024
        </div>
      </div>
    </div>
  )
}
