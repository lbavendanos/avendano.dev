import { useArticleContext } from '../../contexts'
import Seo from 'lib/components/Seo'

export default function ArticleSeo() {
  const { article } = useArticleContext()
  const { title, description, url, image, createdAt } = article

  return (
    <Seo metas={{ title, description, url, image, publishedAt: createdAt }} />
  )
}
