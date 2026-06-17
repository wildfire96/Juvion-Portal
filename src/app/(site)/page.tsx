import { Header } from "@/components/Header"
import { ScrollToTopButton } from "@/components/ScrollToTopButton"
import dynamic from "next/dynamic"
import Link from "next/link"
import { BookOpen, GraduationCap, Brain, ArrowRight } from "lucide-react"
import Image from "next/image"
import { HomeHero } from "@/components/HomeHero"
import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"

// Lazy Loading de componentes que ficam abaixo da dobra
const NewsletterForm = dynamic(() => import("@/components/NewsletterForm").then(mod => mod.NewsletterForm))
const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer))

export const revalidate = 60 // ISR de 60 segundos

// Tipo para as análises retornadas do Sanity
type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  courseOrCollegeName?: string;
  heroImage?: any;
  author?: { name: string; image: any };
  publishedAt: string;
}

type Guide = {
  _id: string;
  title: string;
  slug: { current: string };
  icon?: string;
  summary?: string;
}

export default async function Home() {
  const posts: Post[] = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      courseOrCollegeName,
      heroImage,
      author->{name, image},
      publishedAt
    }
  `)

  const guides: Guide[] = await client.fetch(`
    *[_type == "guide"] | order(publishedAt desc)[0...3] {
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

  // Cores dinâmicas para os cards (como estava no mockup)
  const colors = [
    { text: "text-[var(--primary)]", bg: "bg-[var(--primary)]/10" },
    { text: "text-[var(--secondary)]", bg: "bg-[var(--secondary)]/10" },
    { text: "text-[var(--foreground)]", bg: "bg-[var(--foreground)]/10" },
  ]

  return (
    <div className="bg-[var(--background)] min-h-screen">
      <Header />
      
      <main className="pb-24">
        <HomeHero />

        {/* =========================================
            SESSÃO DE ARTIGOS
            ========================================= */}
        <section id="analises" className="max-w-7xl mx-auto px-4 md:px-10 mt-32 mb-20 scroll-mt-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-black tracking-tight text-[var(--foreground)]">Latest Reviews</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.length > 0 ? posts.map((post, index) => (
              <Link key={post._id} href={`/analise/${post.slug.current}`} className="group flex flex-col bg-[var(--surface)] border border-[var(--surface-border)] rounded-[24px] overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative">
                {/* Inner glow trick */}
                <div className="absolute inset-0 rounded-[24px] border border-white/50 dark:border-white/5 pointer-events-none z-10"></div>
                
                <div className="w-full aspect-video bg-gray-200 overflow-hidden relative">
                  <Image 
                    src={post.heroImage ? urlForImage(post.heroImage).url() : "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"} 
                    alt={post.title} 
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                    {post.courseOrCollegeName || "Review"}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--primary)] transition-colors leading-[1.2] tracking-tight">{post.title}</h3>
                  <p className="text-[var(--foreground)]/60 font-serif text-sm line-clamp-3 mb-8 flex-1 leading-relaxed">
                    Read our full review on {post.courseOrCollegeName || "this topic"}. Check the grades, tuition fees, and what stands out.
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-[var(--surface-border)]">
                    <div className="relative w-10 h-10 rounded-full bg-gray-300 overflow-hidden border border-[var(--surface-border)] shrink-0">
                      <Image 
                        src={post.author?.image ? urlForImage(post.author.image).url() : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"} 
                        alt={post.author?.name || "Juvion Editorial"} 
                        fill 
                        sizes="40px" 
                        className="object-cover" 
                      />
                    </div>
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-widest text-[var(--foreground)]/80">{post.author?.name || "Juvion Editorial"}</p>
                      <p className="text-xs text-[var(--foreground)]/50 mt-1 font-medium">{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US') : "Today"} • 8 min</p>
                    </div>
                  </div>
                </div>
              </Link>
            )) : (
              <p className="text-[var(--foreground)]/60 col-span-full">No reviews published yet. How about creating one in the Sanity dashboard?</p>
            )}
            
          </div>
        </section>

        {/* =========================================
            SESSÃO DE GUIAS DE ESTUDO
            ========================================= */}
        <section id="guias-de-estudo" className="max-w-7xl mx-auto px-4 md:px-10 mt-32 mb-20 scroll-mt-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-black tracking-tight text-[var(--foreground)]">Study Guides</h2>
            <Link href="/guides" className="hidden sm:flex items-center gap-2 text-sm font-bold text-[var(--primary)] hover:underline">
              View all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {guides.length > 0 ? guides.map((guide, index) => {
              const IconComponent = guide.icon && IconMap[guide.icon] ? IconMap[guide.icon] : BookOpen
              const color = colors[index % colors.length]
              
              return (
                <Link key={guide._id} href={`/guides/${guide.slug.current}`} className="group p-8 rounded-[24px] bg-[var(--surface)] border border-[var(--surface-border)] hover:border-[var(--primary)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
                  <div className={`w-12 h-12 rounded-xl ${color.bg} ${color.text} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">{guide.title}</h3>
                  <p className="text-[var(--foreground)]/60 text-sm font-serif leading-relaxed">
                    {guide.summary || "Complete schedule, review methods, and the most common subjects in the exam."}
                  </p>
                </Link>
              )
            }) : (
              <p className="text-[var(--foreground)]/60 col-span-full">No study guides published yet.</p>
            )}

          </div>
        </section>

        <NewsletterForm />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
