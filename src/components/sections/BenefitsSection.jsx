import './BenefitsSection.css'

function BenefitsSection({
  id = 'benefits',
  title = 'Built to move the needle',
  subtitle,
  benefits = [],
}) {
  if (benefits.length === 0) return null

  return (
    <section id={id} className="benefits">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Why it works</span>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>

        <div className="benefits__grid">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="benefits__card">
              {benefit.stat && <div className="benefits__stat">{benefit.stat}</div>}
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
