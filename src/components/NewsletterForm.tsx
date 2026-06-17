"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    // Simula uma chamada à API de newsletter
    setTimeout(() => {
      setStatus("success")
      setEmail("")
    }, 1500)
  }

  return (
    <div className="bg-[var(--surface-hover)] border border-[var(--surface-border)] rounded-2xl p-8 my-10 relative overflow-hidden shadow-sm">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)] opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">Accelerate your Online Career</h3>
          <p className="text-[var(--foreground)] opacity-80 font-serif">
            Get exclusive reviews of tech colleges, discount coupons, and study guides directly to your email.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            aria-label="Your best email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your best email"
            className="px-4 py-3 rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] min-w-[280px]"
            disabled={status === "loading" || status === "success"}
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[var(--primary-hover)] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : status === "success" ? "Subscribed!" : (
              <>
                Subscribe
                <Send size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
