import { cn, config } from '@/lib/utils/helpers'
import { dtFormat, dtParse } from '@/lib/utils/date'
import { Metas } from '@/lib/types/seo'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Image from 'next/image'
import SlugSeo from './components/SlugSeo'
import Container from '@/lib/components/Container'
import BaseLayout from '@/layouts/base'

interface BlogModuleProps {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >
  metas: Metas
  readingTime: string
}

export default function BlogModule({
  source,
  metas,
  readingTime,
}: BlogModuleProps) {
  const appName = config('app.name')

  return (
    <BaseLayout>
      <SlugSeo metas={metas} />
      <Container className="my-10">
        <article itemType="http://schema.org/Article" itemScope>
          <header>
            <h1
              itemProp="name"
              className={cn(
                'mb-4 text-3xl font-bold tracking-tight text-black',
                'md:text-5xl dark:text-white'
              )}
            >
              {metas.title}
            </h1>
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
                  <time itemProp="datePublished">
                    {metas.publishedAt &&
                      dtFormat(dtParse(metas.publishedAt), 'MMMM dd, yyyy')}
                  </time>
                </p>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
                {readingTime}
              </p>
            </div>
          </header>
          <div itemProp="articleBody" className="mt-4 prose dark:prose-invert">
            <MDXRemote {...source} />
          </div>
        </article>
      </Container>
    </BaseLayout>
  )
}
