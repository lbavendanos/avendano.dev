import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { serialize } from 'next-mdx-remote/serialize'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import SlugModule from '@/modules/slug/SlugModule'

export const POSTS_PATH = path.join(process.cwd(), '/src/modules/slug/posts')

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(POSTS_PATH)
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
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const readTimeResults = readingTime(content)
  const mdxSource = await serialize(content, {
    scope: data,
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  })

  return {
    props: {
      source: mdxSource,
      metas: data,
      readingTime: readTimeResults.text,
    },
  }
}

export default function Slug(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <SlugModule {...props} />
}
