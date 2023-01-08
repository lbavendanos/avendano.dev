import { Metas } from '@/lib/types/seo'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import SlugSeo from './components/SlugSeo'
import Container from '@/lib/components/Container'
import BaseLayout from '@/layouts/base'

interface BlogModuleProps {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >
  metas: Metas
}

export default function BlogModule({ source, metas }: BlogModuleProps) {
  return (
    <BaseLayout>
      <SlugSeo metas={metas} />
      <Container className="my-10">
        <MDXRemote {...source} />
      </Container>
    </BaseLayout>
  )
}
