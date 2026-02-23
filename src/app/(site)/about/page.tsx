import type { Metadata } from 'next'
import Link from 'next/link'
import { getSiteSettings, getAllTeamMembers } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/image'
import Image from 'next/image'

export const metadata: Metadata = { title: 'About Us' }

export default async function AboutPage() {
  const [settings, team] = await Promise.all([getSiteSettings(), getAllTeamMembers()])

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-blue-100 text-lg">
            {settings?.tagline ?? 'Learn more about who we are and what drives us.'}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {settings?.description ??
              'We are committed to providing exceptional service and guidance to our clients. Our team of experts works tirelessly to ensure that every interaction is meaningful and every solution is tailored to your needs.'}
          </p>
          <div className="grid sm:grid-cols-3 gap-8 mt-12">
            {[
              { icon: '🎯', title: 'Our Vision', desc: 'To be the most trusted partner in our industry, known for our integrity and results.' },
              { icon: '💡', title: 'Our Values', desc: 'Transparency, excellence, and genuine care for every person we work with.' },
              { icon: '🚀', title: 'Our Approach', desc: 'Combining deep expertise with a personal touch to deliver solutions that truly work.' },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 bg-blue-50 rounded-2xl">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      {team.length > 0 && (
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Meet the Team</h2>
              <p className="mt-3 text-gray-500">The people behind our work.</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {team.slice(0, 4).map((member) => (
                <div key={member._id} className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-blue-100">
                    {member.photo ? (
                      <Image
                        src={urlFor(member.photo).width(200).height(200).url()}
                        alt={member.photo.alt ?? member.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-3xl text-blue-300">
                        👤
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-blue-600">{member.role}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/team"
                className="inline-block px-6 py-3 bg-blue-700 text-white font-medium rounded-xl hover:bg-blue-800 transition-colors"
              >
                Meet the full team
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to work together?</h2>
          <p className="text-gray-500 mb-6">We'd love to hear about your needs.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}
