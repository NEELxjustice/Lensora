"use client"

import { PageHeader } from "@/components/ui/PageHeader"
import { EmptyState } from "@/components/ui/EmptyState"
import { Briefcase } from "lucide-react"

export default function PortfolioPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-8 py-32 min-h-screen">
      <PageHeader 
        title="Elite Portfolios" 
        subtitle="A curated showcase of professional work powered by Lensora intelligence."
      />
      <EmptyState 
        icon={Briefcase}
        title="Portfolio Builder Coming Soon"
        description="We're designing a high-end portfolio system that automatically highlights your best work using AI analysis. Stay tuned."
        actionText="Back to Home"
        actionHref="/"
      />
    </div>
  )
}
