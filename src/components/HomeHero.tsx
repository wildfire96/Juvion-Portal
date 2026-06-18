"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"

export function HomeHero() {
  const { scrollY } = useScroll()
  
  // Parallax effects para o Hero 3D
  const textY = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] pt-32 pb-[100px] md:pt-32 md:pb-[50px]">
      
      {/* O texto JUVION gigante de background foi removido a pedido do usuário para um visual mais limpo */}

      {/* Camada 2: Título Legível */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 w-full max-w-7xl px-4 md:px-10 mx-auto"
      >
        <div className="max-w-2xl mt-12 md:mt-24">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
            Portal Independente
          </span>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight drop-shadow-2xl mb-8">
          Decida seu futuro com absoluta certeza.
        </h2>
        <p className="text-white/80 text-lg md:text-xl font-serif max-w-xl mb-10 drop-shadow-md">
          Análises definitivas e transparentes das melhores faculdades de tecnologia online e presenciais.
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-10 pb-12 md:pb-0">
          <Link href="#analises" className="group bg-white text-black px-8 py-4 rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] inline-flex items-center gap-4 shrink-0">
            Explorar Análises
            <div className="bg-black text-white p-1.5 rounded-xl group-hover:translate-x-1 transition-transform">
              <ArrowRight size={18} />
            </div>
          </Link>
          
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-2xl border border-white/20 p-3 md:p-4 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
            <div className="flex -space-x-3 shrink-0">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 border-2 border-[var(--primary)] flex items-center justify-center overflow-hidden backdrop-blur-md shadow-inner">
                  <Star size={12} className="text-white fill-white md:w-3 md:h-3" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-white text-sm font-bold tracking-tight">+50 Instituições</p>
              <p className="text-white/70 text-xs font-medium">Rigorosamente avaliadas</p>
            </div>
          </div>
        </div>
        </div>
      </motion.div>

      {/* Camada 3: Imagem PNG com Fundo Transparente (Atrás do texto para não quebrar no mobile) */}
      <motion.div 
        className="absolute inset-0 z-10 w-full h-full pointer-events-none opacity-40 md:opacity-100"
      >
        <div className="relative w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <Image 
            src="/hero-image.webp" 
            alt="Estudante EAD interagindo com tecnologia" 
            fill
            className="object-cover object-center md:object-contain md:object-right-bottom"
            priority
            sizes="100vw"
          />
        </div>
      </motion.div>
    </section>
  )
}
