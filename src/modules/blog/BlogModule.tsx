import { useMemo, useState } from 'react'
import { Articles } from 'lib/types/article'
import BlogSeo from './components/BlogSeo'
import Container from '@/common/components/Container'
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
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
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
