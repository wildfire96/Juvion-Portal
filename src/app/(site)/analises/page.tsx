import { Header } from "@/components/Header"
import { ScrollToTopButton } from "@/components/ScrollToTopButton"
import dynamic from "next/dynamic"
import Link from "next/link"
import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"

const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer))

export const revalidate = 60

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  courseOrCollegeName?: string;
  heroImage?: any;
  author?: { name: string; image: any };
  publishedAt: string;
}

export default async function AnalisesPage() {
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

  return (
    <div className="bg-[var(--background)] min-h-screen pt-32">
      <Header />
      
      <main className="pb-24">
        <section className="max-w-7xl mx-auto px-4 md:px-10 mb-20">
          <div className="mb-12">
            <h1 className="text-5xl font-black tracking-tight text-[var(--foreground)] mb-4">Todas as Análises</h1>
            <p className="text-[var(--foreground)]/60 text-lg font-serif max-w-2xl">
              Explore nossa coleção completa de análises definitivas e transparentes das melhores faculdades de tecnologia online e presenciais.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.length > 0 ? posts.map((post, index) => (
              <Link key={post._id} href={`/analise/${post.slug.current}`} className="group flex flex-col bg-[var(--surface)] border border-[var(--surface-border)] rounded-[24px] overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative">
                <div className="absolute inset-0 rounded-[24px] border border-white/50 dark:border-white/5 pointer-events-none z-10"></div>
                
                <div className="w-full aspect-video bg-gray-200 overflow-hidden relative">
                  <Image 
                    src={post.heroImage ? urlForImage(post.heroImage).url() : "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"} 
                    alt={post.title} 
                    fill
                    priority={index < 4}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                    {post.courseOrCollegeName || "Análise"}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--primary)] transition-colors leading-[1.2] tracking-tight">{post.title}</h3>
                  <p className="text-[var(--foreground)]/60 font-serif text-sm line-clamp-3 mb-8 flex-1 leading-relaxed">
                    Leia nossa análise completa sobre {post.courseOrCollegeName || "este tema"}. Confira as notas, mensalidades e o que se destaca.
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
                      <p className="text-[11px] font-black uppercase tracking-widest text-[var(--foreground)]/80">{post.author?.name || "Editorial Juvion"}</p>
                      <p className="text-xs text-[var(--foreground)]/50 mt-1 font-medium">{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('pt-BR') : "Hoje"} • 8 min</p>
                    </div>
                  </div>
                </div>
              </Link>
            )) : (
              <p className="text-[var(--foreground)]/60 col-span-full">Nenhuma análise publicada ainda.</p>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
