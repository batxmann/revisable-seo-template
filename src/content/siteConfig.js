// Site-wide chrome (nav, footer) shared by every programmatic page.
// Kept separate from per-page content: hundreds of landing pages reuse
// this unchanged, while Hero/Features/Benefits/CTA vary per page.

export const siteConfig = {
  brand: 'StudyStack',
  tagline: 'AI-personalized prep for every exam you’re chasing.',
  navLinks: [
    { label: 'Features', href: '#features' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Pricing', href: '#pricing' },
  ],
  navCta: { label: 'Start Learning Free', href: '#download' },
  footer: {
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'Features', href: '#features' },
          { label: 'Benefits', href: '#benefits' },
          { label: 'Pricing', href: '#pricing' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '#about' },
          { label: 'Careers', href: '#careers' },
          { label: 'Contact', href: '#contact' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy', href: '#privacy' },
          { label: 'Terms', href: '#terms' },
        ],
      },
    ],
    socialLinks: [
      { label: 'X', href: 'https://x.com' },
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'LinkedIn', href: 'https://linkedin.com' },
    ],
  },
}
