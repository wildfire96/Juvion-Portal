import { client } from "@/sanity/lib/client"
import { notFound } from "next/navigation"
import { ArticleClient } from "@/components/ArticleClient"

export const revalidate = 60

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
