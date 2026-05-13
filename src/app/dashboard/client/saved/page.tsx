"use client"

import { PageHeader } from "@/components/ui/PageHeader"
import { EmptyState } from "@/components/ui/EmptyState"
import { Heart } from "lucide-react"

export default function SavedProsPage() {
  return (
    <div className="space-y-12">
      <PageHeader 
        title="Saved Creators" 
        subtitle="Keep track of the talent that resonates with your brand's vision."
      />
      
      <EmptyState 
        icon={Heart}
        title="No Saved Creators Yet"
        description="Explore the Lensora Marketplace to find elite photographers and filmmakers for your next project. Save them here for easy access."
        actionText="Explore Marketplace"
        actionHref="/marketplace"
      />
    </div>
  )
}
