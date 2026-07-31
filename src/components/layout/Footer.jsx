import './Footer.css'

function Footer({ brand, tagline, columns = [], socialLinks = [] }) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__brand-name">{brand}</span>
          {tagline && <p>{tagline}</p>}
          {socialLinks.length > 0 && (
            <ul className="footer__social">
              {socialLinks.map((social) => (
                <li key={social.href}>
                  <a href={social.href} target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="footer__columns">
          {columns.map((column) => (
            <div key={column.title} className="footer__column">
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          &copy; {year} {brand}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
