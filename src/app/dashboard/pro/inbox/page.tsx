"use client"

import { PageHeader } from "@/components/ui/PageHeader"
import { EmptyState } from "@/components/ui/EmptyState"
import { Mailbox } from "lucide-react"

export default function LeadsInboxPage() {
  return (
    <div className="space-y-12">
      <PageHeader 
        title="Leads Inbox" 
        subtitle="Manage your incoming inquiries and commercial opportunities."
      />
      
      <EmptyState 
        icon={Mailbox}
        title="Your Inbox is Empty"
        description="When premium brands and clients inquire about your work, their messages will appear here. Build your portfolio to attract your first lead."
        actionText="Manage Portfolio"
        actionHref="/dashboard/pro/profile"
      />
    </div>
  )
}
