import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { getSiteSettings } from '@/lib/sanity/queries'

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings()

  return (
    <div className="flex flex-col min-h-screen">
      <Header siteName={settings?.title} />
      <main className="flex-1">{children}</main>
      <Footer settings={settings} />
    </div>
  )
}
