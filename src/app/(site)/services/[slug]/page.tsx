import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getServiceBySlug, getServicePaths } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/image'
import { PortableText } from 'next-sanity'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const paths = await getServicePaths()
  return paths
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = await getServiceBySlug(slug)
  if (!service) return {}
  return { title: service.title, description: service.excerpt }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = await getServiceBySlug(slug)
  if (!service) notFound()

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/services" className="text-blue-200 hover:text-white text-sm mb-6 inline-block">
            ← Back to Services
          </Link>
          {service.icon && <div className="text-5xl mb-4">{service.icon}</div>}
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          <p className="text-blue-100 text-lg max-w-2xl">{service.excerpt}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {service.image && (
            <div className="relative h-72 rounded-2xl overflow-hidden mb-12 bg-gray-100">
              <Image
                src={urlFor(service.image).width(1200).height(600).url()}
                alt={service.image.alt ?? service.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {service.body && service.body.length > 0 ? (
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-blue-700">
              <PortableText value={service.body as Parameters<typeof PortableText>[0]['value']} />
            </div>
          ) : (
            <p className="text-gray-600 text-lg">{service.excerpt}</p>
          )}

          <div className="mt-12 p-8 bg-blue-50 rounded-2xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Interested in this service?</h2>
            <p className="text-gray-500 mb-6">Get in touch and we'll put together the right solution for you.</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
