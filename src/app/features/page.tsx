"use client"

import { PageHeader } from "@/components/ui/PageHeader"
import { EmptyState } from "@/components/ui/EmptyState"
import { Layout } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-8 py-32 min-h-screen">
      <PageHeader 
        title="Platform Features" 
        subtitle="Explore the sophisticated tools designed to elevate your visual storytelling."
      />
      <EmptyState 
        icon={Layout}
        title="Feature Roadmap in Progress"
        description="We are currently refining our advanced AI tools. From cinematic composition analysis to automated marketplace matching, excellence is coming soon."
        actionText="Back to Home"
        actionHref="/"
      />
    </div>
  )
}
