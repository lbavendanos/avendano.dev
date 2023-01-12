import { useMemo, useState } from 'react'
import { Articles } from '@/lib/types/article'
import BlogSeo from './components/BlogSeo'
import Container from '@/lib/components/Container'
import BaseLayout from '@/layouts/base'
import BlogArticles from './components/BlogArticles'
import BlogOverview from './components/BlogOverview'

interface BlogModuleProps {
  articles: Articles
}

export default function BlogModule({ articles }: BlogModuleProps) {
  const [search, setSearch] = useState('')

  const filteredArticles = useMemo(
    () =>
      articles.filter((article) =>
        article.title?.toLowerCase().includes(search.toLowerCase())
      ),
    [articles, search]
  )

  return (
    <BaseLayout>
      <BlogSeo />
      <Container className="my-4 md:my-6 lg:my-8 xl:my-10 space-y-8">
        <BlogOverview />
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles"
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {!filteredArticles.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No articles found.
          </p>
        )}
        <BlogArticles articles={filteredArticles} />
      </Container>
    </BaseLayout>
  )
}
