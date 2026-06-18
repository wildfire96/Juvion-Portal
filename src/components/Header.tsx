"use client"

import { useTheme } from "next-themes"
import { Moon, Sun, Search, Grip, X } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Previne hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
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
                href="/guides" 
                className={`text-sm transition-all duration-300 ${pathname.startsWith('/guides') ? 'font-bold text-[var(--primary)] border-b-2 border-[var(--primary)] pb-1' : 'font-semibold text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-[var(--primary)]'}`}
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
                href="/about" 
                className={`text-sm transition-all duration-300 ${pathname.startsWith('/about') ? 'font-bold text-[var(--primary)] border-b-2 border-[var(--primary)] pb-1' : 'font-semibold text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-[var(--primary)]'}`}
              >
                Sobre Nós
              </Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-3 rounded-full hover:bg-[var(--surface-hover)] transition-colors text-[var(--foreground)]" aria-label="Search">
              <Search size={20} />
            </button>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-3 rounded-full hover:bg-[var(--surface-hover)] transition-colors text-[var(--foreground)]"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-3 rounded-full hover:bg-[var(--surface-hover)] transition-colors text-[var(--foreground)]" 
              aria-label="Open menu"
            >
              <Grip size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay - Movido para fora do header para não ser bloqueado pelo backdrop-filter */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[var(--background)] flex flex-col md:hidden animate-in fade-in duration-300">
          <div className="flex justify-between items-center w-full px-4 py-4">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-extrabold text-[var(--primary)] tracking-tight">
              Juvion
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 rounded-full hover:bg-[var(--surface-hover)] transition-colors text-[var(--foreground)]" 
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-6 p-8 mt-10">
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-bold transition-all ${pathname === '/' ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'}`}
            >
              Início
            </Link>
            <Link 
              href="/guides" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-bold transition-all ${pathname.startsWith('/guides') ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'}`}
            >
              Guias de Estudo
            </Link>
            <Link 
              href="/empresas" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-bold transition-all ${pathname.startsWith('/empresas') ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'}`}
            >
              Para Empresas
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-bold transition-all ${pathname.startsWith('/about') ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'}`}
            >
              Sobre Nós
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
