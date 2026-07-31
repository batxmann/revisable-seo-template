import { z } from 'zod'

// Every landing-page data entry must satisfy this shape.
// Optional fields let a section render conditionally (e.g. no testimonials yet).

const ctaButtonSchema = z.object({
  label: z.string(),
  href: z.string(),
})

const seoSchema = z.object({
  title: z.string(),
  description: z.string(),
  canonical: z.string().optional(),
})

const heroSchema = z.object({
  headline: z.string(),
  subheadline: z.string(),
  primaryCta: ctaButtonSchema,
  secondaryCta: ctaButtonSchema.optional(),
  image: z.string().optional(),
})

const trustBadgeSchema = z.object({
  icon: z.string(),
  label: z.string(),
})

const featureSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string().optional(),
  href: z.string().optional(),
})

const benefitSchema = z.object({
  stat: z.string().optional(),
  title: z.string(),
  description: z.string(),
})

const ctaSectionSchema = z.object({
  headline: z.string(),
  subheadline: z.string().optional(),
  primaryCta: ctaButtonSchema,
})

const testimonialSchema = z.object({
  name: z.string(),
  outcome: z.string(),
  quote: z.string(),
  avatar: z.string().optional(),
})

const faqItemSchema = z.object({
  question: z.string(),
  answer: z.string(),
})

const relatedPageSchema = z.object({
  label: z.string(),
  href: z.string(),
})

export const pageContentSchema = z.object({
  slug: z.string(),
  category: z.string(),
  seo: seoSchema,
  hero: heroSchema,
  trustBadges: z.array(trustBadgeSchema).default([]),
  features: z.array(featureSchema).default([]),
  benefits: z.array(benefitSchema).default([]),
  cta: ctaSectionSchema.optional(),
  testimonials: z.array(testimonialSchema).default([]),
  faq: z.array(faqItemSchema).default([]),
  relatedPages: z.array(relatedPageSchema).default([]),
})

export function validatePageContent(data) {
  return pageContentSchema.parse(data)
}
