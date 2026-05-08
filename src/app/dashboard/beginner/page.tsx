import { auth } from "@/auth"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, CheckCircle2, Circle, Camera, Play, Lightbulb } from "lucide-react"

export default async function BeginnerDashboard() {
  const session = await auth()
  const firstName = session?.user?.name?.split(" ")[0] || "Creator"

  const steps = [
    { title: "Analyze your first photo", description: "Upload a shot and get AI feedback.", icon: Camera, status: "pending", href: "/dashboard/beginner/analyzer" },
    { title: "Composition Basics", description: "Watch the introductory lesson on the Rule of Thirds.", icon: Play, status: "locked" },
    { title: "Golden Hour Challenge", description: "Submit a portrait taken during the golden hour.", icon: Sparkles, status: "locked" },
    { title: "Mastering Light", description: "Advanced lesson on dynamic range and shadows.", icon: Lightbulb, status: "locked" },
  ]

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 space-y-16">
      {/* Centered Hero */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Your Photography Journey</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-serif text-zinc-100">
          Hello, {firstName}
        </h1>
        <p className="text-xl text-zinc-400 font-light max-w-xl mx-auto">
          One shot at a time. Follow your personalized path to photography mastery.
        </p>
      </div>

      {/* Journey Path */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-zinc-800" />

        <div className="space-y-12 relative">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start space-x-8 group">
              <div className={`relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl border-2 transition-colors ${
                step.status === "pending" ? "bg-indigo-600 border-indigo-500 text-white" : 
                step.status === "completed" ? "bg-zinc-900 border-green-500 text-green-500" :
                "bg-[#0d0d0d] border-zinc-800 text-zinc-600"
              }`}>
                {step.status === "completed" ? <CheckCircle2 className="w-6 h-6" /> : <step.icon className="w-6 h-6" />}
              </div>

              <div className="flex-1 pt-2 space-y-3">
                <div className="flex items-center space-x-3">
                  <h3 className={`text-2xl font-medium ${step.status === "locked" ? "text-zinc-600" : "text-zinc-100"}`}>
                    {step.title}
                  </h3>
                  {step.status === "locked" && <Circle className="w-4 h-4 text-zinc-800" />}
                </div>
                <p className="text-zinc-400 font-light text-lg max-w-lg leading-relaxed">
                  {step.description}
                </p>
                
                {step.status === "pending" && (
                  <div className="pt-4">
                    <Button render={<Link href={step.href || "#"} />} className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-5 rounded-xl shadow-lg shadow-indigo-600/20">
                      Start Task
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Stats Card - Completely different style */}
      <div className="p-1 w-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 rounded-[2rem]">
        <div className="bg-[#050505] rounded-[1.9rem] p-10 flex flex-col md:flex-row justify-around items-center gap-8">
          {[
            { label: "Points", val: "150" },
            { label: "Rank", val: "#42" },
            { label: "Critiques", val: "0" },
          ].map((s) => (
            <div key={s.label} className="text-center space-y-1">
              <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest">{s.label}</p>
              <p className="text-4xl font-serif text-white">{s.val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


