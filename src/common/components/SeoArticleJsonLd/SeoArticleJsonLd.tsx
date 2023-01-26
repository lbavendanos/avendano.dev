import { ArticleJsonLd, ArticleJsonLdProps } from 'next-seo'

export interface SeoArticleJsonLdProps extends ArticleJsonLdProps {}

export default function SeoArticleJsonLd(props: SeoArticleJsonLdProps) {
  return <ArticleJsonLd {...props} />
}
