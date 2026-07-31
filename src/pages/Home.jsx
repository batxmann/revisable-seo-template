import { Link } from 'react-router-dom'
import { generateStaticParams } from '../lib/generateStaticParams'
import { siteConfig } from '../content/siteConfig'

// Dev-only index so every generated page is reachable without typing URLs.
function Home() {
  const pages = generateStaticParams()

  return (
    <main className="container" style={{ padding: '64px 24px' }}>
      <span className="eyebrow">{siteConfig.brand} template</span>
      <h1 style={{ margin: '12px 0 24px' }}>Programmatic pages</h1>
      <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 12 }}>
        {pages.map(({ category, slug }) => (
          <li key={`${category}/${slug}`}>
            <Link
              to={`/${category}/${slug}`}
              style={{ textDecoration: 'none', color: 'var(--accent)', fontWeight: 600 }}
            >
              /{category}/{slug}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Home
