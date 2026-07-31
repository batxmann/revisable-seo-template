import { getAllPageParams } from '../content/loader'

// Single source of truth for "which pages exist". Routing, sitemap
// generation, and any future prerender step all read from this.
export function generateStaticParams() {
  return getAllPageParams()
}
