"use client"

import { useTheme } from "next-themes"
import { Moon, Sun, Search } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  // Previne hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-[var(--surface-border)] transition-colors duration-300">
      <nav className="flex justify-between items-center w-full px-4 md:px-10 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-3xl font-extrabold text-[var(--primary)] tracking-tight">
            Juvion
          </Link>
          <div className="hidden md:flex gap-6">
            <Link 
              href="/" 
              className={`text-sm transition-all duration-300 ${pathname === '/' ? 'font-bold text-[var(--primary)] border-b-2 border-[var(--primary)] pb-1' : 'font-semibold text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-[var(--primary)]'}`}
            >
              Início
            </Link>
            <Link 
              href="/guias" 
              className={`text-sm transition-all duration-300 ${pathname.startsWith('/guias') ? 'font-bold text-[var(--primary)] border-b-2 border-[var(--primary)] pb-1' : 'font-semibold text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-[var(--primary)]'}`}
            >
              Guias de Estudo
            </Link>
            <Link 
              href="/empresas" 
              className={`text-sm transition-all duration-300 ${pathname.startsWith('/empresas') ? 'font-bold text-[var(--primary)] border-b-2 border-[var(--primary)] pb-1' : 'font-semibold text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-[var(--primary)]'}`}
            >
              Para Empresas
            </Link>
            <Link 
              href="/sobre" 
              className={`text-sm transition-all duration-300 ${pathname.startsWith('/sobre') ? 'font-bold text-[var(--primary)] border-b-2 border-[var(--primary)] pb-1' : 'font-semibold text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-[var(--primary)]'}`}
            >
              Sobre o Portal
            </Link>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-[var(--surface-hover)] transition-colors text-[var(--foreground)]" aria-label="Pesquisar">
            <Search size={20} />
          </button>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-[var(--surface-hover)] transition-colors text-[var(--foreground)]"
              aria-label="Alternar tema"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
        </div>
      </nav>
    </header>
  )
}
