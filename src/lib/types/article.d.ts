export interface Article {
  title?: string
  description?: string
  url?: string
  image?: string
  readingTime?: string
  mdxRemoteSerializeResult?: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >
  createdAt?: string
}

export type Articles = Article[]
