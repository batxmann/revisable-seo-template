import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

// Global chrome, shared by every programmatic page. Purely prop-driven so
// swapping siteConfig.js (or passing different props) re-skins every page
// at once without touching this component.
function Navbar({ brand, navLinks = [], cta }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand" onClick={() => setIsOpen(false)}>
          {brand}
        </Link>

        <nav className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          {cta && (
            <a href={cta.href} className="btn btn-primary navbar__cta">
              {cta.label}
            </a>
          )}
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar
