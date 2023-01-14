import { url } from 'lib/utils/url'
import { config } from 'lib/utils/helpers'
import { useMemo } from 'react'
import { useArticleContext } from '../../contexts'
import Seo from 'lib/components/Seo'
import SeoArticleJsonLd from 'lib/components/SeoArticleJsonLd'

export default function ArticleSeo() {
  const { article } = useArticleContext()

  const seo = useMemo(
    () => ({
      title: article.title || '',
      description: article.description || '',
      url: url(article.slug),
      image: url(`/api/og?title=${article.title}`),
      datePublished: article.createdAt || new Date().toISOString(),
      authorName: config<string>('app.name'),
    }),
    [article]
  )

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        openGraph={{
          type: 'article',
          url: seo.url,
          images: [{ url: seo.image }],
          article: {
            publishedTime: seo.datePublished,
          },
        }}
      />
      <SeoArticleJsonLd
        url={seo.url}
        title={seo.title}
        images={[seo.image]}
        datePublished={seo.datePublished}
        authorName={seo.authorName}
        description={seo.description}
      />
    </>
  )
}
