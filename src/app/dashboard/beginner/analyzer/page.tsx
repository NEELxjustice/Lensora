"use client"

import { useState } from "react"
import { Upload, ImageIcon, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { analyzePhotoAction } from "./actions"

export default function AnalyzerPage() {
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0]
      setFile(selected)
      setPreviewUrl(URL.createObjectURL(selected))
      setResult(null)
      setError(null)
    }
  }

  const handleAnalyze = async () => {
    if (!file) return

    setLoading(true)
    setError(null)
    
    try {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = async () => {
        try {
          const base64data = reader.result as string
          const analysis = await analyzePhotoAction(base64data)
          setResult(analysis)
        } catch (err: any) {
          console.error(err)
          setError(err.message || "Something went wrong during analysis.")
        } finally {
          setLoading(false)
        }
      }
      reader.onerror = () => {
        setError("Failed to read file.")
        setLoading(false)
      }
    } catch (err: any) {
      console.error(err)
      setError("An unexpected error occurred.")
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-serif">AI Photo Analyzer</h1>
        <p className="text-zinc-400">Get instant feedback on composition, lighting, and intent.</p>
      </div>

      {!result ? (
        <div className="p-8 rounded-2xl bg-[#111111] border border-zinc-800 space-y-6">
          <div className="flex flex-col items-center justify-center w-full h-64 border-2 border-zinc-800 border-dashed rounded-xl bg-[#161616] hover:bg-[#1a1a1a] transition-colors relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            {previewUrl ? (
              <img src={previewUrl} alt="Preview" className="w-full h-full object-contain p-2 rounded-xl" />
            ) : (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 mb-4 text-zinc-500" />
                <p className="mb-2 text-sm text-zinc-400">
                  <span className="font-semibold text-zinc-300">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-zinc-500">JPG, PNG or WEBP (Max 5MB)</p>
              </div>
            )}
          </div>
          
          {error && (
            <div className="p-4 rounded-xl bg-red-900/20 border border-red-900/50 text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="flex justify-end">
            <Button 
              onClick={handleAnalyze} 
              disabled={!file || loading}
              className="bg-zinc-100 text-zinc-900 hover:bg-zinc-200 min-w-[120px]"
            >
              {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <ImageIcon className="w-4 h-4 mr-2" />}
              {loading ? "Analyzing..." : "Analyze Photo"}
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-4">
            <div className="rounded-2xl border border-zinc-800 overflow-hidden bg-[#111111]">
              <img src={previewUrl!} alt="Analyzed" className="w-full h-auto object-cover" />
            </div>
            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#111111] text-center relative overflow-hidden">
              {result.isDemoMode && (
                <div className="absolute top-0 left-0 right-0 py-1 bg-amber-500/10 border-b border-amber-500/20 text-[10px] text-amber-500 font-medium uppercase tracking-tighter">
                  Demo Mode (API Quota Exceeded)
                </div>
              )}
              <p className="text-sm text-zinc-400 uppercase tracking-widest pt-4">Overall Score</p>
              <p className="text-5xl font-serif mt-2 text-transparent bg-clip-text bg-gradient-to-br from-amber-200 to-amber-500">
                {result.overallScore}/100
              </p>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#111111] space-y-4">
              <h3 className="text-xl font-medium">Feedback Breakdown</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-zinc-400">Composition</p>
                  <div className="w-full bg-zinc-800 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${result.compositionScore}%` }}></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-zinc-400">Lighting</p>
                  <div className="w-full bg-zinc-800 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${result.lightingScore}%` }}></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-zinc-400">Storytelling</p>
                  <div className="w-full bg-zinc-800 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${result.storytellingScore}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-green-900/30 bg-green-900/10 space-y-4">
                <h3 className="text-lg font-medium text-green-400">Strengths</h3>
                <ul className="list-disc list-inside text-sm text-zinc-300 space-y-2">
                  {result.strengths.map((s: string, i: number) => <li key={i}>{s}</li>)}
                </ul>
              </div>
              <div className="p-6 rounded-2xl border border-red-900/30 bg-red-900/10 space-y-4">
                <h3 className="text-lg font-medium text-red-400">Areas to Improve</h3>
                <ul className="list-disc list-inside text-sm text-zinc-300 space-y-2">
                  {result.weaknesses.map((w: string, i: number) => <li key={i}>{w}</li>)}
                </ul>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-blue-900/30 bg-blue-900/10 space-y-4">
              <h3 className="text-lg font-medium text-blue-400">Pro Tips</h3>
              <ul className="list-disc list-inside text-sm text-zinc-300 space-y-2">
                {result.tips.map((t: string, i: number) => <li key={i}>{t}</li>)}
              </ul>
            </div>
            
            <div className="flex justify-end">
              <Button onClick={() => { setFile(null); setPreviewUrl(null); setResult(null); }} variant="outline" className="border-zinc-700 text-zinc-300">
                Analyze Another Photo
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
