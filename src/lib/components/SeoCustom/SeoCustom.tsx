import { url } from '@/lib/utils/url'
import { config } from '@/lib/utils/helpers'
import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { Metas } from '@/lib/types/seo'
import Seo, { SeoMetas } from '../Seo'

export interface SeoCustomProps {
  metas?: Metas
}

export default function SeoCustom({ metas: metasProp }: SeoCustomProps) {
  const router = useRouter()
  const appName = config<string>('app.name')

  const metas = useMemo(
    (): Metas => ({
      title: appName,
      type: 'website',
      siteName: appName,
      url: url(router.asPath),
      image: url('/assets/common/avatar.png'),
      twitterCard: 'summary_large_image',
      twitterSite: '@lbavendanos',
      ...metasProp,
    }),
    [metasProp, appName, router]
  )

  const seoMetas = useMemo(
    (): SeoMetas => [
      { property: 'og:title', content: metas.title },
      { property: 'og:description', content: metas.description },
      { property: 'og:type', content: metas.type },
      { property: 'og:site_name', content: metas.siteName },
      { property: 'og:url', content: metas.url },
      { property: 'og:image', content: metas.image },
      { name: 'twitter:card', content: metas.twitterCard },
      { name: 'twitter:site', content: metas.twitterSite },
      { name: 'twitter:title', content: metas.title },
      { name: 'twitter:description', content: metas.description },
      { name: 'twitter:image', content: metas.image },
    ],
    [metas]
  )

  return (
    <Seo title={metas.title} description={metas.description} metas={seoMetas} />
  )
}
