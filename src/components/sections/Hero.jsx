import './Hero.css'

// Pure prop-driven: every field comes from a page's content object, so the
// same component renders any of the hundreds of programmatic pages.
function Hero({ headline, subheadline, primaryCta, secondaryCta, trustBadges = [] }) {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <span className="eyebrow">Built for focused prep</span>
        <h1 className="hero__headline">{headline}</h1>
        <p className="hero__subheadline">{subheadline}</p>

        <div className="hero__actions">
          {primaryCta && (
            <a href={primaryCta.href} className="btn btn-primary">
              {primaryCta.label}
            </a>
          )}
          {secondaryCta && (
            <a href={secondaryCta.href} className="btn btn-secondary">
              {secondaryCta.label}
            </a>
          )}
        </div>

        {trustBadges.length > 0 && (
          <ul className="hero__badges">
            {trustBadges.map((badge) => (
              <li key={badge.label}>
                {badge.icon && <span aria-hidden="true">{badge.icon}</span>}
                {badge.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default Hero
