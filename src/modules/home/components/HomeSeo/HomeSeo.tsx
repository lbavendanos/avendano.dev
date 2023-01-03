import { url } from '@/lib/utils/url'
import { config } from '@/lib/utils/helpers'
import Seo, { SeoMetas } from '@/lib/components/Seo'

export default function HomeSeo() {
  const appName = config('app.name')
  const title = appName
  const description = 'Software Developer'

  const metas: SeoMetas = [
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: appName },
    { property: 'og:url', content: url() },
    { property: 'og:image', content: '' },
  ]

  return <Seo title={title} description={description} metas={metas} />
}
