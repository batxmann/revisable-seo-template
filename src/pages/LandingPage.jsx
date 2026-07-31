import { useParams } from 'react-router-dom'
import { getPageData } from '../content/loader'
import { siteConfig } from '../content/siteConfig'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import FeaturesSection from '../components/sections/FeaturesSection'
import BenefitsSection from '../components/sections/BenefitsSection'
import CTASection from '../components/sections/CTASection'

// Thin orchestrator: fetches one content object and hands its fields to
// section components. No copy lives here — swap the JSON entry and the
// whole page changes, for any number of programmatic pages.
function LandingPage() {
  const { category, slug } = useParams()
  const data = getPageData(category, slug)

  useDocumentMeta(
    data
      ? data.seo
      : {
          title: `Page not found | ${siteConfig.brand}`,
          description: undefined,
          canonical: undefined,
          noindex: true,
        },
  )

  if (!data) {
    return (
      <>
        <Navbar brand={siteConfig.brand} navLinks={siteConfig.navLinks} cta={siteConfig.navCta} />
        <main className="container" style={{ padding: '96px 24px', textAlign: 'center' }}>
          <h1>Page not found</h1>
          <p>
            No content entry for <code>{category}/{slug}</code>.
          </p>
        </main>
        <Footer {...siteConfig.footer} brand={siteConfig.brand} tagline={siteConfig.tagline} />
      </>
    )
  }

  return (
    <>
      <Navbar brand={siteConfig.brand} navLinks={siteConfig.navLinks} cta={siteConfig.navCta} />
      <main>
        <Hero {...data.hero} trustBadges={data.trustBadges} />
        <FeaturesSection features={data.features} />
        <BenefitsSection benefits={data.benefits} />
        {data.cta && <CTASection {...data.cta} />}
      </main>
      <Footer {...siteConfig.footer} brand={siteConfig.brand} tagline={siteConfig.tagline} />
    </>
  )
}

export default LandingPage
