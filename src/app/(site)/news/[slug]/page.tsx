import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getNewsPostBySlug, getNewsPostPaths } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/image'
import { PortableText } from 'next-sanity'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const paths = await getNewsPostPaths()
  return paths
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getNewsPostBySlug(slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getNewsPostBySlug(slug)
  if (!post) notFound()

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

  return (
    <article className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <Link href="/news" className="text-blue-700 hover:underline text-sm mb-8 inline-block">
          ← Back to News
        </Link>

        {post.category && (
          <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-wide mb-3">
            {post.category}
          </span>
        )}

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

        <div className="flex items-center gap-4 mb-8 text-sm text-gray-400">
          {post.author && (
            <div className="flex items-center gap-2">
              {post.author.photo && (
                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-blue-100">
                  <Image
                    src={urlFor(post.author.photo).width(64).height(64).url()}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <span>By {post.author.name}</span>
            </div>
          )}
          {date && <span>{date}</span>}
        </div>

        {post.coverImage && (
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden mb-10 bg-gray-100">
            <Image
              src={urlFor(post.coverImage).width(1200).height(600).url()}
              alt={post.coverImage.alt ?? post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {post.excerpt && (
          <p className="text-xl text-gray-500 mb-8 leading-relaxed">{post.excerpt}</p>
        )}

        {post.body && post.body.length > 0 && (
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-blue-700">
            <PortableText value={post.body as Parameters<typeof PortableText>[0]['value']} />
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link
            href="/news"
            className="text-blue-700 hover:underline text-sm font-medium"
          >
            ← Back to all news
          </Link>
        </div>
      </div>
    </article>
  )
}
