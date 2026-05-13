"use client"

import { PageHeader } from "@/components/ui/PageHeader"
import { EmptyState } from "@/components/ui/EmptyState"
import { BookOpen } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-8 py-32 min-h-screen">
      <PageHeader 
        title="Knowledge Base" 
        subtitle="Insights, tutorials, and deep-dives into the future of creative technology."
      />
      <EmptyState 
        icon={BookOpen}
        title="Curating Knowledge"
        description="Our editorial team is currently preparing the first wave of Lensora Insights. Check back soon for exclusive content on AI-driven creativity."
        actionText="Back to Home"
        actionHref="/"
      />
    </div>
  )
}
