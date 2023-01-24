export interface Article {
  title?: string
  description?: string
  slug?: string
  readingTime?: string
  mdxRemote?: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >
  content?: string
  createdAt?: string | null
  formattedCreatedAt?: string | null
}

export type Articles = Article[]
