"use client"

import { PageHeader } from "@/components/ui/PageHeader"
import { EmptyState } from "@/components/ui/EmptyState"
import { Users } from "lucide-react"

export default function CreatorsPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-8 py-32 min-h-screen">
      <PageHeader 
        title="Creator Community" 
        subtitle="Connect with the world's most talented photographers and filmmakers."
      />
      <EmptyState 
        icon={Users}
        title="Community Portal Opening Soon"
        description="Our exclusive creator network is currently by invitation only. We're building a space where elite talent meets premium opportunities."
        actionText="Explore Marketplace"
        actionHref="/marketplace"
      />
    </div>
  )
}
