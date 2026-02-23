import { groq } from 'next-sanity'
import { client } from './client'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface SanityImage {
  asset: { _ref: string }
  alt?: string
  hotspot?: { x: number; y: number }
}

export interface Service {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  icon?: string
  image?: SanityImage
  body?: unknown[]
  order: number
  featured: boolean
}

export interface TeamMember {
  _id: string
  name: string
  role: string
  photo?: SanityImage
  bio?: string
  email?: string
  linkedin?: string
  order: number
}

export interface NewsPost {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  category?: string
  excerpt?: string
  coverImage?: SanityImage
  body?: unknown[]
  author?: Pick<TeamMember, '_id' | 'name' | 'photo'>
}

export interface SiteSettings {
  title: string
  tagline?: string
  description?: string
  logo?: SanityImage
  email?: string
  phone?: string
  address?: string
  socialLinks?: {
    twitter?: string
    linkedin?: string
    instagram?: string
    facebook?: string
  }
}

// ─── Queries ─────────────────────────────────────────────────────────────────

const serviceFields = groq`
  _id, title, slug, excerpt, icon, image, order, featured
`

const newsPostFields = groq`
  _id, title, slug, publishedAt, category, excerpt, coverImage,
  "author": author->{ _id, name, photo }
`

// Site Settings
export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(
    groq`*[_type == "siteSettings"][0]{ title, tagline, description, logo, email, phone, address, socialLinks }`,
    {},
    { next: { revalidate: 3600 } }
  )
}

// Services
export async function getAllServices(): Promise<Service[]> {
  return client.fetch(
    groq`*[_type == "service"] | order(order asc) { ${serviceFields}, body }`,
    {},
    { next: { revalidate: 60 } }
  )
}

export async function getFeaturedServices(): Promise<Service[]> {
  return client.fetch(
    groq`*[_type == "service" && featured == true] | order(order asc)[0...6] { ${serviceFields} }`,
    {},
    { next: { revalidate: 60 } }
  )
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return client.fetch(
    groq`*[_type == "service" && slug.current == $slug][0] { ${serviceFields}, body }`,
    { slug },
    { next: { revalidate: 60 } }
  )
}

// Team
export async function getAllTeamMembers(): Promise<TeamMember[]> {
  return client.fetch(
    groq`*[_type == "teamMember"] | order(order asc) { _id, name, role, photo, bio, email, linkedin, order }`,
    {},
    { next: { revalidate: 3600 } }
  )
}

// News
export async function getAllNewsPosts(): Promise<NewsPost[]> {
  return client.fetch(
    groq`*[_type == "newsPost"] | order(publishedAt desc) { ${newsPostFields} }`,
    {},
    { next: { revalidate: 60 } }
  )
}

export async function getLatestNewsPosts(count = 3): Promise<NewsPost[]> {
  return client.fetch(
    groq`*[_type == "newsPost"] | order(publishedAt desc)[0...$count] { ${newsPostFields} }`,
    { count },
    { next: { revalidate: 60 } }
  )
}

export async function getNewsPostBySlug(slug: string): Promise<NewsPost | null> {
  return client.fetch(
    groq`*[_type == "newsPost" && slug.current == $slug][0] { ${newsPostFields}, body }`,
    { slug },
    { next: { revalidate: 60 } }
  )
}

export async function getNewsPostPaths(): Promise<{ slug: string }[]> {
  const posts = await client.fetch<{ slug: { current: string } }[]>(
    groq`*[_type == "newsPost"]{ slug }`,
    {},
    { next: { revalidate: 60 } }
  )
  return posts.map((p) => ({ slug: p.slug.current }))
}

export async function getServicePaths(): Promise<{ slug: string }[]> {
  const services = await client.fetch<{ slug: { current: string } }[]>(
    groq`*[_type == "service"]{ slug }`,
    {},
    { next: { revalidate: 60 } }
  )
  return services.map((s) => ({ slug: s.slug.current }))
}
