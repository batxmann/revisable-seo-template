import './FeaturesSection.css'

function FeaturesSection({
  id = 'features',
  title = 'Everything you need to prepare',
  subtitle,
  features = [],
}) {
  if (features.length === 0) return null

  return (
    <section id={id} className="features">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Features</span>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>

        <div className="features__grid">
          {features.map((feature) => (
            <article key={feature.title} className="features__card">
              {feature.icon && <div className="features__icon">{feature.icon}</div>}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              {feature.href && (
                <a className="features__link" href={feature.href}>
                  Explore &rarr;
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
