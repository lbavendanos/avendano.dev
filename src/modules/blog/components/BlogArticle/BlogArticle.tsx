import { Article } from 'lib/types/article'
import Link from 'next/link'

interface BlogArticleProps {
  article: Article
}

export default function BlogArticle({ article }: BlogArticleProps) {
  if (!article.url) return null

  return (
    <Link href={article.url} className="w-full">
      {article.title && (
        <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
          {article.title}
        </h4>
      )}
      {article.description && (
        <p className="text-gray-600 dark:text-gray-400">
          {article.description}
        </p>
      )}
    </Link>
  )
}
