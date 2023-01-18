import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { Article, Articles } from 'lib/types/article'

const ARTICLES_PATH = '/database/articles'

export function getArticle(slug: string): Article {
  const basePath = process.cwd()
  const fileName = `${slug}.mdx`
  const fullPath = path.join(basePath, ARTICLES_PATH, fileName)
  const buffer = fs.readFileSync(fullPath)

  const { content, data } = matter(buffer)

  return {
    ...(data as Article),
    slug,
    readingTime: readingTime(content).text,
    content,
  }
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
