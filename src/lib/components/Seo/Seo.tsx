import { url } from '@/lib/utils/url'
import { config } from '@/lib/utils/helpers'
import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { Metas } from '@/lib/types/seo'
import Head from 'next/head'

export type SeoMeta = React.ComponentPropsWithoutRef<'meta'>
export type SeoMetas = SeoMeta[]

export interface SeoProps {
  metas?: Metas
}

export default function Seo({ metas: metasProp = {} }: SeoProps) {
  const router = useRouter()
  const appName = config<string>('app.name')

  const defaultCollection = useMemo(
    () => ({
      type: 'website',
      siteName: appName,
      url: url(router.asPath),
      image: url('/assets/common/avatar.png'),
      twitterCard: 'summary_large_image',
      twitterSite: '@lbavendanos',
      canonical: url(router.asPath),
    }),
    [router, appName]
  )

  const collection = useMemo((): Metas => {
    const {
      title: titleProp,
      canonical: canonicalProp,
      ...propCollection
    } = metasProp
    const title = titleProp ? `${titleProp} | ${appName}` : appName

    return {
      title,
      ...defaultCollection,
      ...propCollection,
    }
  }, [appName, defaultCollection, metasProp])

  const metas = useMemo(
    (): SeoMetas => [
      { name: 'description', content: collection.description },
      { property: 'og:title', content: collection.title },
      { property: 'og:description', content: collection.description },
      { property: 'og:type', content: collection.type },
      { property: 'og:site_name', content: collection.siteName },
      { property: 'og:url', content: collection.url },
      { property: 'og:image', content: collection.image },
      { name: 'twitter:card', content: collection.twitterCard },
      { name: 'twitter:site', content: collection.twitterSite },
      { name: 'twitter:title', content: collection.title },
      { name: 'twitter:description', content: collection.description },
      { name: 'twitter:image', content: collection.image },
    ],
    [collection]
  )

  return (
    <Head>
      {collection.title && <title>{collection.title}</title>}
      {metas.map((metaProps, index) => (
        <meta key={index} {...metaProps} />
      ))}
      {collection.canonical && (
        <link rel="canonical" href={collection.canonical} />
      )}
    </Head>
  )
}
