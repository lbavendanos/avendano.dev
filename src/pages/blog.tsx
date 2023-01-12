import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Article, Articles } from 'lib/types/article'
import { InferGetStaticPropsType } from 'next'
import BlogModule from '@/modules/blog/BlogModule'

export const ARTICLES_PATH = path.join(process.cwd(), '/database/articles')

export async function getStaticProps() {
  const files = fs.readdirSync(ARTICLES_PATH)
  const articles: Articles = files.map((fileName): Article => {
    const slug = fileName.replace('.mdx', '')
    const articleFilePath = path.join(ARTICLES_PATH, `${slug}.mdx`)
    const readFile = fs.readFileSync(articleFilePath)
    const { data } = matter(readFile)

    return { ...(data as Article), url: slug }
  })

  return {
    props: {
      articles,
    },
  }
}

export default function Blog(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <BlogModule {...props} />
}
