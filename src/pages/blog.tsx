import { getAllArticles } from 'lib/utils/article'
import { InferGetStaticPropsType } from 'next'
import BlogModule from '@/modules/blog/BlogModule'

export async function getStaticProps() {
  const articles = getAllArticles()

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
