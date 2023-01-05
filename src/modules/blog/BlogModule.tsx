import BlogSeo from './components/BlogSeo'
import Container from '@/lib/components/Container'
import BaseLayout from '@/layouts/base'
import BlogOverview from './components/BlogOverview'

export default function BlogModule() {
  return (
    <BaseLayout>
      <BlogSeo />
      <Container className="my-10">
        <BlogOverview />
      </Container>
    </BaseLayout>
  )
}
