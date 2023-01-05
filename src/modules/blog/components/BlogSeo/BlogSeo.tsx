import { url } from '@/lib/utils/url'
import { config } from '@/lib/utils/helpers'
import Seo, { SeoMetas } from '@/lib/components/Seo'

export default function BlogSeo() {
  const appName = config<string>('app.name')
  const title = `${appName} | Blog`
  const description = 'Thoughts on the software industry'
  const image = ''

  const metas: SeoMetas = [
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: appName },
    { property: 'og:url', content: url('/blog') },
    { property: 'og:image', content: image },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@lbavendanos' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
  ]

  return <Seo title={title} description={description} metas={metas} />
}
