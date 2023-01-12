import { cn, config } from 'lib/utils/helpers'
import { dtFormat, dtParse } from 'lib/utils/date'
import { useArticleContext } from '../../contexts'
import Image from 'next/image'

export default function ArticleHeader() {
  const { article } = useArticleContext()
  const appName = config('app.name')

  return (
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
            {appName}
            {article.createdAt && (
              <>
                {' / '}
                <time itemProp="datePublished">
                  {dtFormat(dtParse(article.createdAt), 'MMMM dd, yyyy')}
                </time>
              </>
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
  )
}
