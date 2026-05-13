"use client"

import { PageHeader } from "@/components/ui/PageHeader"
import { EmptyState } from "@/components/ui/EmptyState"
import { PenTool } from "lucide-react"

export default function JournalPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-8 py-32 min-h-screen">
      <PageHeader 
        title="The Journal" 
        subtitle="Stories, interviews, and technical deep-dives for the modern visual creator."
      />
      <EmptyState 
        icon={PenTool}
        title="Editorial Desk is Active"
        description="Our first issue is currently being curated. We're gathering insights from world-class creators to share with the Lensora community."
        actionText="Back to Home"
        actionHref="/"
      />
    </div>
  )
}
