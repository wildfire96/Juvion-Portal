import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ScrollToTopButton } from "@/components/ScrollToTopButton"
import { Shield, Target, Zap, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Header />
      
      <main className="flex-grow pt-32 pb-24">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] w-fit mb-8 border border-[var(--primary)]/20">
            <Globe className="w-4 h-4" />
            <span className="text-xs font-bold tracking-widest uppercase">Our Mission</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[var(--foreground)] mb-8 leading-tight max-w-4xl">
            Democratizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">education</span> through truth and transparency.
          </h1>
          <p className="text-xl md:text-2xl text-[var(--foreground)]/70 font-serif leading-relaxed max-w-3xl">
            Juvion was born to end the confusion. We evaluate universities rigorously so you can decide your future with absolute certainty. No hidden fees, no misleading ads.
          </p>
        </section>

        {/* BENTO GRID - VALUES */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
          <h2 className="text-3xl font-black text-[var(--foreground)] mb-12">What drives us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-10 rounded-[32px] bg-[var(--surface)] border border-[var(--surface-border)] shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <Shield className="w-12 h-12 text-[var(--primary)] mb-8" />
              <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Independence</h3>
              <p className="text-[var(--foreground)]/60 font-serif leading-relaxed">
                We are not controlled by any educational group. Our reviews reflect the reality of the institutions, prioritizing the student's perspective above all.
              </p>
            </div>

            <div className="p-10 rounded-[32px] bg-[var(--surface)] border border-[var(--surface-border)] shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--secondary)]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <Target className="w-12 h-12 text-[var(--secondary)] mb-8" />
              <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Clarity</h3>
              <p className="text-[var(--foreground)]/60 font-serif leading-relaxed">
                We eliminate academic jargon. We present what truly matters: methodology, market value, real tuition fees, and career support.
              </p>
            </div>

            <div className="p-10 rounded-[32px] bg-gradient-to-br from-gray-900 to-black text-white border border-gray-800 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <Zap className="w-12 h-12 text-yellow-400 mb-8" />
              <h3 className="text-2xl font-bold mb-4">Impact</h3>
              <p className="text-white/70 font-serif leading-relaxed">
                We believe that the right choice of college can change a family's trajectory. We exist to ensure that this choice is accurate.
              </p>
            </div>
          </div>
        </section>

        {/* MANIFESTO / STORY */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-[var(--surface)] border border-[var(--surface-border)] rounded-[40px] p-10 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-[var(--foreground)] mb-8 tracking-tight">The Juvion Story</h2>
                <div className="space-y-6 text-lg text-[var(--foreground)]/70 font-serif leading-[1.8]">
                  <p>
                    Choosing a college has always been a blind shot. You visit a beautiful website, talk to a trained salesperson, but only discover the reality after enrolling.
                  </p>
                  <p>
                    Juvion emerged to change this dynamic. We gathered data, talked to students, and created a proprietary evaluation matrix that separates excellent institutions from those that just sell diplomas.
                  </p>
                  <p className="font-bold text-[var(--foreground)]">
                    Today, we help thousands of students find their path in technology and business careers.
                  </p>
                </div>
              </div>
              <div className="bg-[var(--background)] rounded-3xl p-10 border border-[var(--surface-border)]">
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-6">Contact Us</h3>
                <p className="text-[var(--foreground)]/60 mb-8">
                  Whether for partnerships, suggestions, or doubts, our team is ready to help.
                </p>
                <a href="mailto:contato@juvion.com.br" className="inline-flex items-center justify-center w-full bg-[var(--primary)] text-white px-8 py-4 rounded-xl font-bold hover:bg-[var(--primary-hover)] transition-colors">
                  Send an E-mail
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
