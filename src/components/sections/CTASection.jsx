import './CTASection.css'

function CTASection({ headline, subheadline, primaryCta }) {
  if (!headline || !primaryCta) return null

  return (
    <section className="cta">
      <div className="container cta__inner">
        <h2>{headline}</h2>
        {subheadline && <p>{subheadline}</p>}
        <a href={primaryCta.href} className="btn btn-primary cta__btn">
          {primaryCta.label}
        </a>
      </div>
    </section>
  )
}

export default CTASection
