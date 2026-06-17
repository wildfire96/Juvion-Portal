"use client"

import { useState } from "react"
import { Header } from "@/components/Header"
import { ScrollToTopButton } from "@/components/ScrollToTopButton"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { 
  Building, 
  Users, 
  TrendingUp, 
  HeartHandshake, 
  CheckCircle, 
  Briefcase,
  GraduationCap,
  Sparkles
} from "lucide-react"

const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer))

export default function EmpresasPage() {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    email: "",
    company: "",
    employees: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: "New B2B Partnership Request from Juvion",
          ...formData,
          message: `New Partnership Request:\n\nName: ${formData.name}\nTitle: ${formData.jobTitle}\nEmail: ${formData.email}\nCompany: ${formData.company}\nEmployees: ${formData.employees}`
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", jobTitle: "", email: "", company: "", employees: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        {/* HERO SECTION B2B */}
        <section className="relative min-h-[80vh] flex items-center bg-[var(--background)] overflow-hidden">
          {/* Fundo Mais Natural e Clean */}
          <div className="absolute inset-0 z-0">
            {/* Gradiente sutil em vez de abusivo */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900"></div>
          </div>

          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 py-20">
            
            {/* Texto Hero */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-3/5 text-white"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold tracking-wide uppercase">For HR Managers</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight drop-shadow-lg">
                Education is the best <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">benefit.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-light max-w-2xl">
                Honor your employees' years of dedication by offering real opportunities for knowledge and career growth. 
                <strong className="block mt-4 text-white font-bold text-2xl">Absolutely Zero Cost to your company.</strong>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#formulario-parceria"
                  className="px-8 py-4 rounded-xl bg-white text-[var(--primary)] font-bold text-lg hover:bg-gray-100 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:-translate-y-1 text-center"
                >
                  Become a Partner
                </a>
                <a 
                  href="#como-funciona"
                  className="px-8 py-4 rounded-xl bg-transparent text-white font-bold text-lg hover:bg-white/10 border border-white/30 transition-all text-center"
                >
                  Understand the Model
                </a>
              </div>
            </motion.div>

            {/* Imagem / Card B2B flutuante */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:w-2/5 w-full max-w-md"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full mix-blend-overlay filter blur-[50px] opacity-40"></div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-inner">
                    <HeartHandshake className="w-8 h-8 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">Direct Impact</h3>
                    <p className="text-white/70 text-sm">In your team's life</p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {[
                    "No joining fees or monthly charges",
                    "No bureaucracy or IT integration",
                    "Increases talent retention",
                    "Strengthens Employer Branding"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white">
                      <CheckCircle className="w-5 h-5 text-yellow-300 shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BENTO GRID - BENEFÍCIOS */}
        <section id="como-funciona" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
              Why partner with Juvion?
            </h2>
            <p className="text-lg text-[var(--foreground)]/70 max-w-3xl mx-auto">
              We take care of all the infrastructure and scholarship negotiations. Your role is simply to pass this amazing bonus on to your team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Grande (Custo Zero) */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 relative overflow-hidden group shadow-xl"
            >
              <div className="absolute -right-20 -bottom-20 opacity-10 group-hover:opacity-20 transition-opacity">
                <Building className="w-64 h-64 text-white" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                  <span className="text-3xl font-extrabold text-white">R$0</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Absolutely Zero Cost</h3>
                <p className="text-white/80 text-lg leading-relaxed max-w-lg">
                  Your company pays nothing to affiliate and has no hidden monthly fees. Juvion's mission is to democratize education; our revenue comes from the volume of students in partner colleges, not from charging those who support them.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Crescimento */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[var(--surface)] rounded-3xl p-8 border border-[var(--surface-border)] shadow-xl relative overflow-hidden group"
            >
              <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-[var(--primary)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">Career Plan</h3>
              <p className="text-[var(--foreground)]/70">
                Employees who study become better professionals. Increase productivity and create homegrown leaders.
              </p>
            </motion.div>

            {/* Card 3: Retenção */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[var(--surface)] rounded-3xl p-8 border border-[var(--surface-border)] shadow-xl relative overflow-hidden group"
            >
              <div className="w-14 h-14 bg-[var(--secondary)]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-[var(--secondary)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">Talent Retention</h3>
              <p className="text-[var(--foreground)]/70">
                Educational benefits drastically reduce turnover. Show that the company genuinely cares about the employee's future.
              </p>
            </motion.div>

            {/* Card 4: Extensão Grande */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-[var(--primary)] rounded-3xl p-8 relative overflow-hidden group shadow-xl"
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Complete University Extension</h3>
                  <p className="text-white/90">
                    Our online and tech partners are rigorously selected. Your employees will have access to the best curricula with discounts they wouldn't find on their own.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center">
                   {/* Aqui poderia ir uma ilustração abstract */}
                   <div className="w-32 h-32 rounded-full border-4 border-white/30 border-t-white animate-spin-slow"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* LEAD GEN FORM SECTION */}
        <section id="formulario-parceria" className="py-24 bg-[var(--surface)] border-t border-[var(--surface-border)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Contexto do Form */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-6 leading-tight">
                Take the first step to honor your team.
              </h2>
              <p className="text-lg text-[var(--foreground)]/70 mb-8">
                Fill out the form and our corporate success team will contact you. The activation process is agile, and you will have materials ready to share with employees in less than 48 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--foreground)]">Exclusive for HR Management</h4>
                    <p className="text-sm text-[var(--foreground)]/60">This form is dedicated to those responsible for people management and corporate benefits.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--secondary)]/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6 text-[var(--secondary)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--foreground)]">Zero Financial Commitment</h4>
                    <p className="text-sm text-[var(--foreground)]/60">We guarantee by contract that the partnership will not generate invoices or charges for your company.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* O Formulário (Drenched Glass Form) */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-[var(--background)] p-8 md:p-10 rounded-3xl shadow-xl border border-[var(--surface-border)]">
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-8">Partnership Registration</h3>
                
                {status === "success" ? (
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h4 className="text-xl font-bold text-[var(--foreground)] mb-2">Request Sent!</h4>
                    <p className="text-[var(--foreground)]/70">Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-[var(--foreground)]/80">Full Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="João Silva"
                          className="w-full px-4 py-3 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all placeholder:text-[var(--foreground)]/30"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-[var(--foreground)]/80">Job Title</label>
                        <input 
                          type="text" 
                          required
                          value={formData.jobTitle}
                          onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                          placeholder="Ex: HR Director"
                          className="w-full px-4 py-3 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all placeholder:text-[var(--foreground)]/30"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[var(--foreground)]/80">Corporate Email</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="joao@empresa.com.br"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all placeholder:text-[var(--foreground)]/30"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[var(--foreground)]/80">Company Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Empresa S/A"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all placeholder:text-[var(--foreground)]/30"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[var(--foreground)]/80">Number of Employees</label>
                      <select 
                        required
                        value={formData.employees}
                        onChange={(e) => setFormData({...formData, employees: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all"
                      >
                        <option value="" disabled className="text-[var(--foreground)]/50">Select a range</option>
                        <option value="1-50">1 to 50</option>
                        <option value="51-200">51 to 200</option>
                        <option value="201-500">201 to 500</option>
                        <option value="500+">More than 500</option>
                      </select>
                    </div>

                    {status === "error" && (
                      <p className="text-red-500 text-sm font-medium text-center">Something went wrong. Please try again.</p>
                    )}

                    <button 
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full mt-6 px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? "Sending Request..." : "Request Partnership"}
                    </button>
                    <p className="text-xs text-center text-[var(--foreground)]/50 mt-4">
                      By requesting, you agree to our privacy terms and that we will contact you.
                    </p>
                  </form>
                )}
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
