import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ScrollToTopButton } from "@/components/ScrollToTopButton"
import Link from "next/link"
import { BookOpen, GraduationCap, Brain } from "lucide-react"
import { client } from "@/sanity/lib/client"

export const revalidate = 60 // ISR de 60 segundos

type Guide = {
  _id: string;
  title: string;
  slug: { current: string };
  icon?: string;
  summary?: string;
}

export default async function GuidesPage() {
  const guides: Guide[] = await client.fetch(`
    *[_type == "guide"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      icon,
      summary
    }
  `)

  // Mapa de ícones
  const IconMap: Record<string, any> = {
    BookOpen,
    GraduationCap,
    Brain,
  }

  const colors = [
    { text: "text-[var(--primary)]", bg: "bg-[var(--primary)]/10", border: "hover:border-[var(--primary)]" },
    { text: "text-[var(--secondary)]", bg: "bg-[var(--secondary)]/10", border: "hover:border-[var(--secondary)]" },
    { text: "text-[var(--foreground)]", bg: "bg-[var(--foreground)]/10", border: "hover:border-[var(--foreground)]" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Header />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-[var(--foreground)] mb-6">Guias de Estudo</h1>
            <p className="text-xl text-[var(--foreground)]/70 max-w-2xl font-serif">
              Domine as melhores técnicas de estudo, prepare-se para o ENEM e SISU, e descubra como organizar sua rotina para o máximo desempenho.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.length > 0 ? guides.map((guide, index) => {
              const IconComponent = guide.icon && IconMap[guide.icon] ? IconMap[guide.icon] : BookOpen
              const color = colors[index % colors.length]
              
              return (
                <Link key={guide._id} href={`/guides/${guide.slug.current}`} className={`group p-8 rounded-[32px] bg-[var(--surface)] border border-[var(--surface-border)] ${color.border} transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden flex flex-col h-full`}>
                  <div className={`w-14 h-14 rounded-2xl ${color.bg} ${color.text} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                    <IconComponent size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--primary)] transition-colors tracking-tight">{guide.title}</h3>
                  <p className="text-[var(--foreground)]/60 font-serif leading-relaxed flex-grow">
                    {guide.summary}
                  </p>
                  <div className="mt-8 pt-6 border-t border-[var(--surface-border)] flex items-center text-sm font-bold text-[var(--primary)] group-hover:translate-x-2 transition-transform">
                    Ler guia →
                  </div>
                </Link>
              )
            }) : (
              <div className="col-span-full py-20 text-center border border-dashed border-[var(--surface-border)] rounded-3xl">
                <BookOpen className="w-12 h-12 text-[var(--foreground)]/20 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Nenhum guia publicado ainda</h3>
                <p className="text-[var(--foreground)]/60">Volte mais tarde para novos conteúdos de estudo.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
