import { url } from '@/lib/utils/url'
import { useRouter } from 'next/router'
import Head from 'next/head'

export type SeoMetaProps = React.ComponentPropsWithoutRef<'meta'>
export type SeoMetas = SeoMetaProps[]

export interface SeoProps {
  title?: string
  description?: string
  canonical?: string
  metas?: SeoMetas
}

export default function Seo({
  title,
  description,
  canonical: canonicalProp,
  metas,
}: SeoProps) {
  const router = useRouter()
  const canonical = canonicalProp || url(router.asPath)

  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {metas?.map((metaProps, index) => (
        <meta key={index} {...metaProps} />
      ))}
    </Head>
  )
}
