import { Article } from '@/lib/types/article'
import { createContext, useContext } from 'react'

export interface ArticleContextProps {
  article: Article
}

const ArticleContext = createContext<ArticleContextProps>(
  {} as ArticleContextProps
)

export const useArticleContext = () => useContext(ArticleContext)

export default ArticleContext
