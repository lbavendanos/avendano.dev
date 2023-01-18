import { serialize } from 'next-mdx-remote/serialize'
import { getAllArticleSlugs, getArticle } from 'lib/utils/article'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import ArticleModule from '@/modules/article/ArticleModule'

export async function getStaticPaths() {
  const paths = getAllArticleSlugs().map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  if (!params?.slug)
    return {
      notFound: true,
    }

  const article = getArticle(params.slug)

  if (!article.content)
    return {
      notFound: true,
    }

  const mdxRemote = await serialize(article.content, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  })

  return {
    props: {
      article: {
        ...article,
        mdxRemote,
      },
    },
  }
}

export default function Slug(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <ArticleModule {...props} />
}
