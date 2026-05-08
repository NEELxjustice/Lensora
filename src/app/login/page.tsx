import { signIn } from "@/auth"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-zinc-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-[#111111] rounded-2xl border border-zinc-800 shadow-2xl">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 to-zinc-500">
            Lensora
          </h1>
          <p className="text-sm text-zinc-400">
            The premium platform for serious creators.
          </p>
        </div>

        <div className="pt-6">
          <form
            action={async () => {
              "use server"
              await signIn("google", { redirectTo: "/onboarding" })
            }}
          >
            <Button
              type="submit"
              className="w-full h-12 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-base font-medium transition-all"
            >
              Continue with Google
            </Button>
          </form>
        </div>
        
        <p className="text-xs text-center text-zinc-500 pt-4">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  )
}
