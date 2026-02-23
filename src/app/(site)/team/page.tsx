import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getAllTeamMembers } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/image'

export const metadata: Metadata = { title: 'Our Team' }

export default async function TeamPage() {
  const team = await getAllTeamMembers()

  return (
    <>
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-blue-100 text-lg">The passionate people behind our work.</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {team.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">👥</div>
              <p>Team profiles coming soon!</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member._id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden text-center p-6">
                  <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-blue-100">
                    {member.photo ? (
                      <Image
                        src={urlFor(member.photo).width(224).height(224).url()}
                        alt={member.photo.alt ?? member.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl text-blue-200">
                        👤
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">{member.name}</h3>
                  <p className="text-blue-600 text-sm font-medium mt-1">{member.role}</p>
                  {member.bio && (
                    <p className="text-gray-500 text-sm mt-3 leading-relaxed line-clamp-3">{member.bio}</p>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-gray-400 hover:text-blue-700 transition-colors"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to join the team?</h2>
          <p className="text-gray-500 mb-6">We're always looking for talented people to work with.</p>
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
