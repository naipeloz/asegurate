import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllServices, type Service } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/image'

export const metadata: Metadata = { title: 'Services' }

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug.current}`}
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md overflow-hidden transition-all flex flex-col"
    >
      {service.image && (
        <div className="relative h-52 bg-gray-100">
          <Image
            src={urlFor(service.image).width(600).height(400).url()}
            alt={service.image.alt ?? service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        {service.icon && <div className="text-3xl mb-3">{service.icon}</div>}
        <h3 className="font-semibold text-gray-900 text-xl mb-2 group-hover:text-blue-700 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.excerpt}</p>
        <span className="mt-4 text-sm font-medium text-blue-700 group-hover:underline">
          Learn more →
        </span>
      </div>
    </Link>
  )
}

export default async function ServicesPage() {
  const services = await getAllServices()

  return (
    <>
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-blue-100 text-lg">
            Comprehensive solutions tailored to your needs.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {services.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">🛠️</div>
              <p>Services coming soon. Check back later!</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard key={service._id} service={service} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Not sure which service is right for you?
          </h2>
          <p className="text-gray-500 mb-6">
            Our team is here to help you find the best solution.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors"
          >
            Talk to an expert
          </Link>
        </div>
      </section>
    </>
  )
}
