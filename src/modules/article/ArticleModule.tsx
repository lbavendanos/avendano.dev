import { cn, config } from 'lib/utils/helpers'
import { dtFormat, dtParse } from 'lib/utils/date'
import { Article } from 'lib/types/article'
import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'
import Container from 'lib/components/Container'
import ArticleSeo from './components/ArticleSeo'
import BaseLayout from '@/layouts/base'
import ArticleContext from './contexts'

interface ArticleModuleProps {
  article: Article
}

export default function ArticleModule({ article }: ArticleModuleProps) {
  const appName = config('app.name')

  return (
    <BaseLayout>
      <ArticleContext.Provider value={{ article }}>
        <ArticleSeo />
        <Container className="my-4 md:my-6 lg:my-8 xl:my-10">
          <article itemType="http://schema.org/Article" itemScope>
            <header>
              {article.title && (
                <h1
                  itemProp="name"
                  className={cn(
                    'mb-4 text-3xl font-bold tracking-tight text-black',
                    'md:text-5xl dark:text-white'
                  )}
                >
                  {article.title}
                </h1>
              )}
              <div
                className={cn(
                  'flex flex-col items-start justify-between w-full mt-2',
                  'md:flex-row md:items-center'
                )}
              >
                <div className="flex items-center">
                  <Image
                    src="/assets/common/avatar.png"
                    alt={appName}
                    className="rounded-full"
                    height={24}
                    width={24}
                    sizes="20vw"
                  />
                  <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    {`${appName} / `}
                    {article.createdAt && (
                      <time itemProp="datePublished">
                        {dtFormat(dtParse(article.createdAt), 'MMMM dd, yyyy')}
                      </time>
                    )}
                  </p>
                </div>
                {article.readingTime && (
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
                    {article.readingTime}
                  </p>
                )}
              </div>
            </header>
            {article.mdxRemoteSerializeResult && (
              <div
                itemProp="articleBody"
                className="mt-4 prose dark:prose-invert"
              >
                <MDXRemote {...article.mdxRemoteSerializeResult} />
              </div>
            )}
          </article>
        </Container>
      </ArticleContext.Provider>
    </BaseLayout>
  )
}
