import { url } from 'lib/utils/url'
import { useArticleContext } from '../../contexts'
import Seo from 'lib/components/Seo'

export default function ArticleSeo() {
  const { article } = useArticleContext()

  return (
    <Seo
      title={article.title}
      description={article.description}
      openGraph={{
        url: url(article.slug),
        images: [
          {
            url: url(article.image),
          },
        ],
        article: {
          publishedTime: article.createdAt,
        },
      }}
    />
  )
}
