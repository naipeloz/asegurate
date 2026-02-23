import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  getFeaturedServices,
  getLatestNewsPosts,
  getSiteSettings,
  type Service,
  type NewsPost,
} from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/image'

export const metadata: Metadata = {
  title: 'Home',
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug.current}`}
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md p-6 transition-all"
    >
      {service.icon && (
        <div className="text-3xl mb-4">{service.icon}</div>
      )}
      <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-blue-700 transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{service.excerpt}</p>
      <span className="mt-4 inline-block text-sm font-medium text-blue-700 group-hover:underline">
        Learn more →
      </span>
    </Link>
  )
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
      className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md overflow-hidden transition-all"
    >
      {post.coverImage && (
        <div className="relative h-48 bg-gray-100">
          <Image
            src={urlFor(post.coverImage).width(600).height(400).url()}
            alt={post.coverImage.alt ?? post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-5 flex-1 flex flex-col">
        {post.category && (
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
            {post.category}
          </span>
        )}
        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="text-gray-500 text-sm leading-relaxed flex-1">{post.excerpt}</p>
        )}
        <p className="mt-3 text-xs text-gray-400">{date}</p>
      </div>
    </Link>
  )
}

export default async function HomePage() {
  const [services, newsPosts, settings] = await Promise.all([
    getFeaturedServices(),
    getLatestNewsPosts(3),
    getSiteSettings(),
  ])

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            {settings?.tagline ?? 'Your trusted partner for what matters most'}
          </h1>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            {settings?.description ??
              'We help you navigate complex decisions with clarity, confidence, and expertise.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      {services.length > 0 && (
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
              <p className="mt-3 text-gray-500">Solutions designed to protect and empower you.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard key={service._id} service={service} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/services"
                className="inline-block px-6 py-3 bg-blue-700 text-white font-medium rounded-xl hover:bg-blue-800 transition-colors"
              >
                View all services
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Why Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why choose us?</h2>
            <div className="space-y-5">
              {[
                { icon: '🎯', title: 'Expert guidance', desc: 'Years of industry experience working on your side.' },
                { icon: '🤝', title: 'Personal attention', desc: 'We treat every client as our only client.' },
                { icon: '🔒', title: 'Trusted & transparent', desc: 'No hidden fees. No surprises. Just results.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-8 inline-block px-6 py-3 bg-blue-700 text-white font-medium rounded-xl hover:bg-blue-800 transition-colors"
            >
              About us
            </Link>
          </div>
          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <div className="text-5xl font-bold text-blue-700 mb-2">100%</div>
            <p className="text-gray-600 mb-6">Client satisfaction commitment</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '10+', label: 'Years of experience' },
                { value: '500+', label: 'Clients served' },
                { value: '50+', label: 'Services available' },
                { value: '24/7', label: 'Support available' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-blue-700">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      {newsPosts.length > 0 && (
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
              <p className="mt-3 text-gray-500">Stay informed with the latest updates.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsPosts.map((post) => (
                <NewsCard key={post._id} post={post} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/news"
                className="inline-block px-6 py-3 border-2 border-blue-700 text-blue-700 font-medium rounded-xl hover:bg-blue-50 transition-colors"
              >
                All news
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-blue-100 mb-8">
            Talk to one of our experts today and find the right solution for you.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
          >
            Contact us now
          </Link>
        </div>
      </section>
    </>
  )
}
