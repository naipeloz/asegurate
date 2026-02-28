import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://asegurate.uy/sitemap.xml',
    host: 'https://asegurate.uy',
  }
}
