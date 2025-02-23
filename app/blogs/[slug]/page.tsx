import { PortableText, type SanityDocument } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { client } from "@/client"
import Link from "next/link"
import type { PortableTextReactComponents } from "@portabletext/react"
import { ArrowLeft, Calendar, Clock, Twitter } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { GithubIcon } from "lucide-react"

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  slug,
  publishedAt,
  image,
  body,
  "related": *[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3]{
    title,
    slug,
    publishedAt,
    image
  }
}`

const { projectId, dataset } = client.config()
const urlFor = (source: SanityImageSource) => {
  if (!source || !projectId || !dataset) return null
  try {
    return imageUrlBuilder({ projectId, dataset }).image(source)
  } catch (error) {
    console.error("Error generating image URL:", error)
    return null
  }
}

const options = { next: { revalidate: 30 } }

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, params, options)
  const postImageUrl = post.image ? urlFor(post.image)?.width(1920).height(1080).url() : null

  return (
    <div className="min-h-screen text-gray-100 relative overflow-hidden bg-[#111318]">
      {/* Background Pattern */}
      <div
        className="fixed inset-0 w-full h-full z-0"
        dangerouslySetInnerHTML={{
          __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" style="width:100%;height:100%">
          <defs>
            <linearGradient id="metallicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#1a1f25;stop-opacity:0.8">
                <animate attributeName="stop-opacity" values="0.8;0.9;0.8" dur="8s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" style="stop-color:#2a3038;stop-opacity:0.9">
                <animate attributeName="stop-opacity" values="0.9;1;0.9" dur="8s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" style="stop-color:#1a1f25;stop-opacity:0.8">
                <animate attributeName="stop-opacity" values="0.8;0.9;0.8" dur="8s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#3a4150" stroke-width="0.5" stroke-opacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#metallicGrad)"/>
          <rect width="100" height="100" fill="url(#grid)"/>
        </svg>`,
        }}
      />
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        {postImageUrl && (
          <div className="relative w-full h-[60vh] min-h-[400px] max-h-[600px]">
            <div className="absolute inset-0">
              <img src={postImageUrl || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0">
              <div className="container max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-blue-300 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {15} mins read
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="container max-w-4xl mt-12 mx-auto px-4 ">
          <Link href="/" className="inline-flex items-center text-sm text-blue-300 hover:text-blue-400 mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back
          </Link>

          {!postImageUrl && (
            <>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
              <div className="flex items-center gap-4 text-blue-300 text-sm mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {15} mins read
                </div>
              </div>
            </>
          )}

          <article className="prose prose-invert prose-lg max-w-none">
            {Array.isArray(post.body) && post.body.length > 0 ? (
              <PortableText value={post.body} components={components} />
            ) : (
              <PortableText
                value={[
                  {
                    _type: "block",
                    children: [
                      {
                        _type: "span",
                        text: "This is a sample content to showcase list styling:",
                      },
                    ],
                  },
                  // ... (rest of the sample content remains the same)
                ]}
                components={components}
              />
            )}
          </article>

          <Separator className="my-8 bg-[#2a3038]" />

          {/* Related Posts */}
          {post.related && post.related.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-8">More Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {post.related.map((relatedPost: any) => {
                  const imageUrl = relatedPost.image ? urlFor(relatedPost.image)?.width(400).height(300).url() : null

                  return (
                    <Link
                      key={relatedPost.slug.current}
                      href={`/blogs/${relatedPost.slug.current}`}
                      className="group bg-[#1a1f25]/80 rounded-xl border border-[#2a3038] overflow-hidden hover:border-blue-500 transition-all duration-300"
                    >
                      {imageUrl && (
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={imageUrl || "/placeholder.svg"}
                            alt={relatedPost.title}
                            className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="font-semibold text-blue-300 group-hover:text-blue-400 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-400 mt-2">
                          {new Date(relatedPost.publishedAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </section>
          )}
        </div>
      </div>

    </div>
  )
}

const components: Partial<PortableTextReactComponents> = {
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-300">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold mt-12 mb-6 text-white">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold mt-10 mb-4 text-white">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold mt-8 mb-3 text-white">{children}</h3>,
    normal: ({ children }) => <p className="mb-6 leading-relaxed text-gray-300">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-300">{children}</blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
    em: ({ children }) => <em className="italic text-gray-200">{children}</em>,
    code: ({ children }) => (
      <code className="bg-[#2a3038] text-blue-300 rounded px-1.5 py-0.5 font-mono text-sm">{children}</code>
    ),
    link: ({ children, value }) => {
      const href = value?.href || "#"
      return (
        <Link
          href={href}
          className="text-blue-400 hover:text-blue-300 underline decoration-2 underline-offset-2 transition-colors"
        >
          {children}
        </Link>
      )
    },
  },
  types: {
    image: ({ value }) => {
      const imageUrl = urlFor(value)?.width(800).url()
      return imageUrl ? (
        <figure className="my-8">
          <img src={imageUrl || "/placeholder.svg"} alt={value.alt || ""} className="rounded-lg w-full" />
          {value.caption && <figcaption className="mt-3 text-center text-sm text-gray-400">{value.caption}</figcaption>}
        </figure>
      ) : null
    },
  },
}

