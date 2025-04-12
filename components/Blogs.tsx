import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...4]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function Blogs() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto max-w-5xl p-8">
      <h1 className="text-4xl text-center font-bold mb-8">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {posts.map((post) => (
          <Link 
            href={`/blogs/${post.slug.current}`}
            key={post._id}
            className="group"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold group-hover:underline">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </Link>
        ))}
        <div className="ml-40 font-semibold text-2xl">
          More coming soon...
        </div>
      </div>
    </main>
  );
}