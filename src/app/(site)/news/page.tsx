import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllNewsPosts, type NewsPost } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/image'

export const metadata: Metadata = { title: 'News' }

const CATEGORY_LABELS: Record<string, string> = {
  company: 'Company News',
  industry: 'Industry Update',
  tips: 'Tips & Guides',
  announcements: 'Announcements',
}

function NewsCard({ post }: { post: NewsPost }) {
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''
  return (
    <Link
      href={`/news/${post.slug.current}`}
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md overflow-hidden transition-all flex flex-col"
    >
      {post.coverImage && (
        <div className="relative h-52 bg-gray-100">
          <Image
            src={urlFor(post.coverImage).width(600).height(400).url()}
            alt={post.coverImage.alt ?? post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          {post.category && (
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
              {CATEGORY_LABELS[post.category] ?? post.category}
            </span>
          )}
          {date && <span className="text-xs text-gray-400">{date}</span>}
        </div>
        <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-blue-700 transition-colors">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="text-gray-500 text-sm leading-relaxed flex-1">{post.excerpt}</p>
        )}
        {post.author && (
          <p className="mt-4 text-xs text-gray-400">By {post.author.name}</p>
        )}
      </div>
    </Link>
  )
}

export default async function NewsPage() {
  const posts = await getAllNewsPosts()

  return (
    <>
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">News & Updates</h1>
          <p className="text-blue-100 text-lg">Stay informed with the latest from our team.</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">📰</div>
              <p>No articles yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <NewsCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
