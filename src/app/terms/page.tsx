"use client"

import { PageHeader } from "@/components/ui/PageHeader"

export default function TermsPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-8 py-32 min-h-screen">
      <PageHeader 
        title="Terms of Service" 
        subtitle="The legal framework for the Lensora ecosystem."
      />
      
      <div className="max-w-3xl space-y-12 mt-20 text-zinc-500 dark:text-zinc-400 font-light leading-relaxed text-lg">
        <section className="space-y-4">
          <h3 className="text-xl font-serif text-zinc-900 dark:text-zinc-100">1. Acceptance of Terms</h3>
          <p>
            By accessing or using the Lensora platform, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you may not use our services.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-serif text-zinc-900 dark:text-zinc-100">2. Creative Rights</h3>
          <p>
            You retain full ownership of all visual content you upload to Lensora. You grant Lensora a limited license to process and analyze your work for the sole purpose of providing our services to you.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-serif text-zinc-900 dark:text-zinc-100">3. Pro Account Usage</h3>
          <p>
            Professional accounts are for verified individual creators or small studios. Redistribution or resale of Lensora AI analysis outputs is strictly prohibited without a separate commercial license.
          </p>
        </section>

        <div className="pt-20 border-t border-zinc-100 dark:border-white/5 text-sm uppercase tracking-widest font-bold">
          Last Updated: May 2024
        </div>
      </div>
    </div>
  )
}
