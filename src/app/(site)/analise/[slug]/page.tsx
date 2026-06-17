import { client } from "@/sanity/lib/client"
import { notFound } from "next/navigation"
import { ArticleClient } from "@/components/ArticleClient"

import type { Metadata, ResolvingMetadata } from "next"

export const revalidate = 60

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      title,
      seoTitle,
      seoDescription,
      "heroImageUrl": heroImage.asset->url
    }
  `, { slug })

  if (!post) return {}

  const previousImages = (await parent).openGraph?.images || []
  const ogImage = post.heroImageUrl || "/opengraph-image.png"

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
        ...previousImages,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle || post.title,
      description: post.seoDescription,
      images: [ogImage],
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const post = await client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      courseOrCollegeName,
      heroImage,
      author->{name, image},
      publishedAt,
      rating,
      monthlyPrice,
      affiliateLink,
      pros,
      cons,
      body
    }
  `, { slug })

  if (!post) {
    notFound()
  }

  return <ArticleClient post={post} />
}
