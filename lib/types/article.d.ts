export interface Article {
  title?: string
  description?: string
  slug?: string
  image?: string
  readingTime?: string
  mdxRemote?: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >
  createdAt?: string
}

export type Articles = Article[]
