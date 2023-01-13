import fs from 'fs'
import path from 'path'
import { url } from 'lib/utils/url'
import { GetServerSidePropsContext } from 'next'

export const ARTICLES_PATH = path.join(process.cwd(), '/database/articles')

function createSitemap(slugs: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${slugs
          .map((slug) => {
            return `
                <url>
                    <loc>${url(slug)}</loc>
                </url>
            `
          })
          .join('')}
    </urlset>
`
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const articlesPath = fs.readdirSync(ARTICLES_PATH)
  const articleSlugs = articlesPath.map((fileName) =>
    fileName.replace('.mdx', '')
  )
  const pages = ['', 'blog']
  const slugs = [...pages, ...articleSlugs]

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  )
  res.write(createSitemap(slugs))
  res.end()

  return {
    props: {},
  }
}

export default function Sitemap() {
  return null
}
