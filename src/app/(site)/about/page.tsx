import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ScrollToTopButton } from "@/components/ScrollToTopButton"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Header />
      
      <main className="flex-grow pt-32 pb-32">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-32">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-[var(--foreground)] mb-10 leading-[0.9]">
            Juvion<span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">.</span>
          </h1>
          <p className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]/80 max-w-4xl leading-[1.1]">
            Democratizing knowledge through technology.
          </p>
        </section>

        <div className="w-full h-px bg-[var(--foreground)]/10 my-10 max-w-7xl mx-auto" />

        {/* MISSION & PRESENCE */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--primary)] mb-6">Our Mission</h2>
              <p className="text-3xl md:text-4xl font-serif leading-tight text-[var(--foreground)]">
                To bring information solutions and accessible university options to the public, ensuring that every student makes the right choice for their future without barriers.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--primary)] mb-6">Global Presence</h2>
              <div className="grid grid-cols-2 gap-8 border-l border-[var(--foreground)]/10 pl-8">
                <div>
                  <h3 className="text-5xl font-black text-[var(--foreground)] mb-2 tracking-tighter">US</h3>
                  <p className="text-[var(--foreground)]/60 font-medium">United States</p>
                </div>
                <div>
                  <h3 className="text-5xl font-black text-[var(--foreground)] mb-2 tracking-tighter">UK</h3>
                  <p className="text-[var(--foreground)]/60 font-medium">United Kingdom</p>
                </div>
                <div>
                  <h3 className="text-5xl font-black text-[var(--foreground)] mb-2 tracking-tighter">AU</h3>
                  <p className="text-[var(--foreground)]/60 font-medium">Australia</p>
                </div>
                <div>
                  <h3 className="text-5xl font-black text-[var(--foreground)] mb-2 tracking-tighter">CA</h3>
                  <p className="text-[var(--foreground)]/60 font-medium">Canada</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-[var(--foreground)]/10 my-10 max-w-7xl mx-auto" />

        {/* FOUNDER & JOURNEY */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/5] bg-[var(--surface)] border border-[var(--surface-border)] overflow-hidden">
                <Image 
                  src="/joel-medina.jpg" 
                  alt="Joel Medina - CEO of Juvion" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-16">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--primary)] mb-6">Leadership</h2>
                <h3 className="text-5xl font-black tracking-tight text-[var(--foreground)] mb-4">Joel Medina</h3>
                <p className="text-xl text-[var(--foreground)]/60 font-medium mb-6">CEO & Founder, Business Administration Student</p>
                <p className="text-xl font-serif leading-relaxed text-[var(--foreground)]/80 max-w-2xl">
                  As a Business Administration student, Joel understood firsthand the complexity and lack of transparency in choosing an educational path. He founded Juvion to eliminate the guesswork, building a platform that provides absolute clarity and accessible university options worldwide.
                </p>
              </div>

              <div>
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--primary)] mb-6">The Journey</h2>
                <div className="flex items-baseline gap-6 relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 blur-xl rounded-full z-0"></div>
                  <h3 className="relative z-10 text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">2026</h3>
                  <p className="relative z-10 text-2xl font-serif text-[var(--foreground)]/70">The year it all started.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <div className="w-full h-px bg-[var(--foreground)]/10 my-10 max-w-7xl mx-auto" />

        {/* CORE VALUES */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[var(--primary)]/5 blur-[120px] rounded-[100%] pointer-events-none"></div>
          
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--primary)] mb-16 relative z-10">Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 relative z-10">
            <div className="border-t-2 border-[var(--foreground)] pt-6">
              <h3 className="text-3xl font-black tracking-tight text-[var(--foreground)] mb-4">Radical Transparency</h3>
              <p className="text-lg text-[var(--foreground)]/70 font-serif leading-relaxed">
                We present the unvarnished truth about tuition, methodology, and institutional quality. No hidden fees, no obscured data.
              </p>
            </div>
            
            <div className="border-t-2 border-[var(--foreground)] pt-6">
              <h3 className="text-3xl font-black tracking-tight text-[var(--foreground)] mb-4">Accessibility</h3>
              <p className="text-lg text-[var(--foreground)]/70 font-serif leading-relaxed">
                Knowledge should not be gated. We strive to bring accessible university and educational options to everyone, everywhere.
              </p>
            </div>

            <div className="border-t-2 border-[var(--foreground)] pt-6">
              <h3 className="text-3xl font-black tracking-tight text-[var(--foreground)] mb-4">Independence</h3>
              <p className="text-lg text-[var(--foreground)]/70 font-serif leading-relaxed">
                We are not controlled or influenced by any educational group. Our loyalty lies entirely with the student.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
