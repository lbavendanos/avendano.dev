import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { config } from './helpers'
import { objClear } from './object'
import { Article, Articles } from 'lib/types/article'

const ARTICLES_PATH = '/database/articles'

export function getArticle(slug: string): Article {
  const basePath = process.cwd()
  const fileName = `${slug}.mdx`
  const fullPath = path.join(basePath, ARTICLES_PATH, fileName)
  const buffer = fs.readFileSync(fullPath)

  const { content, data } = matter(buffer)

  const formattedCreatedAt = data.createdAt
    ? new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: config<string>('app.timezone'),
      }).format(new Date(data.createdAt))
    : null

  return objClear({
    ...(data as Article),
    slug,
    readingTime: readingTime(content).text,
    content,
    formattedCreatedAt,
  })
}

export function getAllArticleSlugs(): string[] {
  const fullPath = path.join(process.cwd(), ARTICLES_PATH)

  return fs
    .readdirSync(fullPath)
    .filter((path) => /\.mdx?$/.test(path))
    .map((path) => path.replace(/\.mdx?$/, ''))
}

export function getAllArticles(): Articles {
  return getAllArticleSlugs().map((slug): Article => {
    return getArticle(slug)
  })
}
