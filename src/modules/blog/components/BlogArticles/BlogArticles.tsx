import { Articles } from '@/lib/types/article'
import BlogArticle from '../BlogArticle'

interface BlogArticlesProps {
  articles: Articles
}

export default function BlogArticles({ articles }: BlogArticlesProps) {
  return (
    <div className="flex space-y-4">
      {articles.map((article, index) => (
        <BlogArticle key={index} article={article} />
      ))}
    </div>
  )
}
