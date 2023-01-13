import { url } from 'lib/utils/url'
import { config } from 'lib/utils/helpers'
import { useRouter } from 'next/router'
import { OpenGraph, Twitter } from 'next-seo/lib/types'
import { NextSeo, NextSeoProps } from 'next-seo'

export interface SeoProps extends NextSeoProps {}

export default function Seo({
  canonical: canonicalProp,
  openGraph: openGraphProp,
  twitter: twitterProp,
  ...props
}: SeoProps) {
  const router = useRouter()
  const appName = config<string>('app.name')

  const canonical = canonicalProp || url(router.asPath)

  const openGraph: OpenGraph = {
    type: 'website',
    siteName: appName,
    url: url(router.asPath),
    images: [
      {
        url: url('/assets/common/avatar.png'),
        width: 128,
        height: 128,
        alt: appName,
      },
    ],
    ...openGraphProp,
  }

  const twitter: Twitter = {
    cardType: 'summary_large_image',
    site: '@lbavendanos',
    ...twitterProp,
  }

  return (
    <NextSeo
      {...props}
      titleTemplate={`%s | ${appName}`}
      defaultTitle={appName}
      canonical={canonical}
      openGraph={openGraph}
      twitter={twitter}
    />
  )
}
