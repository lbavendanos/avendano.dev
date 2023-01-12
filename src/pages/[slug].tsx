import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { serialize } from 'next-mdx-remote/serialize'
import { Article } from '@/lib/types/article'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import ArticleModule from '@/modules/article/ArticleModule'

export const ARTICLES_PATH = path.join(process.cwd(), '/database/articles')

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(ARTICLES_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  const articlePath = path.join(ARTICLES_PATH, `${params?.slug}.mdx`)
  const articleBuffer = fs.readFileSync(articlePath)

  const { content: articleContent, data: articleData } = matter(articleBuffer)

  const readTimeResults = readingTime(articleContent)
  const mdxSource = await serialize(articleContent, {
    scope: articleData,
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  })

  const article: Article = {
    ...(articleData as Article),
    url: params?.slug,
    readingTime: readTimeResults.text,
    mdxRemoteSerializeResult: mdxSource,
  }

  return {
    props: {
      article,
    },
  }
}

export default function Slug(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <ArticleModule {...props} />
}
