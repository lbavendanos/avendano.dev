import { useArticleContext } from '../../contexts'
import { MDXRemote } from 'next-mdx-remote'

export default function ArticleBody() {
  const { article } = useArticleContext()

  if (!article.mdxRemote) return null

  return (
    <div itemProp="articleBody" className="mt-4 prose dark:prose-invert">
      <MDXRemote {...article.mdxRemote} />
    </div>
  )
}
