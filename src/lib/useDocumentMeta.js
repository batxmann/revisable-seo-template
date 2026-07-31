import { useEffect } from 'react'

function setMeta(attr, key, content) {
  const el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!content) {
    el?.remove()
    return
  }
  if (el) {
    el.setAttribute('content', content)
    return
  }
  const created = document.createElement('meta')
  created.setAttribute(attr, key)
  created.setAttribute('content', content)
  document.head.appendChild(created)
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!href) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setRobots(content) {
  setMeta('name', 'robots', content)
}

/**
 * Applies per-page SEO fields to the document head on every route change.
 * This is a CSR app, so this runs client-side after mount; migrating to
 * SSR/SSG later would move this same data into server-rendered <head>
 * output instead of changing where the data comes from.
 */
export function useDocumentMeta({ title, description, canonical, noindex = false } = {}) {
  useEffect(() => {
    if (title) document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)

    if (canonical) {
      const absoluteUrl = new URL(canonical, window.location.origin).href
      setCanonical(absoluteUrl)
      setMeta('property', 'og:url', absoluteUrl)
    } else {
      setCanonical(null)
    }

    setRobots(noindex ? 'noindex, nofollow' : null)

    return () => setRobots(null)
  }, [title, description, canonical, noindex])
}
