import type { Metadata } from 'next'
import { getSiteSettings } from '@/lib/sanity/queries'

export const metadata: Metadata = { title: 'Contact' }

export default async function ContactPage() {
  const settings = await getSiteSettings()

  return (
    <>
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg">We're here to help. Reach out and we'll get back to you shortly.</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h2>
            <div className="space-y-5 text-gray-600">
              {settings?.email && (
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">✉️</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Email</p>
                    <a href={`mailto:${settings.email}`} className="text-blue-700 hover:underline">
                      {settings.email}
                    </a>
                  </div>
                </div>
              )}
              {settings?.phone && (
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">📞</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Phone</p>
                    <a href={`tel:${settings.phone}`} className="text-blue-700 hover:underline">
                      {settings.phone}
                    </a>
                  </div>
                </div>
              )}
              {settings?.address && (
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">📍</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Address</p>
                    <p className="whitespace-pre-line">{settings.address}</p>
                  </div>
                </div>
              )}
              {!settings?.email && !settings?.phone && !settings?.address && (
                <p className="text-gray-400">Contact information will appear here once configured in the CMS.</p>
              )}
            </div>

            {settings?.socialLinks && (
              <div className="mt-8">
                <p className="font-semibold text-gray-900 text-sm mb-3">Follow us</p>
                <div className="flex gap-3">
                  {settings.socialLinks.linkedin && (
                    <a href={settings.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                      className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:text-blue-700 hover:border-blue-300 transition-colors">
                      LinkedIn
                    </a>
                  )}
                  {settings.socialLinks.twitter && (
                    <a href={settings.socialLinks.twitter} target="_blank" rel="noopener noreferrer"
                      className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:text-blue-700 hover:border-blue-300 transition-colors">
                      Twitter / X
                    </a>
                  )}
                  {settings.socialLinks.instagram && (
                    <a href={settings.socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                      className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:text-blue-700 hover:border-blue-300 transition-colors">
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us more..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors"
              >
                Send message
              </button>
              <p className="text-xs text-gray-400 text-center">
                We typically respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
