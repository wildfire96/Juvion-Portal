"use client"

import { useEffect, useState } from "react"
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

  const [currentUrl, setCurrentUrl] = useState("")

  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])

  const encodedUrl = currentUrl ? encodeURIComponent(currentUrl) : ""
  const encodedTitle = encodeURIComponent(post.title || "Juvion Review")

  const ptComponents = {
    block: {
      h1: ({ children }: any) => <h1 className="text-4xl md:text-5xl font-black mt-12 mb-6 tracking-tight text-[var(--foreground)]">{children}</h1>,
      h2: ({ children }: any) => <h2 className="text-3xl md:text-4xl font-black mt-10 mb-5 tracking-tight text-[var(--foreground)]">{children}</h2>,
      h3: ({ children }: any) => <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 tracking-tight text-[var(--foreground)]">{children}</h3>,
      h4: ({ children }: any) => <h4 className="text-xl md:text-2xl font-bold mt-6 mb-3 tracking-tight text-[var(--foreground)]">{children}</h4>,
      normal: ({ children }: any) => <p className="mb-6 leading-[1.8] text-[var(--foreground)]/80 text-lg">{children}</p>,
      blockquote: ({ children }: any) => <blockquote className="border-l-4 border-[var(--primary)] pl-6 py-2 my-8 italic text-xl font-medium text-[var(--foreground)]/70 bg-[var(--surface-hover)]/50 rounded-r-lg">{children}</blockquote>,
    },
    types: {
      image: ({ value }: any) => {
        if (!value?.asset?._ref) {
          return null
        }
        return (
          <div className="relative w-full h-[300px] md:h-[450px] my-10 rounded-2xl overflow-hidden shadow-xl border border-[var(--surface-border)]">
            <Image
              src={urlForImage(value).url()}
              alt={value.alt || 'Post image'}
              fill
              className="object-cover"
            />
          </div>
        )
      }
    }
  }

  return (
    <div className="bg-[var(--background)] min-h-screen">
      <ReadingProgressBar />
      <Header />
      
      <main className="pb-24">
        {/* =========================================
            HERO SECTION 3D (DRENCHED STRATEGY)
            ========================================= */}
        <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] pt-32 pb-[100px] md:pt-32 md:pb-[50px]">
          
          {/* Camada 2: Título Legível */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 w-full max-w-7xl px-4 md:px-10 mx-auto"
          >
            <div className="max-w-2xl mt-12 md:mt-24">
              <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
                {post.badgeText !== undefined ? post.badgeText : "Audited Review 2026"}
              </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight drop-shadow-2xl mb-8">
              {post.title}
            </h2>
            <p className="text-white/80 text-lg md:text-xl font-serif max-w-xl mb-10 drop-shadow-md">
              {post.seoDescription || "Definitive and transparent reviews of the best online and on-campus tech colleges."}
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-10 pb-12 md:pb-0">
              {(post.showAffiliateLink !== false) && (
                <a href={post.affiliateLink || "#"} target="_blank" className="group bg-white text-black px-8 py-4 rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] inline-flex items-center gap-4 shrink-0">
                  {post.discountButtonText !== undefined ? post.discountButtonText : "Secure Discount"}
                  <div className="bg-black text-white p-1.5 rounded-xl group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={18} />
                  </div>
                </a>
              )}
              
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-2xl border border-white/20 p-3 md:p-4 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center text-white overflow-hidden font-bold border-2 border-[var(--primary)] shadow-inner relative shrink-0">
                  {post.author?.image ? (
                    <Image src={urlForImage(post.author.image).url()} alt={post.author?.name || "Author"} fill className="object-cover" />
                  ) : "RJ"}
                </div>
                <div>
                  <p className="text-white text-sm font-bold tracking-tight">{post.author?.name || "Juvion Editorial"}</p>
                  <p className="text-white/70 text-xs font-medium">{new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US')} • 8 min</p>
                </div>
              </div>
            </div>
            </div>
          </motion.div>

          {/* Camada 3: Imagem PNG com Fundo Transparente (Atrás do texto para não quebrar no mobile) */}
          {(post.showHeroImage !== false) && post.heroImage && (
            <motion.div 
              className="absolute inset-0 z-10 w-full h-full pointer-events-none opacity-40 md:opacity-100"
            >
              <div className="relative w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <Image 
                  src={urlForImage(post.heroImage).url()} 
                  alt={post.title} 
                  fill
                  className="object-cover object-center md:object-contain md:object-right-bottom"
                  priority
                  sizes="100vw"
                />
              </div>
            </motion.div>
          )}
        </section>

        <div className="max-w-7xl mx-auto px-4 md:px-10 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <article className={post.showShareSidebar !== false ? "lg:col-span-8" : "lg:col-span-12 max-w-4xl mx-auto w-full"}>
            
            {/* =========================================
                CTA 1: BENTO PREMIUM DE INÍCIO
                ========================================= */}
            {(post.showScoreBox !== false) && (
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
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--foreground)]/40 mb-2">{post.scoreLabel !== undefined ? post.scoreLabel : "Juvion Score"}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-6xl font-black text-[var(--primary)] tracking-tighter">{post.rating || "5.0"}</span>
                      <span className="text-xl text-[var(--foreground)]/30 font-serif font-bold">/5</span>
                    </div>
                  </div>
                  <div className="w-px bg-[var(--surface-border)]"></div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--foreground)]/40 mb-2">{post.tuitionLabel !== undefined ? post.tuitionLabel : "Average Tuition"}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-[var(--foreground)] tracking-tight">R${Math.floor(post.monthlyPrice || 0)}</span>
                      <span className="text-lg text-[var(--foreground)]/40 font-serif font-bold">,{((post.monthlyPrice || 0) % 1 * 100).toString().padStart(2, '0')}</span>
                    </div>
                  </div>
                </div>
                
                <a href={post.affiliateLink || "#"} target="_blank" className="w-full md:w-auto bg-[var(--primary)] text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-[var(--primary-hover)] transition-all shadow-lg hover:shadow-[var(--primary)]/30 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3">
                  {post.discountButtonText !== undefined ? post.discountButtonText : "Secure Discount"}
                  <ArrowRight size={20} />
                </a>
              </div>
            </motion.section>
            )}

            {/* =========================================
                CORPO DO ARTIGO EDITORIAL (PORTABLE TEXT)
                ========================================= */}
            <div className="prose prose-lg dark:prose-invert max-w-none font-serif text-[var(--foreground)]/80 leading-[1.8] space-y-8">
              {post.body ? (
                <PortableText value={post.body} components={ptComponents} />
              ) : (
                <p>The content of the review will be displayed here.</p>
              )}

              {(post.showProsCons !== false) && ((post.pros && post.pros.length > 0) || (post.cons && post.cons.length > 0)) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16 not-prose font-sans">
                  {post.pros && post.pros.length > 0 && (
                    <div className="bg-[var(--surface)] border border-[var(--surface-border)] p-8 rounded-3xl shadow-sm relative overflow-hidden group hover:border-green-500/30 transition-colors h-full">
                      <div className="absolute top-0 left-0 w-full h-1.5 bg-green-500"></div>
                      <h4 className="text-[11px] text-green-600 dark:text-green-400 mb-6 uppercase font-black tracking-[0.2em]">{post.prosLabel !== undefined ? post.prosLabel : "What shines"}</h4>
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
                    <div className="bg-[var(--surface)] border border-[var(--surface-border)] p-8 rounded-3xl shadow-sm relative overflow-hidden group hover:border-orange-500/30 transition-colors h-full">
                      <div className="absolute top-0 left-0 w-full h-1.5 bg-orange-500"></div>
                      <h4 className="text-[11px] text-orange-600 dark:text-orange-400 mb-6 uppercase font-black tracking-[0.2em]">{post.consLabel !== undefined ? post.consLabel : "Point of attention"}</h4>
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
              )}
            </div>

            {/* =========================================
                CTA 3: O VEREDITO MAGNÉTICO (FINAL CTA)
                ========================================= */}
            {(post.showFinalVerdict !== false) && (
            <div className="mt-24 bg-[#050505] text-white p-12 md:p-20 rounded-[48px] shadow-2xl relative overflow-hidden text-center flex flex-col items-center group">
              {/* Inner glass border refinado */}
              <div className="absolute inset-0 rounded-[48px] border border-white/10 pointer-events-none"></div>
              <div className="absolute inset-0 rounded-[48px] shadow-[inset_0_2px_20px_rgba(255,255,255,0.05)] pointer-events-none"></div>
              
              {/* Ambient glow interativo */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[var(--primary)]/40 blur-[120px] rounded-full pointer-events-none group-hover:bg-[var(--secondary)]/40 transition-colors duration-1000"></div>

              <span className="relative z-10 bg-white/5 border border-white/10 px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 mb-8 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                {post.verdictBadgeText !== undefined ? post.verdictBadgeText : "Final Verdict"}
              </span>
              
              <h2 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-black max-w-3xl leading-[1.1] tracking-tight mb-12 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                {post.verdictTitle !== undefined ? post.verdictTitle.replace('{nome}', post.courseOrCollegeName || "This institution") : `${post.courseOrCollegeName || "This institution"} is the logical choice to accelerate your career.`}
              </h2>
              
              <a href={post.affiliateLink || "#"} target="_blank" className="relative z-10 group/btn bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] flex items-center justify-center gap-4 w-full md:w-auto">
                {post.verdictButtonText !== undefined ? post.verdictButtonText : "Secure my spot with discount"}
                <div className="bg-black text-white p-2 rounded-xl group-hover/btn:-rotate-45 transition-transform duration-300">
                  <ArrowRight size={20} />
                </div>
              </a>
              <p className="relative z-10 text-white/40 text-sm mt-8 font-medium tracking-wide">{post.verdictSubtitle !== undefined ? post.verdictSubtitle : "100% online registration • Simplified process"}</p>
            </div>
            )}

          </article>

          {/* =========================================
              SIDEBAR EDITORIAL
              ========================================= */}
          {(post.showShareSidebar !== false) && (
          <aside className="lg:col-span-4 mt-16 lg:mt-0">
            <div className="sticky top-32">
              <div className="lg:pl-8 lg:border-l border-[var(--surface-border)] h-full">
                <h3 className="font-sans text-[10px] font-black uppercase tracking-[0.2em] text-[var(--foreground)]/40 mb-8 border-b border-[var(--surface-border)] pb-4">
                  {post.shareTitle !== undefined ? post.shareTitle : "Share"}
                </h3>
                <div className="space-y-10">
                  <p className="text-sm text-[var(--foreground)]/60">{post.shareText !== undefined ? post.shareText : "Did you like the review? Send it to a friend who is unsure where to study."}</p>
                  
                  {currentUrl && (
                    <div className="flex flex-wrap gap-3">
                      {/* WhatsApp */}
                      <a href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--surface-hover)] border border-[var(--surface-border)] flex items-center justify-center text-[var(--foreground)]/70 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all" title="Share on WhatsApp">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                      </a>
                      
                      {/* Facebook */}
                      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--surface-hover)] border border-[var(--surface-border)] flex items-center justify-center text-[var(--foreground)]/70 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all" title="Share on Facebook">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                      </a>

                      {/* Twitter / X */}
                      <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--surface-hover)] border border-[var(--surface-border)] flex items-center justify-center text-[var(--foreground)]/70 hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all" title="Share on X">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                      </a>
                      
                      {/* LinkedIn */}
                      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--surface-hover)] border border-[var(--surface-border)] flex items-center justify-center text-[var(--foreground)]/70 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all" title="Share on LinkedIn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>

                      {/* Instagram */}
                      <button onClick={() => {
                        if (navigator.share) {
                          navigator.share({ title: post.title, url: currentUrl }).catch(() => {})
                        } else {
                          navigator.clipboard.writeText(currentUrl)
                          alert("Link copiado para a área de transferência! Cole no Instagram.")
                        }
                      }} className="w-10 h-10 rounded-full bg-[var(--surface-hover)] border border-[var(--surface-border)] flex items-center justify-center text-[var(--foreground)]/70 hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] transition-all" title="Share on Instagram">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </aside>
          )}
        </div>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
