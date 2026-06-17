"use client"

import { Header } from "@/components/Header"
import dynamic from "next/dynamic"

const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer))
import { ScrollToTopButton } from "@/components/ScrollToTopButton"
import { ReadingProgressBar } from "@/components/ReadingProgressBar"
import Image from "next/image"
import { ArrowRight, CheckCircle2, AlertCircle, Quote } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { PortableText } from '@portabletext/react'
import { urlForImage } from "@/sanity/lib/image"

export function ArticleClient({ post }: { post: any }) {
  const { scrollY } = useScroll()
  
  // Parallax effects para o Hero 3D
  const textY = useTransform(scrollY, [0, 500], [0, 150])
  const imageY = useTransform(scrollY, [0, 500], [0, -50])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <div className="bg-[var(--background)] min-h-screen">
      <ReadingProgressBar />
      <Header />
      
      <main className="pb-24">
        {/* =========================================
            HERO SECTION 3D (DRENCHED STRATEGY)
            ========================================= */}
        <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] pt-20 pb-[50px]">
          
          {/* Camada 1: Background Layer (Huge Text Parallax) */}
          <motion.div 
            style={{ y: textY, opacity }}
            className="absolute z-10 w-full h-full flex justify-center items-center pointer-events-none"
          >
            <h1 className="text-[15vw] leading-none font-black text-white/20 whitespace-nowrap tracking-tighter mix-blend-overlay select-none">
              {post.courseOrCollegeName?.toUpperCase() || "ANÁLISE"}
            </h1>
          </motion.div>

          {/* Camada 2: Título Legível */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 w-full max-w-7xl px-4 md:px-10 mx-auto"
          >
            <div className="max-w-2xl">
              <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
                Análise Auditada 2026
              </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight drop-shadow-2xl">
              {post.title}
            </h2>
            </div>
          </motion.div>

          {/* Camada 3: Imagem PNG com Fundo Transparente (Atrás do texto) */}
          {post.heroImage && (
            <motion.div 
              style={{ y: imageY }}
              className="absolute bottom-0 z-10 w-full max-w-4xl flex justify-center md:justify-end md:right-10 pointer-events-none opacity-40 md:opacity-100"
            >
              <div className="relative w-auto h-[50vh] md:h-[65vh] aspect-[800/1000] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <Image 
                  src={urlForImage(post.heroImage).url()} 
                  alt={post.title} 
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-contain"
                />
              </div>
            </motion.div>
          )}
          
          {/* Camada 4: Meta info inferior com Glassmorphism refinado */}
          <div className="absolute bottom-10 left-4 md:left-10 z-40 flex items-center gap-4 bg-white/10 backdrop-blur-2xl border border-white/20 p-4 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white overflow-hidden font-bold border border-white/30 shadow-inner relative">
              {post.author?.image ? (
                <Image src={urlForImage(post.author.image).url()} alt={post.author.name} fill className="object-cover" />
              ) : "RJ"}
            </div>
            <div>
              <p className="text-white text-sm font-bold tracking-tight">{post.author?.name || "Redação Juvion"}</p>
              <p className="text-white/70 text-xs font-medium">{new Date(post.publishedAt || Date.now()).toLocaleDateString('pt-BR')} • 8 min</p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 md:px-10 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <article className="lg:col-span-8">
            
            {/* =========================================
                CTA 1: BENTO PREMIUM DE INÍCIO
                ========================================= */}
            <motion.section 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-[var(--surface)] rounded-[32px] p-8 md:p-10 mb-20 relative overflow-hidden shadow-2xl shadow-[var(--primary)]/5 border border-[var(--surface-border)] group"
            >
              {/* Inner highlight border trick para efeito premium */}
              <div className="absolute inset-0 rounded-[32px] border border-white/60 dark:border-white/5 pointer-events-none"></div>
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between items-center">
                <div className="flex gap-10 w-full md:w-auto">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--foreground)]/40 mb-2">Nota Juvion</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-6xl font-black text-[var(--primary)] tracking-tighter">{post.rating || "5.0"}</span>
                      <span className="text-xl text-[var(--foreground)]/30 font-serif font-bold">/5</span>
                    </div>
                  </div>
                  <div className="w-px bg-[var(--surface-border)]"></div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--foreground)]/40 mb-2">Mensalidade Média</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-[var(--foreground)] tracking-tight">R${Math.floor(post.monthlyPrice || 0)}</span>
                      <span className="text-lg text-[var(--foreground)]/40 font-serif font-bold">,{((post.monthlyPrice || 0) % 1 * 100).toString().padStart(2, '0')}</span>
                    </div>
                  </div>
                </div>
                
                <a href={post.affiliateLink || "#"} target="_blank" className="w-full md:w-auto bg-[var(--primary)] text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-[var(--primary-hover)] transition-all shadow-lg hover:shadow-[var(--primary)]/30 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3">
                  Garantir Desconto
                  <ArrowRight size={20} />
                </a>
              </div>
            </motion.section>

            {/* =========================================
                CORPO DO ARTIGO EDITORIAL (PORTABLE TEXT)
                ========================================= */}
            <div className="prose prose-lg dark:prose-invert max-w-none font-serif text-[var(--foreground)]/80 leading-[1.8] space-y-8">
              {post.body ? (
                <PortableText value={post.body} />
              ) : (
                <p>O conteúdo da análise será exibido aqui.</p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16 not-prose font-sans">
                {post.pros && post.pros.length > 0 && (
                  <div className="bg-[var(--surface)] border border-[var(--surface-border)] p-8 rounded-3xl shadow-sm relative overflow-hidden group hover:border-green-500/30 transition-colors">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-green-500"></div>
                    <h4 className="text-[11px] text-green-600 dark:text-green-400 mb-6 uppercase font-black tracking-[0.2em]">O que brilha</h4>
                    <ul className="space-y-6">
                      {post.pros.map((pro: string, i: number) => (
                        <li key={i} className="flex items-start gap-4 text-[var(--foreground)]/80 text-sm font-medium leading-relaxed">
                          <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {post.cons && post.cons.length > 0 && (
                  <div className="bg-[var(--surface)] border border-[var(--surface-border)] p-8 rounded-3xl shadow-sm relative overflow-hidden group hover:border-orange-500/30 transition-colors">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-orange-500"></div>
                    <h4 className="text-[11px] text-orange-600 dark:text-orange-400 mb-6 uppercase font-black tracking-[0.2em]">Ponto de atenção</h4>
                    <ul className="space-y-6">
                      {post.cons.map((con: string, i: number) => (
                        <li key={i} className="flex items-start gap-4 text-[var(--foreground)]/80 text-sm font-medium leading-relaxed">
                          <AlertCircle className="text-orange-500 shrink-0 mt-0.5" size={20} />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* =========================================
                CTA 3: O VEREDITO MAGNÉTICO (FINAL CTA)
                ========================================= */}
            <div className="mt-24 bg-[#050505] text-white p-12 md:p-20 rounded-[48px] shadow-2xl relative overflow-hidden text-center flex flex-col items-center group">
              {/* Inner glass border refinado */}
              <div className="absolute inset-0 rounded-[48px] border border-white/10 pointer-events-none"></div>
              <div className="absolute inset-0 rounded-[48px] shadow-[inset_0_2px_20px_rgba(255,255,255,0.05)] pointer-events-none"></div>
              
              {/* Ambient glow interativo */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[var(--primary)]/40 blur-[120px] rounded-full pointer-events-none group-hover:bg-[var(--secondary)]/40 transition-colors duration-1000"></div>

              <span className="relative z-10 bg-white/5 border border-white/10 px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 mb-8 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                Veredito Final
              </span>
              
              <h2 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-black max-w-3xl leading-[1.1] tracking-tight mb-12 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                A {post.courseOrCollegeName || "instituição"} é a escolha lógica para acelerar sua carreira.
              </h2>
              
              <a href={post.affiliateLink || "#"} target="_blank" className="relative z-10 group/btn bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] flex items-center justify-center gap-4 w-full md:w-auto">
                Garantir minha vaga com desconto
                <div className="bg-black text-white p-2 rounded-xl group-hover/btn:-rotate-45 transition-transform duration-300">
                  <ArrowRight size={20} />
                </div>
              </a>
              <p className="relative z-10 text-white/40 text-sm mt-8 font-medium tracking-wide">Inscrição 100% online • Processo simplificado</p>
            </div>

          </article>

          {/* =========================================
              SIDEBAR EDITORIAL
              ========================================= */}
          <aside className="lg:col-span-4 mt-16 lg:mt-0">
            <div className="sticky top-32">
              <div className="lg:pl-8 lg:border-l border-[var(--surface-border)] h-full">
                <h3 className="font-sans text-[10px] font-black uppercase tracking-[0.2em] text-[var(--foreground)]/40 mb-8 border-b border-[var(--surface-border)] pb-4">
                  Compartilhe
                </h3>
                <div className="space-y-10">
                  <p className="text-sm text-[var(--foreground)]/60">Gostou da análise? Envie para um amigo que está em dúvida de onde estudar.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
