import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ScrollToTopButton } from "@/components/ScrollToTopButton"
import { ReadingProgressBar } from "@/components/ReadingProgressBar"
import { client } from "@/sanity/lib/client"
import { PortableText } from '@portabletext/react'
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import type { Metadata, ResolvingMetadata } from "next"

export const revalidate = 60

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params
  const guide = await client.fetch(`
    *[_type == "guide" && slug.current == $slug][0] {
      title,
      seoTitle,
      seoDescription,
      summary
    }
  `, { slug })

  if (!guide) return {}

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: guide.seoTitle || guide.title,
    description: guide.seoDescription || guide.summary,
    openGraph: {
      title: guide.seoTitle || guide.title,
      description: guide.seoDescription || guide.summary,
      images: previousImages,
    },
    twitter: {
      card: "summary_large_image",
      title: guide.seoTitle || guide.title,
      description: guide.seoDescription || guide.summary,
    },
  }
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = await client.fetch(`
    *[_type == "guide" && slug.current == $slug][0] {
      title,
      summary,
      body,
      publishedAt
    }
  `, { slug })

  if (!guide) {
    notFound()
  }

  return (
    <div className="bg-[var(--background)] min-h-screen">
      <ReadingProgressBar />
      <Header />
      
      <main className="pb-24 pt-32">
        <article className="max-w-4xl mx-auto px-6 lg:px-8">
          
          <Link href="/guides" className="inline-flex items-center gap-2 text-[var(--primary)] font-bold text-sm hover:underline mb-12 transition-all hover:-translate-x-1">
            <ArrowLeft size={16} /> Back to Guides
          </Link>

          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[var(--foreground)] mb-6 leading-[1.1]">
              {guide.title}
            </h1>
            <p className="text-xl text-[var(--foreground)]/60 font-serif leading-relaxed border-l-4 border-[var(--primary)] pl-6 py-2">
              {guide.summary}
            </p>
            <div className="mt-8 flex items-center gap-4 text-sm text-[var(--foreground)]/40 font-medium tracking-wide">
              <span>{new Date(guide.publishedAt || Date.now()).toLocaleDateString('en-US')}</span>
              <span>•</span>
              <span>Study Guide</span>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none font-serif text-[var(--foreground)]/80 leading-[1.8] space-y-8">
            {guide.body ? (
              <PortableText value={guide.body} />
            ) : (
              <p>Content is empty.</p>
            )}
          </div>
          
        </article>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
