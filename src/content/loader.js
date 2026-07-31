import examsData from './data/exams.json'
import { validatePageContent } from './schema/pageSchema'

// All content sources get merged here. Adding a new JSON file/category
// means adding one entry to this array — nothing else in the app changes.
const SOURCES = [examsData]

const allEntries = SOURCES.flat()

/**
 * Returns the validated content object for a given category/slug pair,
 * or null if no matching entry exists.
 */
export function getPageData(category, slug) {
  const entry = allEntries.find(
    (item) => item.category === category && item.slug === slug,
  )
  if (!entry) return null
  return validatePageContent(entry)
}

/**
 * Enumerates every {category, slug} pair across all content sources.
 * Used to generate routes/sitemaps/static params.
 */
export function getAllPageParams() {
  return allEntries.map(({ category, slug }) => ({ category, slug }))
}
