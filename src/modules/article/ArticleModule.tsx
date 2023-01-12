import { Article } from 'lib/types/article'
import Container from 'lib/components/Container'
import ArticleSeo from './components/ArticleSeo'
import BaseLayout from '@/layouts/base'
import ArticleBody from './components/ArticleBody'
import ArticleHeader from './components/ArticleHeader'
import ArticleContext from './contexts'

interface ArticleModuleProps {
  article: Article
}

export default function ArticleModule({ article }: ArticleModuleProps) {
  return (
    <BaseLayout>
      <ArticleContext.Provider value={{ article }}>
        <ArticleSeo />
        <Container className="my-4 md:my-6 lg:my-8 xl:my-10">
          <article itemType="http://schema.org/Article" itemScope>
            <ArticleHeader />
            <ArticleBody />
          </article>
        </Container>
      </ArticleContext.Provider>
    </BaseLayout>
  )
}
